<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Feedback extends Model
{
    protected $table = 'tbl_feedbacks';
    protected $primaryKey = 'id_feedback';
    const CREATED_AT = 'criado_em_feedback';
    const UPDATED_AT = 'atualizado_em_feedback';

    protected $fillable = [
        'id_aluno',
        'id_professor',
        'id_curso',
        'nota_feedback',
        'comentario_feedback',
    ];

    public function aluno()
    {
        return $this->belongsTo(Alunos::class, 'id_aluno', 'id_aluno');
    }

    public function professor()
    {
        return $this->belongsTo(Professor::class, 'id_professor', 'id_professor');
    }

    public function curso()
    {
        return $this->belongsTo(Curso::class, 'id_curso', 'id_curso');
    }
}
