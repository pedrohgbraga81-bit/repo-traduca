<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Alunos extends Model
{
    protected $table = 'tbl_alunos';
        protected $primaryKey = 'id_aluno';
        public $timestamps = true;
    
        const CREATED_AT = 'criado_em_aluno';
        const UPDATE_AT = 'atualizado_em_aluno';

        protected $fillable = [
            'nome_aluno',
            'email_aluno',
            'senha_aluno',
            'telefone_aluno',
            'curso_aluno',
            'data_nasc_aluno',
            'nivel_aluno',
            'foto_aluno',
            'status_aluno'
        ];
}
