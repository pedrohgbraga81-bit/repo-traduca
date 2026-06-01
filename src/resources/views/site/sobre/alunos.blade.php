<!-- INICIO SESSÃO ALUNOS CARDS  -->
<div class="alunos">Alunos</div>
<div class="card-container">
    @foreach ($aluno as $linha)
    
    <!-- Card Exemplo 1 -->
    <div class="card">
        <div class="card-header">
            <div class="school-logo">🌍</div>
            <img src="{{'traduca/img/' . $linha->foto_aluno }}" alt="Foto" class="photo" width="70" height="70" loading="lazy" decoding="async">
            <div class="student-info">
                <h2>{{ $linha->nome_aluno }}</h2>
                <div class="student-id">ID: ALUNO-2025-{{ $linha->id_aluno }}</div>
            </div>
        </div>
        <div class="card-body">
            <div class="course-info">
                <div class="info-group">
                    <span class="label">{{ $linha->status_aluno }}</span>
                    <span class="value">{{ $linha->nivel_aluno }}</span>
                </div>
                <div class="info-group">
                    <span class="label">Turma</span>
                    <span class="value">Seg 18h-20h</span>
                </div>
            </div>
            <div class="language-badge">
                <div class="flag" style="background: linear-gradient(to bottom, #ff0000 33%, #ffffff 33% 66%, #000080 66%);"></div>
                {{ $linha->curso_aluno }}
            </div>
            <div class="validity">Válido até 12/2026</div>
        </div>
    </div>

    @endforeach
</div>
<!-- FIM SESSÃO ALUNOS CARDS  -->