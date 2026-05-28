START TRANSACTION;

ALTER TABLE tbl_servicos
ADD COLUMN IF NOT EXISTS tipo_servico VARCHAR(30) NOT NULL DEFAULT 'aulas' AFTER cta_texto_servico;

INSERT INTO tbl_alunos (
    id_aluno,
    nome_aluno,
    email_aluno, 
    senha_aluno, 
    telefone_aluno, 
    curso_aluno, 
    data_nasc_aluno, 
    nivel_aluno, 
    foto_aluno, 
    status_aluno, 
    criado_em_aluno, 
    atualizado_em_aluno
) VALUES
(1, 'Caio Ferreira', 'caioferreira@gmail.com', '4582', '(11)94002-4582', 'Inglês', '2010-05-17', 'Iniciante', 'alunos/caio-ferreira.png', 'EM CURSO', '2026-03-17 09:05:05', '2026-03-17 09:11:37'),
(2, 'Paulo Vicente', 'paulovicente@gmail.com', '4132', '(11)99972-7631', 'Espanhol', '2003-04-23', 'Intermediário', 'alunos/paulo-vicente.png', 'EM CURSO', '2026-03-17 09:11:06', '2026-03-17 09:11:37'),
(3, 'Lorena Marques', 'lorenamarques@gmail.com', '2520', '(11)99345-0123', 'Inglês', '2016-10-07', 'Iniciante', 'alunos/lorena-marques.png', 'EM CURSO', '2026-03-17 09:28:46', '2026-03-17 09:28:46');

INSERT INTO tbl_professor (
    id_professor, 
    nome_professor,
    especialidade_professor, 
    experiencia_professor, 
    bio_professor, 
    foto_professor, 
    email_professor, 
    curso_professor, 
    nivel_professor, 
    telefone_professor, 
    senha_professor
    ) VALUES (
        1, 
        'Renato Caetano', 
        'Aulas de inglês', 
        '10 anos', 
        'Sou Renato Caetano, consultor e professor trilíngue formado em Letras, com experiência em ensino, tradução e design instrucional. Atualmente, curso Design Instrucional no Senac-SP.', 
        'professor/renato-caetano.png', 
        'contato@traduca.com.br', 
        'Inglês', 
        'Avançado', 
        '(11)97582-0019', 
        '123');

INSERT INTO tbl_servicos (
    id_professor,
    titulo_servico,
    subtitulo_servico,
    lista_beneficios_servico,
    cta_titulo_servico,
    cta_texto_servico,
    tipo_servico,
    link_whatsapp,
    classe_estilo_servico,
    lingua_servico,
    titulo_professor_servico,
    conteudo_servico,
    preco_servico,
    contato_text_servico,
    ordenar_servico,
    imagem_servico
) VALUES (
    1,
    'Aulas de Português',
    'Especialista em Inglês, Italiano e Português',
    'Aulas particulares personalizadas, Preparação para exames, Conversação, Aulas online',
    'Agende sua aula experimental!',
    'WhatsApp Agora',
    'aulas',
    'https://wa.me/5511999999999',
    'card-pt',
    'pt',
    'Profº Renato Caetano',
    'Foco em fluência e gramática aplicada.',
    'R$ 80/hora | 1ª aula grátis',
    'Dúvidas? Chame no zap',
    1,
    'img/flags/brazil.png'
);

COMMIT;