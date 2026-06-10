<?php

namespace App\Models;

use Illuminate\Foundation\Auth\User as Authenticatable;


use App\Models\Servico;

class Professor extends Authenticatable
{
    protected $table = "tbl_professor";
    protected $primaryKey = 'id_professor';
    public $timestamps = true;

    const CREATED_AT = 'criado_em_professor';
    const UPDATED_AT = 'atualizado_em_professor';

    protected $fillable = [
        'nome_professor',
        'especialidade_professor',
        'experiencia_professor',
        'bio_professor',
        'foto_professor',
        'email_professor',
        'curso_professor',
        'nivel_professor',
        'telefone_professor',
        'senha_professor'
    ];

    // Um professor pertence a mais de um serviço
    public function ProfessorServico(){
        return $this->hasMany(Servico::class,
        'id_professor', 'id_professor');
    }

    public function getAuthPassword()
    {
        return $this->senha_professor;
    }
}
