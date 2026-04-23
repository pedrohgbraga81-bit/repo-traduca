/**
 * @typedef {'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2'} CefrLevelId
 * @typedef {'english' | 'portuguese' | 'italian'} LanguageId
 *
 * @typedef {{
 *   id: string,
 *   text: string,
 *   correct: boolean
 * }} QuizAnswer
 *
 * @typedef {{
 *   id: string,
 *   level: CefrLevelId,
 *   prompt: string,
 *   helper: string,
 *   answers: QuizAnswer[]
 * }} QuizQuestion
 *
 * @typedef {{
 *   id: CefrLevelId,
 *   name: string,
 *   title: string,
 *   overview: string,
 *   quizResultCopy: string,
 *   courseSummary: string
 * }} CefrLevel
 *
 * @typedef {{
 *   id: LanguageId,
 *   code: string,
 *   name: string,
 *   testCopy: string,
 *   helperCopy: string,
 *   recommendedCourseCopy: string,
 *   questions: QuizQuestion[]
 * }} QuizLanguage
 */

export const CEFR_ORDER = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];

/** @type {CefrLevel[]} */
export const CEFR_LEVELS = [
  {
    id: 'A1',
    name: 'Iniciante',
    title: 'A1 | Iniciante',
    overview: 'Você consegue lidar com expressões familiares, apresentações e situações muito simples do dia a dia.',
    quizResultCopy: 'Seu resultado aponta para uma base inicial. O melhor caminho agora e ganhar segurança com estruturas essenciais e vocabulário cotidiano.',
    courseSummary: 'Ideal para quem quer construir confiança desde o começo, com foco em comunicação básica e rotina.'
  },
  {
    id: 'A2',
    name: 'Pré-intermediário',
    title: 'A2 | Pré-intermediário',
    overview: 'Você já entende frases frequentes e consegue lidar melhor com rotina, compras, deslocamentos e informações objetivas.',
    quizResultCopy: 'Seu resultado mostra uma base em desenvolvimento. Um curso A2 ajuda a ampliar vocabulário e a falar com mais autonomia em contextos comuns.',
    courseSummary: 'Indicado para consolidar o básico e ampliar a fluidez em conversas práticas.'
  },
  {
    id: 'B1',
    name: 'Intermediário',
    title: 'B1 | Intermediário',
    overview: 'Você já consegue se comunicar sobre temas familiares, lidar com viagens e produzir mensagens mais conectadas.',
    quizResultCopy: 'Seu resultado indica um ponto de partida intermediário. O próximo passo e ganhar fluidez, repertório e segurança em situações reais.',
    courseSummary: 'Bom para desenvolver conversação, leitura funcional e mais independência com a língua.'
  },
  {
    id: 'B2',
    name: 'Intermediário superior',
    title: 'B2 | Intermediário superior',
    overview: 'Você compreende textos mais complexos, argumenta melhor e participa de conversas com mais naturalidade.',
    quizResultCopy: 'Seu resultado mostra uma base solida. Um curso B2 ajuda a refinar argumentação, naturalidade e compreensão de conteúdos mais densos.',
    courseSummary: 'Recomendado para quem quer aprofundar leitura, argumentação e comunicação em contextos profissionais ou acadêmicos.'
  },
  {
    id: 'C1',
    name: 'Avançado',
    title: 'C1 | Avançado',
    overview: 'Você usa a língua com flexibilidade, compreende nuances e se expressa com boa precisão em temas exigentes.',
    quizResultCopy: 'Seu resultado sugere um nível avançado. Agora vale trabalhar refinamento, repertório e naturalidade em contextos sofisticados.',
    courseSummary: 'Pensado para expandir vocabulário, escrita e fluídez em situações complexas.'
  },
  {
    id: 'C2',
    name: 'Proficiente',
    title: 'C2 | Proficiente',
    overview: 'Você compreende quase tudo com facilidade e consegue transmitir nuances sutis com alto nível de domínio.',
    quizResultCopy: 'Seu resultado aponta para proficiência. O foco daqui em diante e manter o alto nível e explorar usos ainda mais especializados.',
    courseSummary: 'Excelente para lapidar precisão, estilo e domínio pleno da língua em qualquer contexto.'
  }
];

/** @type {QuizLanguage[]} */
export const QUIZ_LANGUAGES = [
  {
    id: 'english',
    code: 'GB',
    name: 'Inglês',
    testCopy: 'Teste de nivelamento de inglês para descobrir seu nível CEFR e receber o curso certo.',
    helperCopy: 'Você responde 12 perguntas em inglês e recebe uma recomendação clara do próximo passo.',
    recommendedCourseCopy: 'Curso recomendado: Inglês',
    questions: [
      {
        id: 'en-a1-1',
        level: 'A1',
        prompt: 'Complete the sentence: "My name ___ Sofia."',
        helper: 'Escolha a alternativa que completa a frase corretamente.',
        answers: [
          { id: 'a', text: 'is', correct: true },
          { id: 'b', text: 'am', correct: false },
          { id: 'c', text: 'are', correct: false },
          { id: 'd', text: 'be', correct: false }
        ]
      },
      {
        id: 'en-a1-2',
        level: 'A1',
        prompt: 'Choose the correct option: "He ___ to work every day."',
        helper: 'Pense na forma correta do verbo para rotina.',
        answers: [
          { id: 'a', text: 'go', correct: false },
          { id: 'b', text: 'goes', correct: true },
          { id: 'c', text: 'going', correct: false },
          { id: 'd', text: 'went', correct: false }
        ]
      },
      {
        id: 'en-a2-1',
        level: 'A2',
        prompt: 'Yesterday, we ___ at home because it was raining.',
        helper: 'Observe o tempo verbal da frase.',
        answers: [
          { id: 'a', text: 'stayed', correct: true },
          { id: 'b', text: 'stay', correct: false },
          { id: 'c', text: 'stays', correct: false },
          { id: 'd', text: 'staying', correct: false }
        ]
      },
      {
        id: 'en-a2-2',
        level: 'A2',
        prompt: 'Choose the best response: "Would you like some coffee?"',
        helper: 'Busque a resposta mais natural para o contexto.',
        answers: [
          { id: 'a', text: 'Yes, please.', correct: true },
          { id: 'b', text: 'I like coffee every day.', correct: false },
          { id: 'c', text: 'I can coffee.', correct: false },
          { id: 'd', text: 'It is coffee.', correct: false }
        ]
      },
      {
        id: 'en-b1-1',
        level: 'B1',
        prompt: 'If I have time tomorrow, I ___ you.',
        helper: 'Considere a estrutura mais adequada para uma condição real.',
        answers: [
          { id: 'a', text: 'will call', correct: true },
          { id: 'b', text: 'called', correct: false },
          { id: 'c', text: 'am calling', correct: false },
          { id: 'd', text: 'call', correct: false }
        ]
      },
      {
        id: 'en-b1-2',
        level: 'B1',
        prompt: 'Choose the correct sentence: "I have lived here ___ 2019."',
        helper: 'Pense na preposição usada com um ponto no tempo.',
        answers: [
          { id: 'a', text: 'for', correct: false },
          { id: 'b', text: 'since', correct: true },
          { id: 'c', text: 'from', correct: false },
          { id: 'd', text: 'during', correct: false }
        ]
      },
      {
        id: 'en-b2-1',
        level: 'B2',
        prompt: 'The book ___ by the committee before publication.',
        helper: 'Observe a voz verbal mais adequada.',
        answers: [
          { id: 'a', text: 'was reviewed', correct: true },
          { id: 'b', text: 'reviewed', correct: false },
          { id: 'c', text: 'has reviewing', correct: false },
          { id: 'd', text: 'was review', correct: false }
        ]
      },
      {
        id: 'en-b2-2',
        level: 'B2',
        prompt: 'Hardly had the meeting started when the fire alarm ___.',
        helper: 'Escolha a continuidade mais natural para a frase.',
        answers: [
          { id: 'a', text: 'rang', correct: true },
          { id: 'b', text: 'ring', correct: false },
          { id: 'c', text: 'had rung', correct: false },
          { id: 'd', text: 'was ring', correct: false }
        ]
      },
      {
        id: 'en-c1-1',
        level: 'C1',
        prompt: 'The proposal was rejected, not because it was risky, ___ because it lacked evidence.',
        helper: 'Procure a estrutura argumentativa mais precisa.',
        answers: [
          { id: 'a', text: 'but rather', correct: true },
          { id: 'b', text: 'although', correct: false },
          { id: 'c', text: 'whereas', correct: false },
          { id: 'd', text: 'unless', correct: false }
        ]
      },
      {
        id: 'en-c1-2',
        level: 'C1',
        prompt: 'Choose the sentence closest in meaning to: "She managed to solve the issue despite the pressure."',
        helper: 'Pense na frase que preserva o mesmo sentido.',
        answers: [
          { id: 'a', text: 'Even under pressure, she was able to solve the issue.', correct: true },
          { id: 'b', text: 'She solved the issue because there was pressure.', correct: false },
          { id: 'c', text: 'She wanted the pressure to solve the issue.', correct: false },
          { id: 'd', text: 'The pressure solved the issue for her.', correct: false }
        ]
      },
      {
        id: 'en-c2-1',
        level: 'C2',
        prompt: 'Were it not for her meticulous planning, the launch ___ a disaster.',
        helper: 'Observe a estrutura condicional mais sofisticada.',
        answers: [
          { id: 'a', text: 'would have been', correct: true },
          { id: 'b', text: 'had been', correct: false },
          { id: 'c', text: 'would be', correct: false },
          { id: 'd', text: 'has been', correct: false }
        ]
      },
      {
        id: 'en-c2-2',
        level: 'C2',
        prompt: 'The critic\'s essay was so ___ that even specialists disagreed on its interpretation.',
        helper: 'Escolha o vocabulário mais preciso para a frase.',
        answers: [
          { id: 'a', text: 'elliptical', correct: true },
          { id: 'b', text: 'transparent', correct: false },
          { id: 'c', text: 'literal', correct: false },
          { id: 'd', text: 'pedestrian', correct: false }
        ]
      }
    ]
  },
  {
    id: 'portuguese',
    code: 'BR',
    name: 'Português',
    testCopy: 'Teste de nivelamento de português para encontrar o curso mais adequado ao seu momento.',
    helperCopy: 'Você responde 12 perguntas em português e recebe seu resultado CEFR com recomendação de curso.',
    recommendedCourseCopy: 'Curso recomendado: Português',
    questions: [
      {
        id: 'pt-a1-1',
        level: 'A1',
        prompt: 'Complete a frase: "Eu ___ do Brasil."',
        helper: 'Escolha a forma correta do verbo ser.',
        answers: [
          { id: 'a', text: 'sou', correct: true },
          { id: 'b', text: 'e', correct: false },
          { id: 'c', text: 'são', correct: false },
          { id: 'd', text: 'ser', correct: false }
        ]
      },
      {
        id: 'pt-a1-2',
        level: 'A1',
        prompt: 'Escolha a opção correta: "Nós ___ café pela manhã."',
        helper: 'Pense na forma correta para o sujeito "nós".',
        answers: [
          { id: 'a', text: 'bebemos', correct: true },
          { id: 'b', text: 'bebo', correct: false },
          { id: 'c', text: 'bebe', correct: false },
          { id: 'd', text: 'bebem', correct: false }
        ]
      },
      {
        id: 'pt-a2-1',
        level: 'A2',
        prompt: 'Ontem ela ___ ao mercado cedo.',
        helper: 'Observe o tempo verbal indicado por "ontem".',
        answers: [
          { id: 'a', text: 'foi', correct: true },
          { id: 'b', text: 'vai', correct: false },
          { id: 'c', text: 'ia', correct: false },
          { id: 'd', text: 'fosse', correct: false }
        ]
      },
      {
        id: 'pt-a2-2',
        level: 'A2',
        prompt: 'Qual é a melhor resposta para: "Que horas começa a aula?"',
        helper: 'Escolha a resposta mais natural para a pergunta.',
        answers: [
          { id: 'a', text: 'Começa às oito.', correct: true },
          { id: 'b', text: 'Eu gosto da aula.', correct: false },
          { id: 'c', text: 'Na sala grande.', correct: false },
          { id: 'd', text: 'Sim, ontem.', correct: false }
        ]
      },
      {
        id: 'pt-b1-1',
        level: 'B1',
        prompt: 'Se chover amanhã, nós ___ em casa.',
        helper: 'Considere a relação entre condição e futuro.',
        answers: [
          { id: 'a', text: 'ficaremos', correct: true },
          { id: 'b', text: 'ficamos', correct: false },
          { id: 'c', text: 'ficariamos', correct: false },
          { id: 'd', text: 'ficavamos', correct: false }
        ]
      },
      {
        id: 'pt-b1-2',
        level: 'B1',
        prompt: 'Tenho estudado português ___ seis meses.',
        helper: 'Procure a expressão mais usada para tempo decorrido.',
        answers: [
          { id: 'a', text: 'há', correct: true },
          { id: 'b', text: 'por', correct: false },
          { id: 'c', text: 'em', correct: false },
          { id: 'd', text: 'desde', correct: false }
        ]
      },
      {
        id: 'pt-b2-1',
        level: 'B2',
        prompt: 'É importante que você ___ o formulário hoje.',
        helper: 'Observe o modo verbal exigido pela frase.',
        answers: [
          { id: 'a', text: 'preencha', correct: true },
          { id: 'b', text: 'preenche', correct: false },
          { id: 'c', text: 'preencheu', correct: false },
          { id: 'd', text: 'preencherá', correct: false }
        ]
      },
      {
        id: 'pt-b2-2',
        level: 'B2',
        prompt: 'Embora o texto ___ complexo, a explicação foi clara.',
        helper: 'Pense na forma verbal adequada para a ideia de concessão.',
        answers: [
          { id: 'a', text: 'parecesse', correct: true },
          { id: 'b', text: 'parece', correct: false },
          { id: 'c', text: 'parecer', correct: false },
          { id: 'd', text: 'pareceu', correct: false }
        ]
      },
      {
        id: 'pt-c1-1',
        level: 'C1',
        prompt: 'A proposta foi adiada, não por falta de interesse, ___ por necessidade de revisão.',
        helper: 'Escolha o conector que mantem a frase natural.',
        answers: [
          { id: 'a', text: 'mas', correct: true },
          { id: 'b', text: 'embora', correct: false },
          { id: 'c', text: 'quando', correct: false },
          { id: 'd', text: 'porque', correct: false }
        ]
      },
      {
        id: 'pt-c1-2',
        level: 'C1',
        prompt: 'Qual frase mantem o sentido de: "Ele expos a ideia com clareza e precisão"?',
        helper: 'Busque a reescrita mais fiel ao sentido original.',
        answers: [
          { id: 'a', text: 'Ele apresentou a ideia de forma clara e precisa.', correct: true },
          { id: 'b', text: 'Ele escondeu a ideia para parecer preciso.', correct: false },
          { id: 'c', text: 'Ele mudou a ideia por falta de clareza.', correct: false },
          { id: 'd', text: 'Ele deixou a ideia confusa de propósito.', correct: false }
        ]
      },
      {
        id: 'pt-c2-1',
        level: 'C2',
        prompt: 'Se não ___ as evidências, a conclusão teria sido diferente.',
        helper: 'Observe a estrutura verbal exigida pelo período.',
        answers: [
          { id: 'a', text: 'houvesse', correct: true },
          { id: 'b', text: 'haveria', correct: false },
          { id: 'c', text: 'havia', correct: false },
          { id: 'd', text: 'haja', correct: false }
        ]
      },
      {
        id: 'pt-c2-2',
        level: 'C2',
        prompt: 'O relatorio apresentou uma análise ___ do cenário econômico.',
        helper: 'Escolha o vocabulário mais preciso para a frase.',
        answers: [
          { id: 'a', text: 'pormenorizada', correct: true },
          { id: 'b', text: 'superficial', correct: false },
          { id: 'c', text: 'apressada', correct: false },
          { id: 'd', text: 'aleatória', correct: false }
        ]
      }
    ]
  },
  {
    id: 'italian',
    code: 'IT',
    name: 'Italiano',
    testCopy: 'Teste de nivelamento de italiano para descobrir seu nível e o curso ideal para seguir.',
    helperCopy: 'Você responde 12 perguntas em italiano e recebe um resultado CEFR acolhedor e claro.',
    recommendedCourseCopy: 'Curso recomendado: Italiano',
    questions: [
      {
        id: 'it-a1-1',
        level: 'A1',
        prompt: 'Completa la frase: "Io ___ Marco."',
        helper: 'Scegli la forma corretta del verbo essere.',
        answers: [
          { id: 'a', text: 'sono', correct: true },
          { id: 'b', text: 'e', correct: false },
          { id: 'c', text: 'sei', correct: false },
          { id: 'd', text: 'essere', correct: false }
        ]
      },
      {
        id: 'it-a1-2',
        level: 'A1',
        prompt: 'Scegli l\'opzione corretta: "Noi ___ in Italia."',
        helper: 'Pensa alla forma corretta per "noi".',
        answers: [
          { id: 'a', text: 'viviamo', correct: true },
          { id: 'b', text: 'vivo', correct: false },
          { id: 'c', text: 'vive', correct: false },
          { id: 'd', text: 'vivete', correct: false }
        ]
      },
      {
        id: 'it-a2-1',
        level: 'A2',
        prompt: 'Ieri loro ___ al cinema.',
        helper: 'Osserva il tempo verbale richiesto da "ieri".',
        answers: [
          { id: 'a', text: 'sono andati', correct: true },
          { id: 'b', text: 'vanno', correct: false },
          { id: 'c', text: 'andavano', correct: false },
          { id: 'd', text: 'andranno', correct: false }
        ]
      },
      {
        id: 'it-a2-2',
        level: 'A2',
        prompt: 'Qual é la risposta migliore per: "Hai fame?"',
        helper: 'Scegli la risposta più naturale.',
        answers: [
          { id: 'a', text: 'Sì, mangerei volentieri qualcosa.', correct: true },
          { id: 'b', text: 'Domani e lunedi.', correct: false },
          { id: 'c', text: 'No, e un libro.', correct: false },
          { id: 'd', text: 'Abito a Roma.', correct: false }
        ]
      },
      {
        id: 'it-b1-1',
        level: 'B1',
        prompt: 'Se ho tempo stasera, ti ___.',
        helper: 'Considera la forma più adatta per una condizione reale.',
        answers: [
          { id: 'a', text: 'chiamerò', correct: true },
          { id: 'b', text: 'chiamo', correct: false },
          { id: 'c', text: 'chiamavo', correct: false },
          { id: 'd', text: 'avrei chiamato', correct: false }
        ]
      },
      {
        id: 'it-b1-2',
        level: 'B1',
        prompt: 'Studio italiano ___ due anni.',
        helper: 'Scegli la preposizione più naturale per il tempo.',
        answers: [
          { id: 'a', text: 'da', correct: true },
          { id: 'b', text: 'per', correct: false },
          { id: 'c', text: 'in', correct: false },
          { id: 'd', text: 'con', correct: false }
        ]
      },
      {
        id: 'it-b2-1',
        level: 'B2',
        prompt: 'Penso che lei ___ già la risposta.',
        helper: 'Osserva il modo verbale richiesto dalla frase.',
        answers: [
          { id: 'a', text: 'sappia', correct: true },
          { id: 'b', text: 'sa', correct: false },
          { id: 'c', text: 'sapeva', correct: false },
          { id: 'd', text: 'saprà', correct: false }
        ]
      },
      {
        id: 'it-b2-2',
        level: 'B2',
      prompt: 'Non appena ___ il messaggio, ti risponderò.',
        helper: 'Scegli la struttura temporale più precisa.',
        answers: [
          { id: 'a', text: 'avrò letto', correct: true },
          { id: 'b', text: 'leggo', correct: false },
          { id: 'c', text: 'leggero', correct: false },
          { id: 'd', text: 'avevo letto', correct: false }
        ]
      },
      {
        id: 'it-c1-1',
        level: 'C1',
        prompt: 'La conferenza e stata utile, ___ alcuni punti meritassero più tempo.',
        helper: 'Scegli il connettore più adatto al contesto.',
        answers: [
          { id: 'a', text: 'sebbene', correct: true },
          { id: 'b', text: 'perchè', correct: false },
          { id: 'c', text: 'quindi', correct: false },
          { id: 'd', text: 'cioè', correct: false }
        ]
      },
      {
        id: 'it-c1-2',
        level: 'C1',
        prompt: 'Quale frase mantiene il senso di: "Ha colto una sfumatura che molti avevano ignorato"?',
        helper: 'Cerca la riformulazione più fedele.',
        answers: [
          { id: 'a', text: 'Ha notato un dettaglio sottile che molti non avevano visto.', correct: true },
          { id: 'b', text: 'Ha cancellato un dettaglio che tutti conoscevano.', correct: false },
          { id: 'c', text: 'Ha creato una sfumatura nuova per tutti.', correct: false },
          { id: 'd', text: 'Ha ignorato il dettaglio come gli altri.', correct: false }
        ]
      },
      {
        id: 'it-c2-1',
        level: 'C2',
        prompt: 'Se non fosse intervenuto il direttore, la trattativa ___.',
        helper: 'Osserva la struttura condizionale più accurata.',
        answers: [
          { id: 'a', text: 'sarebbe fallita', correct: true },
          { id: 'b', text: 'fallisce', correct: false },
          { id: 'c', text: 'falliva', correct: false },
          { id: 'd', text: 'fallirà', correct: false }
        ]
      },
      {
        id: 'it-c2-2',
        level: 'C2',
        prompt: 'Il saggio era talmente ___ da richiedere più letture attente.',
        helper: 'Scegli il vocabolo più preciso.',
        answers: [
          { id: 'a', text: 'denso', correct: true },
          { id: 'b', text: 'banale', correct: false },
          { id: 'c', text: 'immediato', correct: false },
          { id: 'd', text: 'scontato', correct: false }
        ]
      }
    ]
  }
];
