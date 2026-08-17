CREATE DATABASE IF NOT EXISTS V2_DB;
USE V2_DB;

CREATE TABLE IF NOT EXISTS cidadaos (
 id INT UNSIGNED NOT NULL AUTO_INCREMENT,
 nome VARCHAR(150) NOT NULL,
 email VARCHAR(255) NOT NULL,
 senha_hash VARCHAR(255) NOT NULL,
 cep VARCHAR(20) NULL,
 endereco VARCHAR(255) NULL,
 criado_em DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
 PRIMARY KEY (id),
 UNIQUE KEY uk_cidadao_email (email)
);

CREATE TABLE IF NOT EXISTS agendamentos (
 id INT UNSIGNED NOT NULL AUTO_INCREMENT,
 cidadao_id INT UNSIGNED NULL,
 nome VARCHAR(150) NOT NULL,
 motivo TEXT NULL,
 data DATE NOT NULL,
 horario TIME NOT NULL,
 email VARCHAR(255) NULL,
 cep VARCHAR(20) NULL,
 endereco VARCHAR(255) NULL,
 data_registro DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
 status ENUM('agendado','feito','cancelado') NOT NULL DEFAULT 'agendado',
 PRIMARY KEY (id),
 UNIQUE KEY uk_agendamento_data_horario (data,horario),
 INDEX idx_agendamento_data (data),
 INDEX idx_agendamento_nome (nome),
 INDEX idx_agendamento_status (status),
 INDEX idx_agendamento_cidadao (cidadao_id),
 CONSTRAINT fk_agendamento_cidadao FOREIGN KEY (cidadao_id) REFERENCES cidadaos(id) ON UPDATE CASCADE ON DELETE SET NULL
);
