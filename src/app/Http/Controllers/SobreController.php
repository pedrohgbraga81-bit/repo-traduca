<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\Alunos;

class SobreController extends Controller
{
    public function sobre()
    {
       $aluno = Alunos::where('status_aluno', 'EM CURSO')
        ->inRandomOrder()
        ->get();

        $alunos = DB::table('tbl_alunos')
            ->join('tbl_matricula', 'tbl_alunos.id_aluno', '=', 'tbl_matricula.id_aluno')
            ->leftJoin('tbl_feedbacks', function ($join) {
                $join->on('tbl_alunos.id_aluno', '=', 'tbl_feedbacks.id_aluno')
                     ->on('tbl_matricula.id_curso', '=', 'tbl_feedbacks.id_curso');
            })
            ->leftJoin('tbl_professor', 'tbl_feedbacks.id_professor', '=', 'tbl_professor.id_professor')
            ->where('tbl_matricula.status_matricula', 'ATIVO')
            ->select(
                'tbl_alunos.*',
                'tbl_matricula.id_matricula',
                'tbl_matricula.data_matricula',
                'tbl_feedbacks.nota_feedback',
                'tbl_feedbacks.comentario_feedback',
                'tbl_professor.nome_professor',
            )
            ->get();

        return view('site.sobre.sobre', compact('alunos', 'aluno'));
    }
}
