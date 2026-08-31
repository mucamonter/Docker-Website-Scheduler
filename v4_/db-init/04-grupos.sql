USE V2_DB;

DELIMITER $$

CREATE PROCEDURE IF NOT EXISTS MigrarAgendamentos()
BEGIN
    -- 1. Verifica e adiciona a coluna 'tipo_atendimento'
    IF NOT EXISTS (
        SELECT 1 FROM information_schema.COLUMNS 
        WHERE TABLE_SCHEMA = 'V2_DB' 
          AND TABLE_NAME = 'agendamentos' 
          AND COLUMN_NAME = 'tipo_atendimento'
    ) THEN
        ALTER TABLE agendamentos ADD COLUMN tipo_atendimento ENUM('unico','grupo') NOT NULL DEFAULT 'unico' AFTER atendimento;
    END IF;

    -- 2. Verifica e adiciona a coluna 'blocos_json'
    IF NOT EXISTS (
        SELECT 1 FROM information_schema.COLUMNS 
        WHERE TABLE_SCHEMA = 'V2_DB' 
          AND TABLE_NAME = 'agendamentos' 
          AND COLUMN_NAME = 'blocos_json'
    ) THEN
        ALTER TABLE agendamentos ADD COLUMN blocos_json JSON NULL AFTER tipo_atendimento;
    END IF;
END$$

DELIMITER ;

-- Executa a migration e depois apaga a procedure temporária
CALL MigrarAgendamentos();
DROP PROCEDURE IF EXISTS MigrarAgendamentos;

CREATE TABLE IF NOT EXISTS agendamento_participantes (
 id INT UNSIGNED NOT NULL AUTO_INCREMENT,
 agendamento_id INT UNSIGNED NOT NULL,
 nome VARCHAR(150) NOT NULL,
 telefone VARCHAR(30) NULL,
 principal TINYINT(1) NOT NULL DEFAULT 0,
 PRIMARY KEY (id), INDEX idx_participante_agendamento (agendamento_id),
 CONSTRAINT fk_participante_agendamento FOREIGN KEY (agendamento_id) REFERENCES agendamentos(id) ON DELETE CASCADE
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS agendamento_slots (
 id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
 agendamento_id INT UNSIGNED NOT NULL,
 data DATE NOT NULL,
 horario_inicio TIME NOT NULL,
 PRIMARY KEY (id), UNIQUE KEY uk_agenda_slot (data, horario_inicio), INDEX idx_slot_agendamento (agendamento_id),
 CONSTRAINT fk_slot_agendamento FOREIGN KEY (agendamento_id) REFERENCES agendamentos(id) ON DELETE CASCADE
) ENGINE=InnoDB;

INSERT IGNORE INTO agendamento_slots (agendamento_id,data,horario_inicio)
SELECT id,data,horario FROM agendamentos WHERE status <> 'cancelado';
