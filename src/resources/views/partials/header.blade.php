    <header class="topo">
      <div class="container">
        <h1>TraducaIdiomas</h1>

        <button class=abrir-menu></button>
        <nav>
          <button class=fechar-menu></button>
          <ul>

            <li><a class="{{ request()->routeIs('home') ? 'ativo' : '' }}" href="{{ route('home') }}">Home</a></li>
            <li><a class="{{ request()->routeIs('sobre') ? 'ativo' : '' }}" href="{{ route('sobre') }}">Sobre</a></li>
            <li><a class="{{ request()->routeIs('servico') ? 'ativo' : '' }}" href="{{ route('servico') }}">Serviços</a></li>
            <li><a class="{{ request()->routeIs('quiz') ? 'ativo' : '' }}" href="{{ route('quiz') }}">Quiz</a></li>
            <li><a class="{{ request()->routeIs('contato') ? 'ativo' : '' }}" href="{{ route('contato') }}">Contato</a></li>

          </ul>
        </nav>

        <ul class="redes">
          <li><a href="#"><img
                src="{{ asset('traduca/img/instaBlack.svg') }}"
                alt="Logo Instagram"
                sizes="50px"></a></li>
          <li><a href="#"><img
                src="{{ asset('traduca/img/linkeBlack.svg') }}"
                alt="Logo linkedln"
                sizes="50px"></a></li>
          <li><a href="#"><img
                src="{{ asset('traduca/img/whatsBlack.svg') }}"
                alt="Logo Whats"
                sizes="50px"></a></li>
        </ul>
        <label class="theme-switch">
          <input type="checkbox" id="theme-toggle">
          <span class="slider"></span>
        </label>


      </div>
    </header>