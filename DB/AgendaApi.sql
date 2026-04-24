-- ==================================================
-- SISTEMA DE AGENDA - ESTRUCTURA DE BASE DE DATOS
-- ==================================================
-- Fecha: 22/12/2025
-- Descripción: Base de datos simple para gestión de citas y visitantes

-- Crear base de datos (opcional, descomenta si necesitas crear la BD)
-- CREATE DATABASE agendaDb;
-- USE agendaDb;

-- ==================================================
-- TABLA: visitantes
-- ==================================================
-- Almacena la información básica de los visitantes

CREATE TABLE visitantes (
    idVisitante INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    apellidos VARCHAR(100) NOT NULL,
    telefono VARCHAR(20),
    email VARCHAR(100),
    
    -- Metadatos
    fechaCreacion DATETIME DEFAULT CURRENT_TIMESTAMP,
    activo BOOLEAN DEFAULT TRUE
);

-- ==================================================
-- TABLA: citas
-- ==================================================
-- Almacena las citas programadas con los visitantes

CREATE TABLE citas (
    idCita INT AUTO_INCREMENT PRIMARY KEY,
    idVisitante INT NOT NULL,
    fechaCita DATE NOT NULL,
    horaCita TIME NOT NULL,
    motivo VARCHAR(255),
    observaciones TEXT,
    estado ENUM('programada', 'confirmada', 'completada', 'cancelada') DEFAULT 'programada',
    
    -- Metadatos
    fechaCreacion DATETIME DEFAULT CURRENT_TIMESTAMP,
    activo BOOLEAN DEFAULT TRUE,
    
    -- Relación con visitantes
    FOREIGN KEY (idVisitante) REFERENCES visitantes(idVisitante) ON DELETE CASCADE
);

-- ==================================================
-- DATOS DE EJEMPLO (OPCIONAL)
-- ==================================================
-- Descomenta las siguientes líneas si quieres datos de prueba

/*
-- Insertar visitantes de ejemplo
INSERT INTO visitantes (nombre, apellidos, telefono, email) VALUES
('Juan', 'Pérez García', '555-0101', 'juan.perez@email.com'),
('María', 'López Ruiz', '555-0102', 'maria.lopez@email.com'),
('Carlos', 'Rodríguez Silva', '555-0103', 'carlos.rodriguez@email.com');

-- Insertar citas de ejemplo
INSERT INTO citas (idVisitante, fechaCita, horaCita, motivo) VALUES
(1, '2025-12-23', '10:00:00', 'Consulta inicial'),
(1, '2025-12-24', '14:30:00', 'Seguimiento'),
(2, '2025-12-23', '11:00:00', 'Primera visita'),
(3, '2025-12-25', '09:30:00', 'Revisión documento');
*/

-- ==================================================
-- CONSULTAS ÚTILES DE EJEMPLO
-- ==================================================

-- Ver todas las citas activas con información del visitante
/*
SELECT 
    c.idCita,
    CONCAT(v.nombre, ' ', v.apellidos) AS visitante,
    c.fechaCita,
    c.horaCita,
    c.motivo,
    c.estado
FROM citas c
INNER JOIN visitantes v ON c.idVisitante = v.idVisitante
WHERE c.activo = TRUE AND v.activo = TRUE
ORDER BY c.fechaCita, c.horaCita;
*/

-- Ver citas de hoy
/*
SELECT 
    c.idCita,
    CONCAT(v.nombre, ' ', v.apellidos) AS visitante,
    c.horaCita,
    c.motivo,
    c.estado
FROM citas c
INNER JOIN visitantes v ON c.idVisitante = v.idVisitante
WHERE c.fechaCita = CURDATE() 
    AND c.activo = TRUE 
    AND v.activo = TRUE
ORDER BY c.horaCita;
*/

-- Contar citas por visitante
/*
SELECT 
    CONCAT(v.nombre, ' ', v.apellidos) AS visitante,
    COUNT(c.idCita) as totalCitas
FROM visitantes v
LEFT JOIN citas c ON v.idVisitante = c.idVisitante AND c.activo = TRUE
WHERE v.activo = TRUE
GROUP BY v.idVisitante
ORDER BY totalCitas DESC;
*/