<section aria-label="Lista de alunos">
    <div class="alunos">Alunos</div>

    <div class="card-container">

        @foreach($alunos as $linha)
        <div class="card">
            <div class="card-header">
                <div class="school-logo" title="Instituição">🌍</div>

                <img
             src="{{ asset('traducaidiomas/alunos/' . $linha->foto_aluno) }}"
                    alt="Foto de {{ $linha->nome_aluno }}"
                    class="photo">

                <div class="student-info">
                    <h2>{{ $linha->nome_aluno }}</h2>
                    <div class="student-id">Matricula: ALUNO-{{ ($linha->id_matricula && $linha->data_matricula) ? \Carbon\Carbon::parse($linha->data_matricula)->format('Y') . str_pad($linha->id_matricula, 4, '0', STR_PAD_LEFT) : 'Sem Matrícula' }}</div>
                </div>
            </div>

            <div class="card-body">
                <div class="course-info">
                    <div class="info-group">
                        <span class="label">Curso</span>
                        <span class="value">{{ $linha->curso_aluno }}</span>
                    </div>
                    <div class="info-group">
                        <span class="label">Nível</span>
                        <span class="value">{{ $linha->nivel_aluno }}</span>
                    </div>
                    <div class="info-group">
                        <span class="label">Status</span>
                        <span class="value">{{ $linha->status_aluno ?? 'EM CURSO' }}</span>
                    </div>
                </div>

         

                <div class="validity">
                    Email: {{ $linha->email_aluno }}
                </div>

                @if($linha->nota)
                <div class="card-feedback">
                    <div class="feedback-stars">
                        @for($i = 1; $i <= 5; $i++)
                            <i class="fa{{ $i <= $linha->nota ? 's' : 'r' }} fa-star"></i>
                        @endfor
                    </div>
                    @if($linha->comentario)
                        <p class="feedback-comment">"{{ Str::limit($linha->comentario, 80) }}"</p>
                    @endif
                    @if($linha->nome_professor)
                        <span class="feedback-prof">
                            <i class="fas fa-chalkboard-user"></i> {{ $linha->nome_professor }}
                        </span>
                    @endif
                </div>
                @endif
            </div>
        </div>
        @endforeach

    </div>
</section>