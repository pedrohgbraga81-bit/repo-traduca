<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Servico;
use App\Models\Professor;

class ServicoController extends Controller
{
    public function servico()
    {
        $tipos = [
            'aulas' => 'Aulas',
            'traducao' => 'Tradução',
            'revisao' => 'Revisão',
            'redacao' => 'Redação',
            'preparatorios' => 'Preparatórios',
        ];

        $tipoAtual = request('tipo', 'aulas');

        if (!array_key_exists($tipoAtual, $tipos)){
            $tipoAtual = 'aulas';
        }

        $servicos = Servico::with('ServicoProfessor')
        ->orderBy('ordenar_servico')
        ->get();

        return view('site.servico.servico', compact('tipos', 'tipoAtual', 'servicos'));
    }

    public function show()
    {
        
    }
}
