<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\CategoryTranslation;
use App\Services\AdminLogger;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public function index()
    {
        $locale = app()->getLocale();
        $categories = Category::with([
            'translations' => fn ($query) => $query->where('locale', $locale),
        ])->get();

        return response()->json($categories);
    }

    public function store(Request $request, AdminLogger $logger)
    {
        $data = $request->validate([
            'slug' => ['required', 'string', 'unique:categories,slug'],
            'translations' => ['required', 'array'],
            'translations.*.locale' => ['required', 'in:vi,en'],
            'translations.*.name' => ['required', 'string'],
        ]);

        $category = Category::create(['slug' => $data['slug']]);
        foreach ($data['translations'] as $translation) {
            CategoryTranslation::create([
                'category_id' => $category->id,
                'locale' => $translation['locale'],
                'name' => $translation['name'],
            ]);
        }

        $logger->log('category_created', ['category_id' => $category->id]);

        return response()->json($category, 201);
    }

    public function update(Request $request, Category $category, AdminLogger $logger)
    {
        $data = $request->validate([
            'slug' => ['sometimes', 'string', 'unique:categories,slug,' . $category->id],
            'translations' => ['sometimes', 'array'],
            'translations.*.locale' => ['required_with:translations', 'in:vi,en'],
            'translations.*.name' => ['required_with:translations', 'string'],
        ]);

        $category->update($data);

        if (!empty($data['translations'])) {
            foreach ($data['translations'] as $translation) {
                CategoryTranslation::updateOrCreate(
                    ['category_id' => $category->id, 'locale' => $translation['locale']],
                    ['name' => $translation['name']]
                );
            }
        }

        $logger->log('category_updated', ['category_id' => $category->id]);

        return response()->json($category);
    }

    public function destroy(Category $category, AdminLogger $logger)
    {
        $category->delete();
        $logger->log('category_deleted', ['category_id' => $category->id]);

        return response()->json(['message' => __('category.deleted')]);
    }
}
