<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Product extends Model
{
    use HasFactory;

    public function expenses() {
        return $this->belongsTo(Expense::class);
    }

    public function sales(){
        return $this->hasMany(Sale::class);
    }

    public function images() {
        return $this->hasMany(Image::class);
    }

    public function category() {
        return $this->belongsTo(Category::class);
    }

    public function getCategory() {
        return $this->category();
    }
}
