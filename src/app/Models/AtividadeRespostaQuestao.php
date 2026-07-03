<?php
namespace App\Models;
use Illuminate\Database\Eloquent\Model;
class AtividadeRespostaQuestao extends Model
{
    protected $table = 'tbl_atividade_resposta_questoes';
    protected $primaryKey = 'id_atividade_resposta_questao';
    public $timestamps = false;
    protected $fillable = ['id_atividade_resposta', 'id_atividade_questao', 'resposta_aluno_atividade_resposta_questao', 'correta_atividade_resposta_questao'];
    public function questao() { return $this->belongsTo(AtividadeQuestao::class, 'id_atividade_questao', 'id_atividade_questao'); }
}
