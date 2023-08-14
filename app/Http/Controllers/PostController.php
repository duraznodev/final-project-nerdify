<?php

namespace App\Http\Controllers;

use App\Http\Requests\PostRequest;
use App\Models\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{
    public function store(PostRequest $request)
    {
        $post = $request->user()->posts()->create($request->validated());
        $fileAdders = $post->addMultipleMediaFromRequest(['images'])
            ->each(function ($fileAdder) use ($request) {
                $fileAdder->toMediaCollection('u'.$request->user()->id);
            });

        return redirect()->back();
    }

    public function like(Post $post)
    {
        $post->likes()->toggle(auth()->user());

        return response()->json([
            'liked' => auth()->user()->likedPosts->contains($post),
            'likes_count' => $post->likes()->count(),
        ]);
    }

    public function save(Post $post)
    {
        $post->saves()->toggle(auth()->user());

        return response()->json([
            'saved' => auth()->user()->savedPosts->contains($post),
            'saves_count' => $post->saves()->count(),
        ]);
    }

    public function comment(Post $post, Request $request)
    {
        $data = $request->validate([
            'body' => ['required', 'string', 'max:280'],
        ]);
        $data['user_id'] = auth()->id();

        $post->comments()->create($data);
    }
}
