CREATE TABLE clientes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    apellido VARCHAR(100) NOT NULL,
    email VARCHAR(150) UNIQUE NOT NULL,
    telefono VARCHAR(20) NULL,
    fecha_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    estado ENUM('activo', 'inactivo') DEFAULT 'activo',
    membresia_tipo ENUM('mensual', 'trimestral', 'anual') NOT NULL,
    fecha_inicio_membresia DATE NOT NULL,
    fecha_fin_membresia DATE NOT NULL
);
