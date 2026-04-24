import { CEFR_LEVELS, CEFR_ORDER, QUIZ_LANGUAGES } from './quiz-data.js';

const STORAGE_KEY = 'fluent-path.quiz-state';
const languageById = Object.fromEntries(QUIZ_LANGUAGES.map((language) => [language.id, language]));
const levelById = Object.fromEntries(CEFR_LEVELS.map((level) => [level.id, level]));
const htmlDecoder = document.createElement('textarea');

const elements = {
  languageOptions: document.getElementById('quiz-language-options'),
  activeTitle: document.getElementById('quiz-active-title'),
  metaLanguage: document.getElementById('quiz-meta-language'),
  guidedIntro: document.getElementById('quiz-guided-intro'),
  introText: document.getElementById('quiz-intro-text'),
  startButton: document.getElementById('quiz-start-button'),
  runtime: document.getElementById('quiz-runtime'),
  result: document.getElementById('quiz-result'),
  progressLabel: document.getElementById('quiz-progress-label'),
  progressScore: document.getElementById('quiz-progress-score'),
  progressBar: document.getElementById('quiz-progress-bar'),
  levelPill: document.getElementById('quiz-level-pill'),
  questionText: document.getElementById('quiz-question-text'),
  questionHelper: document.getElementById('quiz-question-helper'),
  answerButtons: document.getElementById('quiz-answer-buttons'),
  feedback: document.getElementById('quiz-feedback'),
  nextButton: document.getElementById('quiz-next-button'),
  resultTitle: document.getElementById('quiz-result-title'),
  resultSummary: document.getElementById('quiz-result-summary'),
  resultScore: document.getElementById('quiz-result-score'),
  resultLevel: document.getElementById('quiz-result-level'),
  resultCourse: document.getElementById('quiz-result-course'),
  resultDescription: document.getElementById('quiz-result-description'),
  resultSuggestion: document.getElementById('quiz-result-suggestion'),
  resultPrimaryCta: document.getElementById('quiz-result-primary-cta'),
  retryButton: document.getElementById('quiz-retry-button'),
  summaryLanguage: document.getElementById('summary-language'),
  summaryScore: document.getElementById('summary-score'),
  summaryLevel: document.getElementById('summary-level'),
  summaryCourse: document.getElementById('summary-course'),
  summaryProgress: document.getElementById('summary-progress'),
  summaryProgressBar: document.getElementById('summary-progress-bar'),
  summaryNextStep: document.getElementById('summary-next-step'),
  courseTitle: document.getElementById('quiz-course-title'),
  courseDescription: document.getElementById('quiz-course-description'),
  courseGrid: document.getElementById('quiz-course-grid')
};

const defaultState = {
  selectedLanguageId: null,
  sessions: {},
  latestResult: null
};

let state = loadState();

init();

function init() {
  validateQuestionBanks();
  bindEvents();
  renderPage();
}

function bindEvents() {
  document.addEventListener('click', (event) => {
    const languageTrigger = event.target.closest('[data-language-select]');
    if (languageTrigger) {
      const languageId = languageTrigger.getAttribute('data-language-select');
      if (languageId) {
        selectLanguage(languageId);
      }
      return;
    }

    const answerTrigger = event.target.closest('[data-answer-id]');
    if (answerTrigger) {
      const answerId = answerTrigger.getAttribute('data-answer-id');
      if (answerId) {
        registerAnswer(answerId);
      }
      return;
    }

    const scrollTrigger = event.target.closest('[data-scroll-target]');
    if (scrollTrigger) {
      const selector = scrollTrigger.getAttribute('data-scroll-target');
      if (selector) {
        scrollToSection(selector);
      }
    }
  });

  elements.startButton?.addEventListener('click', () => {
    startSelectedQuiz();
  });

  elements.nextButton?.addEventListener('click', () => {
    advanceQuiz();
  });

  elements.retryButton?.addEventListener('click', () => {
    retrySelectedQuiz();
  });
}

function selectLanguage(languageId) {
  if (!languageById[languageId]) {
    return;
  }

  ensureSession(languageId);
  state.selectedLanguageId = languageId;
  saveState();
  renderPage();
  scrollToSection('#quiz-workspace');
  focusWithinWorkspace();
}

function startSelectedQuiz() {
  const language = getSelectedLanguage();
  if (!language) {
    scrollToSection('#quiz-language');
    return;
  }

  const session = ensureSession(language.id);
  if (!session.started || session.completed) {
    session.started = true;
    session.completed = false;
    session.currentQuestionIndex = 0;
    session.answers = {};
    session.result = null;
  }

  saveState();
  renderPage();
  focusQuestion();
}

function retrySelectedQuiz() {
  const language = getSelectedLanguage();
  if (!language) {
    return;
  }

  state.sessions[language.id] = {
    ...getEmptySession(),
    started: true
  };
  saveState();
  renderPage();
  focusQuestion();
}

function registerAnswer(answerId) {
  const language = getSelectedLanguage();
  if (!language) {
    return;
  }

  const session = ensureSession(language.id);
  if (!session.started || session.completed) {
    return;
  }

  const question = language.questions[session.currentQuestionIndex];
  if (!question || session.answers[question.id]) {
    return;
  }

  session.answers[question.id] = answerId;
  saveState();
  renderPage();
}

function advanceQuiz() {
  const language = getSelectedLanguage();
  if (!language) {
    return;
  }

  const session = ensureSession(language.id);
  if (!session.started || session.completed) {
    return;
  }

  const question = language.questions[session.currentQuestionIndex];
  if (!question || !session.answers[question.id]) {
    return;
  }

  if (session.currentQuestionIndex >= language.questions.length - 1) {
    const score = getScore(language, session);
    session.completed = true;
    session.result = buildResult(language, score);
    state.latestResult = session.result;
    saveState();
    renderPage();
    scrollToSection('#quiz-result');
    focusResult();
    return;
  }

  session.currentQuestionIndex += 1;
  saveState();
  renderPage();
  focusQuestion();
}

function renderPage() {
  renderLanguageOptions();
  renderWorkspace();
  renderDashboard();
  renderCourseExplorer();
}

function renderLanguageOptions() {
  if (!elements.languageOptions) {
    return;
  }

  elements.languageOptions.innerHTML = QUIZ_LANGUAGES.map((language) => {
    const session = state.sessions[language.id] || getEmptySession();
    const result = session.result;
    const isSelected = state.selectedLanguageId === language.id;

    return `
      <button
        type="button"
        class="quizIdiomaCard${isSelected ? ' estaAtivo' : ''}"
        data-language-select="${language.id}"
        aria-pressed="${isSelected ? 'true' : 'false'}">
        <span class="quizIdiomaSigla">${language.code}</span>
        <strong class="quizIdiomaNome">${language.name}</strong>
        <span class="quizIdiomaTexto">${language.testCopy}</span>
        <span class="quizIdiomaAjuda">${language.helperCopy}</span>
        <span class="quizIdiomaStatus">
          ${result ? `Ultimo resultado: ${result.levelId} - ${result.levelName}` : '12 perguntas | Recomendação de curso ao final'}
        </span>
      </button>
    `;
  }).join('');
}

function renderWorkspace() {
  const language = getSelectedLanguage();

  if (!language) {
    updateMainHeader('Escolha um idioma para ativar o fluxo.', 'Nenhum idioma selecionado');
    showIntro({
      buttonLabel: 'Escolha um idioma para começar',
      buttonDisabled: true,
      message: 'Escolha um idioma acima para liberar o quiz. Quando o idioma for selecionado, esta área passa a mostrar a jornada ativa com progresso, pergunta atual, resultado e recomendação de curso.'
    });
    hideRuntime();
    hideResult();
    return;
  }

  const session = ensureSession(language.id);
  updateMainHeader(`Teste de nivelamento de ${language.name}`, language.name);

  if (session.completed && session.result) {
    hideIntro();
    hideRuntime();
    showResult(language, session, session.result);
    return;
  }

  hideResult();

  if (!session.started) {
    showIntro({
      buttonLabel: `Comecar teste de ${decodeHtml(language.name)}`,
      buttonDisabled: false,
      message: `${language.helperCopy} Sem pressa: o teste foi organizado para te orientar, não para te pressionar.`
    });
    hideRuntime();
    return;
  }

  hideIntro();
  showRuntime(language, session);
}

function renderDashboard() {
  const selectedLanguage = getSelectedLanguage();
  const preferredResult = getPreferredResult();
  let languageLabel = 'Nenhum ainda';
  let scoreLabel = 'Ainda não disponível';
  let levelLabel = 'Em definição';
  let courseLabel = 'Escolha um idioma para receber a recomendação.';
  let nextStep = 'Escolha um idioma para iniciar o teste de nivelamento na mesma página.';
  let progressPercent = 0;

  if (selectedLanguage) {
    const session = ensureSession(selectedLanguage.id);
    const score = getScore(selectedLanguage, session);
    const answeredCount = getAnsweredCount(session);
    const progress = getProgressPercent(selectedLanguage, session);

    languageLabel = decodeHtml(selectedLanguage.name);
    progressPercent = progress;

    if (session.completed && session.result) {
      scoreLabel = `${session.result.score}/12`;
      levelLabel = `${session.result.levelId} - ${session.result.levelName}`;
      courseLabel = session.result.recommendedCourse;
      nextStep = `Começe por ${session.result.recommendedCourse} ou explore a trilha completa logo abaixo.`;
    } else if (session.started) {
      scoreLabel = `${score} acertos em ${answeredCount} respostas`;
      levelLabel = answeredCount > 0 ? 'Em andamento' : 'Aguardando respostas';
      courseLabel = `${decodeHtml(selectedLanguage.name)} A1 a C2`;
      nextStep = `Continue no ${decodeHtml(selectedLanguage.name)}: pergunta ${session.currentQuestionIndex + 1} de ${selectedLanguage.questions.length}.`;
    } else {
      courseLabel = `${decodeHtml(selectedLanguage.name)} A1 a C2`;
      nextStep = `Quando você estiver pronto, começe o teste de ${decodeHtml(selectedLanguage.name)} nesta mesma página.`;
    }
  } else if (preferredResult) {
    languageLabel = decodeHtml(preferredResult.languageName);
    scoreLabel = `${preferredResult.score}/12`;
    levelLabel = `${preferredResult.levelId} - ${preferredResult.levelName}`;
    courseLabel = preferredResult.recommendedCourse;
    nextStep = `Seu último resultado ainda está salvo. Você pode retomar pelo curso recomendado ou fazer um novo teste.`;
    progressPercent = 100;
  }

  setHtml(elements.summaryLanguage, languageLabel);
  setHtml(elements.summaryScore, scoreLabel);
  setHtml(elements.summaryLevel, levelLabel);
  setHtml(elements.summaryCourse, courseLabel);
  setHtml(elements.summaryProgress, `${progressPercent}%`);
  setHtml(elements.summaryNextStep, nextStep);

  if (elements.summaryProgressBar) {
    elements.summaryProgressBar.style.width = `${progressPercent}%`;
  }
}

function renderCourseExplorer() {
  if (!elements.courseGrid || !elements.courseTitle || !elements.courseDescription) {
    return;
  }

  const language = getSelectedLanguage();

  if (!language) {
    setHtml(elements.courseTitle, 'Escolha um idioma para ver a trilha completa.');
    setHtml(elements.courseDescription, 'Assim que um idioma for escolhido, esta seção mostra os cursos organizados por nível CEFR e destaca o melhor ponto de partida.');

    elements.courseGrid.innerHTML = QUIZ_LANGUAGES.map((item) => `
      <article class="quizCursoCard quizCursoResumo">
        <span class="quizCursoSigla">${item.code}</span>
        <h3>${item.name}</h3>
        <p>${item.testCopy}</p>
        <button type="button" class="quizBotaoSecundario" data-language-select="${item.id}">
          Escolher ${decodeHtml(item.name)}
        </button>
      </article>
    `).join('');
    return;
  }

  const session = ensureSession(language.id);
  const result = session.result;

  setHtml(elements.courseTitle, `Cursos de ${language.name} por nivel CEFR`);
  setHtml(elements.courseDescription, result
    ? `Seu resultado mais recente indica ${result.levelId} - ${result.levelName}. A recomendação principal já está destacada abaixo.`
    : `Você pode explorar toda a trilha de ${language.name} e escolher o ponto de partida mais adequado para o seu momento.`);

  elements.courseGrid.innerHTML = CEFR_LEVELS.map((level) => {
    const isRecommended = result && result.levelId === level.id;

    return `
      <article class="quizCursoCard${isRecommended ? ' estaRecomendado' : ''}">
        <div class="quizCursoCabecalho">
          <span class="quizNivel">${level.id}</span>
          ${isRecommended ? '<span class="quizCursoDestaque">Recomendado para você</span>' : ''}
        </div>
        <h3>${language.name} ${level.id}</h3>
        <p>${level.courseSummary}</p>
        <a href="contato.php#contacts_container" class="quizLinkInline">
          ${isRecommended ? 'Começar este curso' : 'Quero saber mais'}
        </a>
      </article>
    `;
  }).join('');
}

function showIntro({ buttonLabel, buttonDisabled, message }) {
  if (!elements.guidedIntro || !elements.startButton || !elements.introText) {
    return;
  }

  elements.guidedIntro.hidden = false;
  elements.startButton.disabled = buttonDisabled;
  elements.startButton.textContent = buttonLabel;
  elements.introText.textContent = decodeHtml(message);
}

function hideIntro() {
  if (elements.guidedIntro) {
    elements.guidedIntro.hidden = true;
  }
}

function showRuntime(language, session) {
  const question = language.questions[session.currentQuestionIndex];
  if (!question || !elements.runtime || !elements.answerButtons || !elements.questionText || !elements.questionHelper || !elements.levelPill || !elements.progressLabel || !elements.progressScore || !elements.nextButton || !elements.feedback) {
    return;
  }

  const selectedAnswerId = session.answers[question.id] || null;
  const progressPercent = getProgressPercent(language, session);
  const score = getScore(language, session);

  elements.runtime.hidden = false;
  elements.progressLabel.textContent = `Pergunta ${session.currentQuestionIndex + 1} de ${language.questions.length}`;
  elements.progressScore.textContent = `${score} acertos`;
  elements.levelPill.textContent = question.level;
  elements.questionText.textContent = question.prompt;
  elements.questionHelper.textContent = question.helper;
  elements.answerButtons.innerHTML = question.answers.map((answer) => {
    const answerState = getAnswerVisualState(answer, question, selectedAnswerId);
    const answerStatus = getAnswerStatusLabel(answerState);

    return `
      <button
        type="button"
        class="quizAlternativa ${answerState}"
        data-answer-id="${answer.id}"
        ${selectedAnswerId ? 'disabled' : ''}
        aria-pressed="${selectedAnswerId === answer.id ? 'true' : 'false'}">
        <span>${answer.text}</span>
        ${answerStatus ? `<small>${answerStatus}</small>` : ''}
      </button>
    `;
  }).join('');

  elements.feedback.innerHTML = selectedAnswerId
    ? buildAnswerFeedback(question, selectedAnswerId)
    : 'Escolha a alternativa que faz mais sentido para seguir com tranquilidade.';

  elements.nextButton.disabled = !selectedAnswerId;
  elements.nextButton.textContent = session.currentQuestionIndex === language.questions.length - 1
    ? 'Ver resultado'
    : 'Próxima pergunta';

  if (elements.progressBar) {
    elements.progressBar.style.width = `${progressPercent}%`;
  }
}

function hideRuntime() {
  if (elements.runtime) {
    elements.runtime.hidden = true;
  }
}

function showResult(language, session, result) {
  if (!elements.result || !elements.resultTitle || !elements.resultSummary || !elements.resultScore || !elements.resultLevel || !elements.resultCourse || !elements.resultDescription || !elements.resultSuggestion || !elements.resultPrimaryCta) {
    return;
  }

  elements.result.hidden = false;
  elements.resultTitle.textContent = `Seu resultado: ${result.levelId} - ${result.levelName}`;
  elements.resultSummary.textContent = 'Seu resultado mostra o melhor ponto de partida para você e indica o curso mais adequado para continuar aprendendo.';
  elements.resultScore.textContent = `${result.score}/${language.questions.length}`;
  elements.resultLevel.textContent = `${result.levelId} - ${result.levelName}`;
  elements.resultCourse.textContent = result.recommendedCourse;
  elements.resultDescription.textContent = result.description;
  elements.resultSuggestion.textContent = result.suggestion;
  elements.resultPrimaryCta.textContent = `Começar ${result.recommendedCourse}`;
}

function hideResult() {
  if (elements.result) {
    elements.result.hidden = true;
  }
}

function updateMainHeader(title, languageLabel) {
  setHtml(elements.activeTitle, title);
  setHtml(elements.metaLanguage, languageLabel);
}

function buildAnswerFeedback(question, selectedAnswerId) {
  const selectedAnswer = question.answers.find((answer) => answer.id === selectedAnswerId);
  const correctAnswer = question.answers.find((answer) => answer.correct);

  if (!selectedAnswer || !correctAnswer) {
    return 'Resposta registrada. Quando quiser, siga para a próxima pergunta.';
  }

  if (selectedAnswer.correct) {
    return 'Resposta registrada. Voce acertou esta etapa e pode seguir quando quiser.';
  }

  return `Sem problema. A resposta esperada era <strong>${correctAnswer.text}</strong>. Quando estiver pronto, siga para a próxima pergunta.`;
}

function getAnswerVisualState(answer, question, selectedAnswerId) {
  if (!selectedAnswerId) {
    return 'estadoNeutro';
  }

  if (answer.correct) {
    return 'estadoCorreta';
  }

  if (answer.id === selectedAnswerId) {
    return 'estadoSelecionada';
  }

  return 'estadoSuave';
}

function getAnswerStatusLabel(answerState) {
  if (answerState === 'estadoCorreta') {
    return 'Resposta correta';
  }

  if (answerState === 'estadoSelecionada') {
    return 'Sua escolha';
  }

  return '';
}

function getSelectedLanguage() {
  return state.selectedLanguageId ? languageById[state.selectedLanguageId] || null : null;
}

function getPreferredResult() {
  const language = getSelectedLanguage();
  if (language) {
    const session = state.sessions[language.id];
    if (session && session.result) {
      return session.result;
    }
  }

  return state.latestResult;
}

function getEmptySession() {
  return {
    started: false,
    currentQuestionIndex: 0,
    answers: {},
    completed: false,
    result: null
  };
}

function ensureSession(languageId) {
  if (!state.sessions[languageId]) {
    state.sessions[languageId] = getEmptySession();
  }

  return state.sessions[languageId];
}

function getAnsweredCount(session) {
  return Object.keys(session.answers || {}).length;
}

function getScore(language, session) {
  return language.questions.reduce((score, question) => {
    const selectedAnswerId = session.answers[question.id];
    const selectedAnswer = question.answers.find((answer) => answer.id === selectedAnswerId);
    return score + (selectedAnswer && selectedAnswer.correct ? 1 : 0);
  }, 0);
}

function getProgressPercent(language, session) {
  if (session.completed) {
    return 100;
  }

  return Math.round((getAnsweredCount(session) / language.questions.length) * 100);
}

function buildResult(language, score) {
  const levelId = mapScoreToLevel(score);
  const level = levelById[levelId];

  return {
    languageId: language.id,
    languageName: language.name,
    score,
    levelId,
    levelName: level.name,
    recommendedCourse: `${decodeHtml(language.name)} ${levelId}`,
    description: level.quizResultCopy,
    suggestion: buildSuggestion(language, levelId),
    completedAt: new Date().toISOString()
  };
}

function mapScoreToLevel(score) {
  if (score <= 2) {
    return 'A1';
  }

  if (score <= 4) {
    return 'A2';
  }

  if (score <= 6) {
    return 'B1';
  }

  if (score <= 8) {
    return 'B2';
  }

  if (score <= 10) {
    return 'C1';
  }

  return 'C2';
}

function buildSuggestion(language, levelId) {
  const currentIndex = CEFR_ORDER.indexOf(levelId);
  const previousLevel = currentIndex > 0 ? levelById[CEFR_ORDER[currentIndex - 1]] : null;
  const nextLevel = currentIndex < CEFR_ORDER.length - 1 ? levelById[CEFR_ORDER[currentIndex + 1]] : null;
  const parts = [];

  if (previousLevel) {
    parts.push(`Se quiser revisar a base, ${decodeHtml(language.name)} ${previousLevel.id} pode ajudar a consolidar o caminho.`);
  }

  if (nextLevel) {
    parts.push(`Se este nível já estiver confortável para você, ${decodeHtml(language.name)} ${nextLevel.id} e o próximo passo natural.`);
  }

  if (!parts.length) {
    parts.push(`Seu resultado mostra um ponto de partida muito claro. Agora o foco e manter o ritmo e aprofundar o repertório no curso recomendado.`);
  }

  return parts.join(' ');
}

function loadState() {
  try {
    const rawState = localStorage.getItem(STORAGE_KEY);
    if (!rawState) {
      return createDefaultState();
    }

    const parsedState = JSON.parse(rawState);
    const nextState = createDefaultState();

    if (parsedState && typeof parsedState === 'object') {
      if (parsedState.selectedLanguageId && languageById[parsedState.selectedLanguageId]) {
        nextState.selectedLanguageId = parsedState.selectedLanguageId;
      }

      if (parsedState.latestResult && languageById[parsedState.latestResult.languageId] && levelById[parsedState.latestResult.levelId]) {
        nextState.latestResult = parsedState.latestResult;
      }

      if (parsedState.sessions && typeof parsedState.sessions === 'object') {
        Object.keys(parsedState.sessions).forEach((languageId) => {
          if (!languageById[languageId]) {
            return;
          }

          const rawSession = parsedState.sessions[languageId];
          const language = languageById[languageId];
          const sanitizedSession = getEmptySession();

          if (rawSession && typeof rawSession === 'object') {
            sanitizedSession.started = Boolean(rawSession.started);
            sanitizedSession.completed = Boolean(rawSession.completed);
            sanitizedSession.currentQuestionIndex = clampNumber(rawSession.currentQuestionIndex, 0, language.questions.length - 1);
            sanitizedSession.answers = sanitizeAnswers(language, rawSession.answers);

            if (rawSession.result && levelById[rawSession.result.levelId]) {
              sanitizedSession.result = rawSession.result;
            }
          }

          nextState.sessions[languageId] = sanitizedSession;
        });
      }
    }

    return nextState;
  } catch (error) {
    console.warn('Não foi possível recuperar o estado salvo do quiz.', error);
    return createDefaultState();
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function sanitizeAnswers(language, rawAnswers) {
  if (!rawAnswers || typeof rawAnswers !== 'object') {
    return {};
  }

  const validAnswers = {};

  language.questions.forEach((question) => {
    const selectedAnswerId = rawAnswers[question.id];
    const isValidAnswer = question.answers.some((answer) => answer.id === selectedAnswerId);
    if (isValidAnswer) {
      validAnswers[question.id] = selectedAnswerId;
    }
  });

  return validAnswers;
}

function clampNumber(value, min, max) {
  const numericValue = Number(value);
  if (Number.isNaN(numericValue)) {
    return min;
  }

  return Math.min(Math.max(numericValue, min), max);
}

function validateQuestionBanks() {
  QUIZ_LANGUAGES.forEach((language) => {
    if (language.questions.length !== 12) {
      console.warn(`O quiz de ${decodeHtml(language.name)} deveria ter 12 perguntas, mas possui ${language.questions.length}.`);
    }

    CEFR_ORDER.forEach((levelId) => {
      const questionsAtLevel = language.questions.filter((question) => question.level === levelId);
      if (questionsAtLevel.length !== 2) {
        console.warn(`O quiz de ${decodeHtml(language.name)} deveria ter 2 perguntas no nivel ${levelId}, mas possui ${questionsAtLevel.length}.`);
      }
    });

    language.questions.forEach((question) => {
      if (question.answers.length !== 4) {
        console.warn(`A pergunta ${question.id} deveria ter 4 alternativas.`);
      }

      const correctAnswers = question.answers.filter((answer) => answer.correct);
      if (correctAnswers.length !== 1) {
        console.warn(`A pergunta ${question.id} deveria ter exatamente 1 resposta correta.`);
      }
    });
  });
}

function scrollToSection(selector) {
  const target = document.querySelector(selector);
  if (!target) {
    return;
  }

  target.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function focusWithinWorkspace() {
  const language = getSelectedLanguage();
  const session = language ? ensureSession(language.id) : null;

  if (!language || !session || !session.started) {
    focusStartButton();
    return;
  }

  if (session.completed) {
    focusResult();
    return;
  }

  focusQuestion();
}

function focusStartButton() {
  focusElement(elements.startButton);
}

function focusQuestion() {
  focusElement(elements.questionText);
}

function focusResult() {
  focusElement(elements.resultTitle);
}

function focusElement(element) {
  if (!element) {
    return;
  }

  const hadTabIndex = element.hasAttribute('tabindex');
  if (!hadTabIndex) {
    element.setAttribute('tabindex', '-1');
  }

  element.focus({ preventScroll: true });

  if (!hadTabIndex) {
    element.addEventListener('blur', () => {
      element.removeAttribute('tabindex');
    }, { once: true });
  }
}

function setHtml(element, value) {
  if (element) {
    element.innerHTML = value;
  }
}

function decodeHtml(value) {
  htmlDecoder.innerHTML = value;
  return htmlDecoder.value;
}

function createDefaultState() {
  return {
    selectedLanguageId: defaultState.selectedLanguageId,
    sessions: {},
    latestResult: defaultState.latestResult
  };
}
