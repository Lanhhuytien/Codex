<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Models\ProductImage;
use App\Models\ProductTranslation;
use App\Services\AdminLogger;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class ProductController extends Controller
{
    public function index(Request $request)
    {
        $locale = app()->getLocale();

        $products = Product::with([
            'translations' => fn ($query) => $query->where('locale', $locale),
            'images',
            'category.translations' => fn ($query) => $query->where('locale', $locale),
        ])->paginate(12);

        return response()->json($products);
    }

    public function show(Product $product)
    {
        $locale = app()->getLocale();

        $product->load([
            'translations' => fn ($query) => $query->where('locale', $locale),
            'images',
            'category.translations' => fn ($query) => $query->where('locale', $locale),
        ]);

        return response()->json($product);
    }

    public function store(Request $request, AdminLogger $logger)
    {
        $data = $request->validate([
            'sku' => ['required', 'string', 'unique:products,sku'],
            'price' => ['required', 'numeric', 'min:0'],
            'sale_price' => ['nullable', 'numeric', 'min:0'],
            'stock' => ['required', 'integer', 'min:0'],
            'category_id' => ['required', 'integer', 'exists:categories,id'],
            'translations' => ['required', 'array'],
            'translations.*.locale' => ['required', 'in:vi,en'],
            'translations.*.name' => ['required', 'string'],
            'translations.*.description' => ['nullable', 'string'],
            'images' => ['nullable', 'array'],
            'images.*' => ['image', 'max:2048'],
        ]);

        $product = Product::create($data);

        foreach ($data['translations'] as $translation) {
            ProductTranslation::create([
                'product_id' => $product->id,
                'locale' => $translation['locale'],
                'name' => $translation['name'],
                'description' => $translation['description'] ?? null,
            ]);
        }

        if ($request->hasFile('images')) {
            foreach ($request->file('images') as $index => $image) {
                $path = $image->store('products', 'public');
                ProductImage::create([
                    'product_id' => $product->id,
                    'path' => $path,
                    'is_primary' => $index === 0,
                ]);
            }
        }

        $logger->log('product_created', ['product_id' => $product->id]);

        return response()->json($product, 201);
    }

    public function update(Request $request, Product $product, AdminLogger $logger)
    {
        $data = $request->validate([
            'price' => ['sometimes', 'numeric', 'min:0'],
            'sale_price' => ['nullable', 'numeric', 'min:0'],
            'stock' => ['sometimes', 'integer', 'min:0'],
            'category_id' => ['sometimes', 'integer', 'exists:categories,id'],
            'translations' => ['sometimes', 'array'],
            'translations.*.locale' => ['required_with:translations', 'in:vi,en'],
            'translations.*.name' => ['required_with:translations', 'string'],
            'translations.*.description' => ['nullable', 'string'],
        ]);

        $product->update($data);

        if (!empty($data['translations'])) {
            foreach ($data['translations'] as $translation) {
                ProductTranslation::updateOrCreate(
                    ['product_id' => $product->id, 'locale' => $translation['locale']],
                    ['name' => $translation['name'], 'description' => $translation['description'] ?? null]
                );
            }
        }

        $logger->log('product_updated', ['product_id' => $product->id]);

        return response()->json($product);
    }

    public function destroy(Product $product, AdminLogger $logger)
    {
        $product->delete();
        $logger->log('product_deleted', ['product_id' => $product->id]);

        return response()->json(['message' => __('product.deleted')]);
    }
}
