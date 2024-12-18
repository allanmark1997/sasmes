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
        Schema::table('client_records', function (Blueprint $table) {
            $table->dropColumn("office_id");
            $table->dropColumn("unit_id");
            $table->dropColumn("appointment_type");
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('client_records', function (Blueprint $table) {
            //
        });
    }
};
