<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('client_records', function (Blueprint $table) {
            $table->id();
            $table->foreignId("client_id");
            $table->string("appointment_type");
            $table->foreignId("office_id");
            $table->foreignId("unit_id");
            $table->foreignId("unit_services_id");
            $table->boolean("status");
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('client_records');
    }
};
