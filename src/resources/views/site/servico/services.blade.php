<section class="servicos-tabs">
  <div class="servicos-tabs__nav">
    @foreach ($tipos as $slug => $label)
        <a
            href="{{ route('servico', ['tipo' => $slug]) }}"
            class="servico-tab {{ $tipoAtual === $slug ? 'ativo' : '' }}"
            data-service-tab="{{ $slug }}">
            {{ $label }}
        </a>
    @endforeach
</div>

  <div class="servicos-tabs__content">
    <article class="servico-panel ativo" data-service-panel="aulas">
      <img src="{{ asset('traduca/img/idade3.jpg') }}" alt="Aula online de idiomas">

      <div>
        <h2>Aulas personalizadas</h2>
        <p>Aulas online ou presenciais, de acordo com seu objetivo, nível e rotina.</p>

        <ul>
          <li>Inglês, italiano e português</li>
          <li>Foco em conversação</li>
          <li>Material exclusivo</li>
          <li>Flexibilidade de horários</li>
        </ul>

        <a href="{{ route('contato') }}" class="btn-gradient">Quero saber mais</a>
      </div>
    </article>

    <article class="servico-panel" data-service-panel="traducao" hidden>
      <img src="{{ asset('traduca/img/banner2.jpg') }}" alt="Tradução de textos">

      <div>
        <h2>Tradução profissional</h2>
        <p>Traduções naturais e fiéis ao contexto para textos acadêmicos, institucionais e profissionais.</p>

        <ul>
          <li>Português, inglês e italiano</li>
          <li>Adaptação de tom e contexto</li>
          <li>Revisão final inclusa</li>
          <li>Orçamento por demanda</li>
        </ul>

        <a href="{{ route('contato') }}" class="btn-gradient">Pedir orçamento</a>
      </div>
    </article>

    <article class="servico-panel" data-service-panel="revisao" hidden>
      <img src="{{ asset('traduca/img/banner2.jpg') }}" alt="Revisão de textos">

      <div>
        <h2>Revisão de textos</h2>
        <p>Análise sintática e ortográfica do seu texto</p>

        <ul>
          <li>Português, inglês e italiano</li>
          <li>Coesão e coerência</li>
          <li>Sugestões e dicas</li>
          <li>Orçamento por demanda</li>
        </ul>

        <a href="{{ route('contato') }}" class="btn-gradient">Pedir orçamento</a>
      </div>
    </article>

     <article class="servico-panel" data-service-panel="redacao" hidden>
      <img src="{{ asset('traduca/img/banner2.jpg') }}" alt="Revisão de textos">

      <div>
        <h2>Redação de alto nível</h2>
        <p>Execução e avaliação de redações personalizadas</p>

        <ul>
          <li>Português e inglês</li>
          <li>Coesão e coerência</li>
          <li>Análise sintática e ortográfica</li>
          <li>Subir o nível do desempenho</li>
        </ul>

        <a href="{{ route('contato') }}" class="btn-gradient">Pedir orçamento</a>
      </div>
    </article>
  </div>
</section>