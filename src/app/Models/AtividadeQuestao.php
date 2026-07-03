<?php
namespace App\Models;
use Illuminate\Database\Eloquent\Model;
class AtividadeQuestao extends Model
{
    protected $table = 'tbl_atividade_questoes';
    protected $primaryKey = 'id_atividade_questao';
    public $timestamps = false;
    protected $fillable = [
        'id_atividade', 'enunciado_atividade_questao', 'tipo_atividade_questao',
        'opcao_a_atividade_questao', 'opcao_b_atividade_questao', 'opcao_c_atividade_questao', 'opcao_d_atividade_questao', 'resposta_correta_atividade_questao', 'ordem_atividade_questao'
    ];
    public function atividade() { return $this->belongsTo(Atividade::class, 'id_atividade', 'id_atividade'); }
}
