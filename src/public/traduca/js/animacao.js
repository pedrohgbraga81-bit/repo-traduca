const body = document.body;
const toggle = document.getElementById("theme-toggle");

const savedTheme = localStorage.getItem("theme");

// Padrao = claro. Se houver preferencia salva, aplica.
if (savedTheme === "dark") {
  body.classList.add("dark");
} else {
  body.classList.remove("dark");
}

if (toggle) {
  // checked = claro
  toggle.checked = !body.classList.contains("dark");

  toggle.addEventListener("change", () => {
    if (toggle.checked) {
      body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  });
}

// Animação Timeline
let currentLevel = 0;
const totalLevels = 6;
const sections = document.querySelectorAll('.timeline-section');
const progressBar = document.getElementById('progressBar');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

function updateTimeline() {
  sections.forEach((section, index) => {
    section.classList.remove('active');
    if (index === currentLevel) {
      section.classList.add('active');

      setTimeout(() => {
        const cards = section.querySelectorAll('.timeline-card');
        cards.forEach(card => card.classList.add('show'));
      }, 100);
    }
  });

  const progress = ((currentLevel + 1) / totalLevels) * 100;
  progressBar.style.width = progress + '%';

  prevBtn.disabled = currentLevel === 0;
  nextBtn.disabled = currentLevel === totalLevels - 1;
}

function changeLevel(direction) {
  const newLevel = currentLevel + direction;
  if (newLevel >= 0 && newLevel < totalLevels) {
    currentLevel = newLevel;

    sections[currentLevel - direction]?.querySelectorAll('.timeline-card').forEach(card => {
      card.classList.remove('show');
    });

    updateTimeline();
  }
}

if (sections.length && progressBar && prevBtn && nextBtn) {
  updateTimeline();

  const firstSectionCards = sections[0].querySelectorAll('.timeline-card');
  setTimeout(() => {
    firstSectionCards.forEach(card => card.classList.add('show'));
  }, 100);
}

// Idade
const ageOptions = document.querySelectorAll('.option');

if (ageOptions.length) {
  ageOptions.forEach((option) => {
    option.addEventListener('click', () => {
      ageOptions.forEach((item) => item.classList.remove('active'));
      option.classList.add('active');
    });
  });
}

// Fim Animação Timeline

// Animação Abrir/Fechar Mobile

const abrirMenu = document.querySelector('.abrir-menu');
const fecharMenu = document.querySelector('.fechar-menu');

if (abrirMenu && fecharMenu) {
  abrirMenu.onclick = function () {
    document.documentElement.classList.add('menu-ativo');
  };

  fecharMenu.onclick = function () {
    document.documentElement.classList.remove("menu-ativo");
  };
}

// Animação Banner
const parallaxBanners = document.querySelectorAll('[data-parallax-banner]');
const reduceMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
const finePointerQuery = window.matchMedia('(pointer: fine)');

if (parallaxBanners.length && !reduceMotionQuery.matches) {
  let rafId = null;

  const updateParallax = () => {
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight;

    parallaxBanners.forEach((banner) => {
      const layer = banner.querySelector('[data-parallax-layer]');
      if (!layer) return;

      const rect = banner.getBoundingClientRect();
      const scrollOffset = ((rect.top + (rect.height / 2)) - (viewportHeight / 2)) * -0.12;
      const pointerX = Number(banner.dataset.pointerX || 0);
      const pointerY = Number(banner.dataset.pointerY || 0);
      const moveX = pointerX * 18;
      const moveY = scrollOffset + (pointerY * 14);

      layer.style.transform = `translate3d(${moveX}px, ${moveY}px, 0)`;
    });

    rafId = null;
  };

  const queueParallax = () => {
    if (rafId !== null) return;
    rafId = window.requestAnimationFrame(updateParallax);
  };

  parallaxBanners.forEach((banner) => {
    banner.dataset.pointerX = '0';
    banner.dataset.pointerY = '0';

    if (finePointerQuery.matches) {
      banner.addEventListener('pointermove', (event) => {
        const rect = banner.getBoundingClientRect();
        const relativeX = ((event.clientX - rect.left) / rect.width) - 0.5;
        const relativeY = ((event.clientY - rect.top) / rect.height) - 0.5;

        banner.dataset.pointerX = relativeX.toFixed(3);
        banner.dataset.pointerY = relativeY.toFixed(3);
        queueParallax();
      });

      banner.addEventListener('pointerleave', () => {
        banner.dataset.pointerX = '0';
        banner.dataset.pointerY = '0';
        queueParallax();
      });
    }
  });

  window.addEventListener('scroll', queueParallax, { passive: true });
  window.addEventListener('resize', queueParallax);
  queueParallax();
}
// Fim Animação Banner
