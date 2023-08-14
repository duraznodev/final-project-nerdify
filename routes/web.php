<?php

use App\Http\Controllers\PostController;
use App\Http\Controllers\ProfileController;
use App\Models\Post;
use App\Models\User;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Spatie\MediaLibrary\MediaCollections\Models\Media;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/', function () {
        return Inertia::render('Home', [
            'posts' => auth()->user()->timeline(),
        ]);
    });

    Route::get('/explore', function () {
        $posts = Post::query()->with(['media', 'author', 'comments'])->withCount(['likes', 'savedBy'])->latest()->get();

        return Inertia::render('Explore', [
            'posts' => $posts,
        ]);
    });

    Route::get('friends', function () {
        return Inertia::render('Friends', [
            'friends' => auth()->user()->friends(),
        ]);
    });

    Route::get('photos', function () {
        return Inertia::render('Photos', [
            'photos' => auth()->user()->photos()->get(),
        ]);
    });

    Route::get('u/{user:username}', function (User $user) {
        $userData = array_merge($user->load(['followers'])->loadCount(['posts', 'followers', 'following', 'likedPosts', 'savedPosts'])->toArray(), [
            'isFollowing' => auth()->user()->following->contains($user),
            'photos_count' => Media::where('collection_name', 'u'.$user->id)->count(),
        ]);

        return Inertia::render('User', [
            'user' => $userData,
            'posts' => $user->posts()->with(['media', 'author', 'comments'])->withCount(['likes', 'savedBy'])->latest()->get(),
            'photos' => $user->photos()->limit(9)->get(),
        ]);
    })->name('profile');

    Route::apiResource('posts', PostController::class);
    Route::post('posts/{post}/like', [PostController::class, 'like']);
    Route::post('posts/{post}/save', [PostController::class, 'save']);
    Route::post('posts/{post}/comment', [PostController::class, 'comment']);

    Route::post('u/{user:username}/follow', function (User $user) {
        auth()->user()->following()->toggle($user);

        return response()->json([
            'following' => auth()->user()->following->contains($user),
        ]);
    });

    Route::inertia('notifications', 'Notifications');

    Route::get('profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
