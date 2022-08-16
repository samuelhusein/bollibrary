<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class RegisterController extends Controller
{
    public function register(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'email' => 'required',
            'password'=>'required',
        ]);


        $register = User::create([
            'name' => trim($request->name),
            'email' => strtolower($request->email),
            'password' => Hash::make($request->password),
        ]);

    }
}
