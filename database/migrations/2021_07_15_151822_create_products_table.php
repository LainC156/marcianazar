<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProductsTable extends Migration
{
    /**
     * Run the migrations.
     * status: 0 = used, 1=  new, etc
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string('product_name');
            $table->string('product_description');
            $table->foreignId('category_id')->references('id')->on('categories');
            $table->double('price')->default(0);
            $table->string('size')->nullable();
            $table->string('color')->nullable();
            $table->string('gender')->nullable();
            $table->string('observations')->nullable();
            $table->integer('status')->default(1);
            $table->integer('amount')->default(1);
            $table->foreignId('expense_id')->references('id')->on('expenses');
            $table->string('url_post')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('products');
    }
}
