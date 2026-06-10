<?php

namespace App\Models;

use Illuminate\Foundation\Auth\User as Authenticatable;

class Alunos extends Authenticatable
{
    protected $table = 'tbl_alunos';
        protected $primaryKey = 'id_aluno';
        public $timestamps = true;
    
        const CREATED_AT = 'criado_em_aluno';
        const UPDATED_AT = 'atualizado_em_aluno';

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

    public function getAuthPassword()
    {
        return $this->senha_aluno;
    }
}
