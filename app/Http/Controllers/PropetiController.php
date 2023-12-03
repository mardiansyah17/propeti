<?php

namespace App\Http\Controllers;

use App\Models\Propeti;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PropetiController extends Controller
{
    public function index()
    {
        $propetis = Propeti::with(['images'])->get();
//        dd($propetis);
        return Inertia::render('Propeties', [
            'propetis' => $propetis,

        ]);
    }

    public function store(Request $request)
    {

        $request->validate([
            'title' => 'required|string|max:255|min:3',
            'description' => 'required|string',
            'price' => 'required|numeric',
            'address' => 'required|string',
        ]);

        $propeti = Propeti::create([
            'title' => $request->title,
            'description' => $request->description,
            'price' => $request->price,
            'address' => $request->address,
            'city' => "cakep",
            'phone' => "08123456789",
            'user_id' => auth()->user()->id,
        ]);

        $file = $request->file('images');

        if (is_array($file)) {
            foreach ($file as $item) {
                $propeti->images()->create([
                    'path' => $item['file']->store('propeti'),
                ]);
            }
        } else {
            $propeti->images()->create([
                'path' => $file->store('propeti')
            ]);

        }
        return redirect()->route('my-propeti');
    }

    public function create()
    {

        return Inertia::render('CreatePropeti');
    }

    public function myPropeti()
    {
        $propetis = auth()->user()->propetis()->with(['images'])->get();
//        dd($propetis);
        return Inertia::render('MyPropeti', [
            'propetis' => $propetis,
        ]);
    }

    public function show($id)
    {
        $propeti = Propeti::with(['images', 'user'])->findOrFail($id);
        return Inertia::render('PropetyDetail', [
            'propeti' => $propeti,
        ]);
    }

    public function delete($id)
    {
        $propeti = Propeti::findOrFail($id);

        $propeti->delete();
        return redirect()->route('my-propeti');
    }
}
