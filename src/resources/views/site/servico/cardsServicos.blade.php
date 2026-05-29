<div class="services-container" data-service-cards>
    @forelse ($servicos as $servico)
        <article
            class="service-card {{ $servico->classe_estilo_servico }}"
            data-service-card="{{ $servico->tipo_servico }}"
            {{ $servico->tipo_servico !== $tipoAtual ? 'hidden' : '' }}>
            @if ($servico->imagem_servico)
                <img
                    src="{{ asset('traduca/' . $servico->imagem_servico) }}"
                    alt=""
                    class="service-card__image"
                    loading="lazy"
                    decoding="async">
            @endif
            <h2 class="teacher-name">{{ $servico->titulo_servico }}</h2>
            <p class="teacher-title">{{ $servico->subtitulo_servico }}</p>
            
            <ul class="services-list">
                @foreach (explode(',', $servico->lista_beneficios_servico) as $beneficio)
                    <li>
                        <div class="service-icon">•</div>
                        <span class="service-desc">{{ trim($beneficio) }}</span>
                    </li>
                @endforeach
            </ul>

            <div class="contact-section">
                <h3>{{ $servico->cta_titulo_servico }}</h3>
                <p>{{ $servico->preco_servico }}</p>
                <a href="{{ $servico->link_whatsapp }}" class="contact-btn" target="_blank">
                    {{ $servico->cta_texto_servico }}
                </a>
            </div>
        </article>
    @empty
        <p class="servicos-empty">Nenhum serviço cadastrado.</p>
    @endforelse

    <p
        class="servicos-empty"
        data-service-empty
        {{ $servicos->where('tipo_servico', $tipoAtual)->isNotEmpty() ? 'hidden' : '' }}>
        Nenhum serviço cadastrado para esta categoria.
    </p>
</div>
