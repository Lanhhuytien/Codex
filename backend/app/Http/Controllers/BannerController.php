<?php

namespace App\Http\Controllers;

use App\Models\Banner;
use App\Models\BannerTranslation;
use App\Services\AdminLogger;
use Illuminate\Http\Request;

class BannerController extends Controller
{
    public function index()
    {
        $locale = app()->getLocale();
        $banners = Banner::with([
            'translations' => fn ($query) => $query->where('locale', $locale),
        ])->where('is_active', true)->get();

        return response()->json($banners);
    }

    public function store(Request $request, AdminLogger $logger)
    {
        $data = $request->validate([
            'image' => ['required', 'image', 'max:2048'],
            'is_active' => ['required', 'boolean'],
            'translations' => ['required', 'array'],
            'translations.*.locale' => ['required', 'in:vi,en'],
            'translations.*.title' => ['required', 'string'],
            'translations.*.subtitle' => ['nullable', 'string'],
        ]);

        $path = $request->file('image')->store('banners', 'public');
        $banner = Banner::create([
            'image_path' => $path,
            'is_active' => $data['is_active'],
        ]);

        foreach ($data['translations'] as $translation) {
            BannerTranslation::create([
                'banner_id' => $banner->id,
                'locale' => $translation['locale'],
                'title' => $translation['title'],
                'subtitle' => $translation['subtitle'] ?? null,
            ]);
        }

        $logger->log('banner_created', ['banner_id' => $banner->id]);

        return response()->json($banner, 201);
    }

    public function update(Request $request, Banner $banner, AdminLogger $logger)
    {
        $data = $request->validate([
            'image' => ['sometimes', 'image', 'max:2048'],
            'is_active' => ['sometimes', 'boolean'],
            'translations' => ['sometimes', 'array'],
            'translations.*.locale' => ['required_with:translations', 'in:vi,en'],
            'translations.*.title' => ['required_with:translations', 'string'],
            'translations.*.subtitle' => ['nullable', 'string'],
        ]);

        if ($request->hasFile('image')) {
            $path = $request->file('image')->store('banners', 'public');
            $banner->update(['image_path' => $path]);
        }

        if (array_key_exists('is_active', $data)) {
            $banner->update(['is_active' => $data['is_active']]);
        }

        if (!empty($data['translations'])) {
            foreach ($data['translations'] as $translation) {
                BannerTranslation::updateOrCreate(
                    ['banner_id' => $banner->id, 'locale' => $translation['locale']],
                    ['title' => $translation['title'], 'subtitle' => $translation['subtitle'] ?? null]
                );
            }
        }

        $logger->log('banner_updated', ['banner_id' => $banner->id]);

        return response()->json($banner);
    }

    public function destroy(Banner $banner, AdminLogger $logger)
    {
        $banner->delete();
        $logger->log('banner_deleted', ['banner_id' => $banner->id]);

        return response()->json(['message' => __('banner.deleted')]);
    }
}
