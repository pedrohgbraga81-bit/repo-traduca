<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Servico extends Model
{
    protected $table = 'tbl_servicos';
    protected $primaryKey = 'id_servico';
    
    protected $fillable = ['titulo_servico','subtitulo_servico'];
}
