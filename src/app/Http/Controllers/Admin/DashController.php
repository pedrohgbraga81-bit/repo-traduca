<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Professor;
use App\Models\Alunos; // 👈 estava faltando isso
use Illuminate\Http\Request;

class DashController extends Controller
{
    public function index()
    {

        $professor           = auth('admin')->user();
        $totalProfessores    = Professor::count();
        $professoresRecentes = Professor::orderBy('criado_em_professor', 'desc')->take(5)->get();
        $totalAlunos         = Alunos::count();

       

        return view('admin.dash.dashboard', compact(
            'professor',
            'totalProfessores',
            'professoresRecentes',
            'totalAlunos'
        ));
    }
}