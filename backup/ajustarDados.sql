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

CREATE TABLE tbl_aula_links(
id_aula_links BIGINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
id_aluno BIGINT NULL,
id_turma BIGINT NULL,
data_hora_aula_links DATETIME NULL,
link_aula_links VARCHAR(255) NULL,
titulo_aula_links VARCHAR(255) NULL,
criado_em_aula_links TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
atualizado_em_aula_links TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE tbl_reagendamentos(
id_reagendamentos BIGINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
id_aluno BIGINT NOT NULL,
id_aula BIGINT NOT NULL,
id_professor BIGINT NOT NULL,
data_original_reagendamento DATETIME NULL,
data_sugerida_reagendamento DATETIME NULL,
data_nova_reagendamento DATETIME NULL,
motivo_reagendamento TEXT NOT NULL,
resposta_professor_reagendamento TEXT NULL,
status_reagendamento VARCHAR(255) NOT NULL DEFAULT 'PENDENTE',
notificado_professor_reagendamento TINYINT(1) NOT NULL DEFAULT '0',
notificado_aluno_reagendamento TINYINT(1) NOT NULL DEFAULT '0',
criado_em_reagendamento TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
atualizado_em_reagendamento TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
confirmado_em_reagendamento DATETIME NULL
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE tbl_atividades (
  id_atividade int NOT NULL AUTO_INCREMENT,
  id_professor int NOT NULL,
  id_curso int NOT NULL,
  titulo_atividade varchar(200) NOT NULL,
  descricao_atividade text,
  tipo_atividade enum('multipla_escolha','texto','misto') DEFAULT 'misto',
  data_entrega_atividade date DEFAULT NULL,
  status_atividade enum('ATIVA','INATIVA') DEFAULT 'ATIVA',
  criado_em_atividade timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id_atividade`),
  KEY `id_professor` (`id_professor`),
  KEY `id_curso` (`id_curso`),
  CONSTRAINT `tbl_atividades_ibfk_1` FOREIGN KEY (`id_professor`) REFERENCES `tbl_professor` (`id_professor`),
  CONSTRAINT `tbl_atividades_ibfk_2` FOREIGN KEY (`id_curso`) REFERENCES `tbl_cursos` (`id_curso`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE tbl_atividade_questoes (
  id_atividade_questao int NOT NULL AUTO_INCREMENT,
  id_atividade int NOT NULL,
  enunciado_atividade_questao text NOT NULL,
  tipo_atividade_questao enum('multipla_escolha','texto') NOT NULL,
  opcao_a_atividade_questao varchar(300) DEFAULT NULL,
  opcao_b_atividade_questao varchar(300) DEFAULT NULL,
  opcao_c_atividade_questao varchar(300) DEFAULT NULL,
  opcao_d_atividade_questao varchar(300) DEFAULT NULL,
  resposta_correta_atividade_questao char(1) DEFAULT NULL,
  ordem_atividade_questao int DEFAULT '1',
  PRIMARY KEY (`id_atividade_questao`),
  KEY `id_atividade` (`id_atividade`),
  CONSTRAINT `tbl_atividade_questoes_ibfk_1` FOREIGN KEY (`id_atividade`) REFERENCES `tbl_atividades` (`id_atividade`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE tbl_atividade_respostas (
  id_atividade_respostas int NOT NULL AUTO_INCREMENT,
  id_atividade int NOT NULL,
  id_aluno int NOT NULL,
  status_atividade_resposta enum('PENDENTE','ENVIADA','CORRIGIDA') DEFAULT 'PENDENTE',
  nota_atividade_resposta decimal(4,1) DEFAULT NULL,
  feedback_professor_atividade_resposta text,
  data_envio_atividade_resposta timestamp NULL DEFAULT NULL,
  data_correcao_atividade_resposta timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id_atividade_respostas`),
  KEY `id_atividade` (`id_atividade`),
  KEY `id_aluno` (`id_aluno`),
  CONSTRAINT `tbl_atividade_respostas_ibfk_1` FOREIGN KEY (`id_atividade`) REFERENCES `tbl_atividades` (`id_atividade`),
  CONSTRAINT `tbl_atividade_respostas_ibfk_2` FOREIGN KEY (`id_aluno`) REFERENCES `tbl_alunos` (`id_aluno`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE tbl_atividade_resposta_questoes (
  id_atividade_resposta_questao int NOT NULL AUTO_INCREMENT,
  id_atividade_respostas int NOT NULL,
  id_atividade_questao int NOT NULL,
  resposta_aluno_atividade_resposta_questao text,
  correta_atividade_resposta_questao tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id_atividade_resposta_questao`),
  KEY `id_resposta` (`id_atividade_respostas`),
  KEY `id_questao` (`id_atividade_questao`),
  CONSTRAINT `tbl_atividade_resposta_questoes_ibfk_1` FOREIGN KEY (`id_atividade_respostas`) REFERENCES `tbl_atividade_respostas` (`id_atividade_respostas`) ON DELETE CASCADE,
  CONSTRAINT `tbl_atividade_resposta_questoes_ibfk_2` FOREIGN KEY (`id_atividade_questao`) REFERENCES `tbl_atividade_questoes` (`id_atividade_questao`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE tbl_feedbacks (
  id_feedback bigint unsigned NOT NULL AUTO_INCREMENT,
  id_aluno bigint unsigned NOT NULL,
  id_professor bigint unsigned NOT NULL,
  id_curso bigint unsigned NOT NULL,
  nota_feedback tinyint unsigned NOT NULL,
  comentario_feedback text COLLATE utf8mb4_unicode_ci,
  criado_em_feedback timestamp NULL DEFAULT NULL,
  atualizado_em_feedback timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id_feedback`),
  UNIQUE KEY `tbl_feedbacks_id_aluno_id_curso_unique` (`id_aluno`,`id_curso`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

ALTER TABLE `tbl_matricula`
ADD COLUMN `status_matricula` enum('ATIVO','CONGELADO','CANCELADO') 
    CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci 
    NOT NULL DEFAULT 'ATIVO'
AFTER `data_matricula`;

COMMIT;