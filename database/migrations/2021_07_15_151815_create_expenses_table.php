<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateExpensesTable extends Migration
{
    /**
     * Run the migrations.
     * expense_type:
     *  0 = ropa
     *  1 = papeleria/arte
     *  2 = transporte
     *  3 = plantas
     *  4 = otros
     * @return void
     */
    public function up()
    {
        Schema::create('expenses', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('description');
            $table->string('expense_type')->nullable();
            $table->double('price')->default(0);
            $table->integer('amount')->default(1);
            $table->string('img_url')->default('default_expense.jpg');
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
        Schema::dropIfExists('expenses');
    }
}
