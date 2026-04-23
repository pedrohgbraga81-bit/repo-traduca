    <header class="topo">
      <div class="container">
        <h1>TraducaIdiomas</h1>
        <?php
        $pgAtual = basename(path: $_SERVER['REQUEST_URI']);
        // echo($pgAtual);
        ?>

        <button class=abrir-menu></button>
        <nav>
          <button class=fechar-menu></button>
          <ul>

            <li><a href="{{ route('home') }}" class="<?= ($pgAtual == 'index.php') ? 'ativo' : '' ?>">Home</a></li>
            <li><a href="{{ route('sobre') }}" class="<?= ($pgAtual == 'sobre.php') ? 'ativo' : '' ?>"> Sobre</a></li>
            <li><a href="{{ route('servico') }}" class="<?= ($pgAtual == 'servico.php') ? 'ativo' : '' ?>">Serviços</a></li>
            <li><a href="{{ route('quiz') }}" class="<?= ($pgAtual == 'quiz.php') ? 'ativo' : '' ?>">Quiz</a></li>
            <li><a href="{{ route('contato') }}" class="<?= ($pgAtual == 'contato.php') ? 'ativo' : '' ?>">Contato</a></li>
            <li><a href="ctrlPainel.php" class="<?= ($pgAtual == 'ctrlPainel.php') ? 'ativo' : '' ?>">Painel</a></li>

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
