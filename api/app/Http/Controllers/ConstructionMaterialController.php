<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\ConstructionMaterial;

class ConstructionMaterialController extends Controller
{
    public function index()
    {
        return ConstructionMaterial::all();
    }

    public function store(Request $request)
    {
        ConstructionMaterial::create($request->all());
    }

    public function show($id)
    {
        return ConstructionMaterial::findOrFail($id);
    }

    public function update(Request $request, $id)
    {
        $ConstructionMaterial = ConstructionMaterial::findOrFail($id);
        $ConstructionMaterial->update($request->all());
    }

    public function destroy($id)
    {
        $ConstructionMaterial = ConstructionMaterial::findOrFail($id);
        $ConstructionMaterial->delete();
    }
}
