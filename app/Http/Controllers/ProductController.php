<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index($id)
    {
        switch ($id) {
            case 'lastupdates':
                return Product::orderBy('updated_at', 'ASC')->with('category')->with('images')->take(10)->get();
                break;
            case 'clothing':
                return Product::with('category')->with('images')
                    ->whereHas('category', function ($query) {
                        $query->where('parent_id', 1);
                    })->get();
                break;
            case 'plants':
                return Product::with('category')->with('images')
                    ->whereHas('category', function ($query) {
                        $query->where('parent_id', 4);
                    })->get();
                break;
            default:
                # code...
                break;
        }
        $products = Product::all();
        return $products;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function show(Product $product)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function edit(Product $product)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Product $product)
    {
        //test
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function destroy(Product $product)
    {
        //
    }

    public function getById($id)
    {
        $product = Product::with('category')
            ->where('products.id', $id)
            ->select('products.id', 'products.name', 'i.url', 'products.description', 'products.price', 'c.name as category_name')->first();
        return $product;
    }
}
