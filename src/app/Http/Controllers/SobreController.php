<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Alunos;

class SobreController extends Controller
{
    public function sobre()
    {
       $aluno = Alunos::where('status_aluno', 'EM CURSO')
        ->inRandomOrder()
        ->get();

        return view('site.sobre.sobre', compact('aluno'));
    }
}
