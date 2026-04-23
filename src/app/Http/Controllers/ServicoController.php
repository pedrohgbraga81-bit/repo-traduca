<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ServicoController extends Controller
{
    public function servico()
    {
        return view('site.servico.servico');
    }
}
