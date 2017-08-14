<?php

namespace App\Http\Controllers;

use App\Link;
use Illuminate\Http\Request;

class LinksController extends Controller
{
    public function __construct()
    {
        
    }

    public function index() {
        return response()->json(Link::all());
    }

    public function store(Request $request) {
        $this->validate($request, [
            'url' => 'required|url|active_url|unique:links',
            'description' => 'max:500'
        ]);

        $link = Link::create([
            'url' => $request->input('url'),
            'description' => $request->input('description')
        ]);
        
        return response()->json(['msg' => 'Link created!', 'newLink' => $link]);
    }

    public function destroy($id, Request $request) {
        $link = Link::findOrFail($id);
        $link->delete();
        
        return response()->json(['msg' => 'Link deleted!']);
    }
}
