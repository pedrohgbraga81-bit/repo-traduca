<section class="servicos-tabs">
  <div class="servicos-tabs__nav">
    @foreach ($tipos as $tipo => $nome)
        <a
            href="{{ route('servico', ['tipo' => $tipo]) }}"
            class="servico-tab {{ $tipoAtual === $tipo ? 'ativo' : '' }}"
        >
            {{ $nome }}
        </a>
    @endforeach
  </div>
</section>
