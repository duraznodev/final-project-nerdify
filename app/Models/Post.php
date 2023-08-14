<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;

class Post extends Model implements HasMedia
{
    use HasFactory;
    use InteractsWithMedia;

    protected $fillable = ['description', 'author_id'];

    public function author(): BelongsTo
    {
        return $this->belongsTo(User::class, 'author_id');
    }

    protected $casts = [
        'updated_at' => 'datetime:d M \a\t H:i A',
    ];

    public function likes(): BelongsToMany
    {
        return $this->belongsToMany(User::class, 'post_likes', 'post_id', 'user_id');
    }

    public function saves(): BelongsToMany
    {
        return $this->belongsToMany(User::class, 'saved_posts', 'post_id', 'user_id');
    }

    //    public function isLikedBy(User $user)
    //    {
    //        return $this->likes->contains($user);
    //    }

    public function comments(): HasMany
    {
        return $this->hasMany(Comment::class, 'post_id');
    }

    public function savedBy(): BelongsToMany
    {
        return $this->belongsToMany(User::class, 'saved_posts', 'post_id', 'user_id');
    }
}
