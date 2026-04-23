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

            <li><a href="index.php" class="<?= ($pgAtual == 'index.php') ? 'ativo' : '' ?>">Home</a></li>


            <li><a href="sobre.php" class="<?= ($pgAtual == 'sobre.php') ? 'ativo' : '' ?>"> Sobre</a></li>
            <li><a href="servicos.php" class="<?= ($pgAtual == 'servico.php') ? 'ativo' : '' ?>">Serviços</a></li>
            <li><a href="quiz.php" class="<?= ($pgAtual == 'quiz.php') ? 'ativo' : '' ?>">Quiz</a></li>


            <li><a href="contato.php" class="<?= ($pgAtual == 'contato.php') ? 'ativo' : '' ?>">Contato</a></li>
            <li><a href="ctrlPainel.php" class="<?= ($pgAtual == 'ctrlPainel.php') ? 'ativo' : '' ?>">Painel</a></li>

          </ul>
        </nav>

        <ul class="redes">
          <li><a href="#"><img
                src="img/instaBlack.svg"
                alt="Logo Instagram"
                sizes="50px"></a></li>
          <li><a href="#"><img
                src="img/linkeBlack.svg"
                alt="Logo linkedln"
                sizes="50px"></a></li>
          <li><a href="#"><img
                src="img/whatsBlack.svg"
                alt="Logo Whats"
                sizes="50px"></a></li>
        </ul>
        <label class="theme-switch">
          <input type="checkbox" id="theme-toggle">
          <span class="slider"></span>
        </label>


      </div>
    </header>
