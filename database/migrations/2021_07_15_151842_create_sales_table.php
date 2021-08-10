<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSalesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('sales', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('description');
            $table->string('promotional_code');
            $table->foreignId('product_id')->references('id')->on('products');
            $table->foreignId('client_id')->references('id')->on('users');
            $table->string('subcategory_id');
            $table->double('price')->default(0);
            $table->string('size')->nullable();
            $table->string('color')->nullable();
            $table->string('gender')->nullable();
            $table->integer('amount')->default(1);
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
        Schema::dropIfExists('sales');
    }
}
