<?php

namespace App\Http\Controllers;

use App\Models\Servico;

class ServicoController extends Controller
{
    public function servico($tipo = 'aulas')
    {
        $tipos = [
            'aulas' => 'Aulas',
            'traducao' => 'Tradução',
            'revisao' => 'Revisão',
            'redacao' => 'Redação',
            'preparatorios' => 'Preparatórios',
        ];

        if (!array_key_exists($tipo, $tipos)){
            $tipo = 'aulas';
        }

        $tipoAtual = $tipo;

        $servicos = Servico::with('ServicoProfessor')
        ->where('tipo_servico', $tipoAtual)
        ->orderBy('ordenar_servico')
        ->get();

        return view('site.servico.servico', compact('tipos', 'tipoAtual', 'servicos'));
    }
}
