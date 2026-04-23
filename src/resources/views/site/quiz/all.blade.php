<section class="quizHeroi" id="quiz-top">
      <div class="container quizHeroiConteudo">
        <div class="quizHeroiTexto">
          <p class="quizSobrancelha">Fluent Path | Teste de nivelamento</p>
          <h1>Descubra seu nível e comece pelo curso certo.</h1>
          <p class="quizHeroiDescricao">
            Este teste existe para te orientar. Em poucos minutos, você escolhe um idioma,
            responde 12 perguntas e recebe uma recomendação clara para continuar aprendendo.
          </p>

          <div class="quizHeroiAcoes">
            <a href="#quiz-language" class="btn-gradient quizHeroiPrimario">Começar teste</a>
            <button type="button" class="quizBotaoSecundario" data-scroll-target="#quiz-cefr">
              Entender os níveis CEFR
            </button>
          </div>
        </div>

        <aside class="quizHeroiPainel" aria-labelledby="quiz-flow-title">
          <div class="quizFluxoCard">
            <p class="quizEtiqueta">Como funciona</p>
            <h2 id="quiz-flow-title">Uma jornada guiada, calma e objetiva.</h2>
            <ol class="quizFluxoLista">
              <li>Entenda o teste e escolha entre inglê;s, português ou italiano.</li>
              <li>Veja como os níveis CEFR funcionam, se quiser um contexto extra.</li>
              <li>Responda 12 perguntas no seu ritmo, com uma pergunta por vez.</li>
              <li>Receba seu resultado, o curso recomendado e o próximo passo.</li>
            </ol>
          </div>
        </aside>
      </div>
    </section>

    <section class="quizIdioma" id="quiz-language">
      <div class="container quizSecao">
        <div class="quizCabecalhoSecao">
          <p class="quizEtiqueta">Escolha de idioma</p>
          <h2>Escolha um idioma para fazer seu teste de nivelamento.</h2>
          <p>
            Cada teste mostra seu ponto de partida e recomenda o curso ideal para seguir com
            clareza e confiança.
          </p>
        </div>

        <div class="quizIdiomaGrade" id="quiz-language-options" aria-label="Idiomas disponiveis"></div>
      </div>
    </section>

    <section class="quizArea" id="quiz-workspace">
      <div class="container quizAreaGrade">
        <div class="quizPrincipalCard">
          <div class="quizPrincipalCabecalho">
            <div>
              <p class="quizEtiqueta">Área ativa do quiz</p>
              <h2 id="quiz-active-title">Escolha um idioma para ativar o fluxo.</h2>
            </div>
            <div class="quizPrincipalMeta">
              <span class="quizPill" id="quiz-meta-language">Nenhum idioma selecionado</span>
              <span class="quizPill">12 perguntas</span>
              <span class="quizPill">Resultado CEFR</span>
            </div>
          </div>

          <noscript>
            <p class="quizSemScript">
              Ative o JavaScript para fazer o teste, salvar seu progresso e receber o resultado do
              quiz nesta pagina.
            </p>
          </noscript>

          <section class="quizIntroducao" id="quiz-guided-intro" aria-labelledby="quiz-intro-title">
            <p class="quizEtiqueta">Antes de começar</p>
            <h3 id="quiz-intro-title">Seu teste vai acontecer aqui, em uma experiência contínua.</h3>
            <p id="quiz-intro-text">
              Escolha um idioma acima para liberar o quiz. Quando o idioma for selecionado, esta
              área passa a mostrar a jornada ativa com progresso, pergunta atual, resultado e
              recomendação de curso.
            </p>
            <div class="quizIntroducaoAcoes">
              <button type="button" class="btn-gradient" id="quiz-start-button" disabled>
                Escolha um idioma para começar
              </button>
              <button type="button" class="quizBotaoSecundario" data-scroll-target="#quiz-language">
                Voltar para a escolha de idioma
              </button>
            </div>
          </section>

          <section class="quizAtivo" id="quiz-runtime" hidden aria-labelledby="quiz-question-text">
            <div class="quizProgresso">
              <div class="quizProgressoTopo">
                <span id="quiz-progress-label">Pergunta 1 de 12</span>
                <span id="quiz-progress-score">0 acertos</span>
              </div>
              <div class="quizProgressoTrilha" aria-hidden="true">
                <span class="quizProgressoPreenchimento" id="quiz-progress-bar"></span>
              </div>
            </div>

            <article class="quizQuestaoCard">
              <div class="quizQuestaoTopo">
                <span class="quizNivel" id="quiz-level-pill">A1</span>
                <span class="quizQuestaoObservacao">Uma pergunta por vez, sem pressa.</span>
              </div>

              <h3 id="quiz-question-text">Pergunta do quiz</h3>
              <p class="quizQuestaoAjuda" id="quiz-question-helper">
                Escolha a alternativa que faz mais sentido para este nível.
              </p>

              <div class="quizAlternativas" id="quiz-answer-buttons" role="group" aria-label="Alternativas"></div>

              <div class="quizAtivoRodape">
                <p class="quizRetorno" id="quiz-feedback" aria-live="polite"></p>
                <button type="button" class="btn-gradient quizProximo" id="quiz-next-button" disabled>
                  Próxima pergunta
                </button>
              </div>
            </article>
          </section>

          <section class="quizResultado" id="quiz-result" hidden aria-labelledby="quiz-result-title">
            <div class="quizResultadoCabecalho">
              <p class="quizEtiqueta">Seu resultado</p>
              <h3 id="quiz-result-title">Seu resultado aparece aqui ao final do teste.</h3>
              <p id="quiz-result-summary">
                Este bloco mostra sua pontuação, nível CEFR, curso recomendado e próximos passos.
              </p>
            </div>

            <div class="quizResultadoGrade">
              <div class="quizResultadoPontuacao">
                <span class="quizResultadoEtiqueta">Pontuação total</span>
                <strong id="quiz-result-score">0/12</strong>
                <span id="quiz-result-level">A1 - Iniciante</span>
              </div>

              <div class="quizResultadoDetalhes">
                <p class="quizResultadoCursoRotulo">Curso recomendado</p>
                <h4 id="quiz-result-course">Inglês A1</h4>
                <p id="quiz-result-description">
                  Seu resultado mostra o melhor ponto de partida para você continuar aprendendo.
                </p>
                <p id="quiz-result-suggestion" class="quizResultadoSugestao"></p>
              </div>
            </div>

            <div class="quizResultadoAcoes">
              <a href="contato.php#contacts_container" class="btn-gradient" id="quiz-result-primary-cta">
                Começar este curso
              </a>
              <button type="button" class="quizBotaoSecundario" id="quiz-retry-button">
                Refazer o teste
              </button>
              <button type="button" class="quizBotaoSecundario" data-scroll-target="#quiz-course-explorer">
                Explorar cursos
              </button>
            </div>
          </section>
        </div>

        <aside class="quizPainel" aria-labelledby="quiz-dashboard-title">
          <div class="quizPainelCard">
            <div class="quizPainelCabecalho">
              <p class="quizEtiqueta">Resumo do quiz</p>
              <h2 id="quiz-dashboard-title">Continue de onde parou.</h2>
            </div>

            <div class="quizPainelStats">
              <article class="quizInfoCard">
                <span>Idioma selecionado</span>
                <strong id="summary-language">Nenhum ainda</strong>
              </article>

              <article class="quizInfoCard">
                <span>Pontuacao mais recente</span>
                <strong id="summary-score">Ainda não disponível</strong>
              </article>

              <article class="quizInfoCard">
                <span>Nivel CEFR atual</span>
                <strong id="summary-level">Em definição</strong>
              </article>

              <article class="quizInfoCard">
                <span>Curso recomendado</span>
                <strong id="summary-course">Escolha um idioma para receber a recomendação.</strong>
              </article>
            </div>

            <div class="quizPainelProgresso">
              <div class="quizPainelProgressoTopo">
                <span>Progresso do teste</span>
                <strong id="summary-progress">0%</strong>
              </div>
              <div class="quizProgressoTrilha quizProgressoTrilhaCompacta" aria-hidden="true">
                <span class="quizProgressoPreenchimento" id="summary-progress-bar"></span>
              </div>
            </div>

            <div class="quizPainelProximo">
              <h3>Próximo passo</h3>
              <p id="summary-next-step">
                Escolha um idioma para iniciar o teste de nivelamento na mesma página.
              </p>
            </div>

            <div class="quizPainelAcoes">
              <button type="button" class="quizBotaoSecundario" data-scroll-target="#quiz-language">
                Escolher idioma
              </button>
              <button type="button" class="quizBotaoSecundario" data-scroll-target="#quiz-course-explorer">
                Explorar cursos
              </button>
            </div>
          </div>
        </aside>
      </div>
    </section>

    <section class="quizCursos" id="quiz-course-explorer">
      <div class="container quizSecao">
        <div class="quizCabecalhoSecao">
          <p class="quizEtiqueta">Cursos recomendados</p>
          <h2 id="quiz-course-title">Explore a trilha do idioma escolhido.</h2>
          <p id="quiz-course-description">
            Selecione um idioma para ver os cursos organizados por nível CEFR e seguir com clareza.
          </p>
        </div>

        <div class="quizCursosGrade" id="quiz-course-grid" aria-live="polite"></div>
      </div>
    </section>