<section class="servicos-tabs">
  <div class="servicos-tabs__nav">
    @foreach ($tipos as $tipo => $nome)
        <a
            href="{{ route('servico.index', ['tipo' => $tipo]) }}"
            class="servico-tab {{ $tipoAtual === $tipo ? 'ativo' : '' }}"
            data-service-tab="{{ $tipo }}">
            {{ $nome }}
        </a>
    @endforeach
  </div>
</section>
