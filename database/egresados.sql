-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Versión del servidor:         10.4.28-MariaDB - mariadb.org binary distribution
-- SO del servidor:              Win64
-- HeidiSQL Versión:             12.4.0.6659
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Volcando estructura de base de datos para egresados
CREATE DATABASE IF NOT EXISTS `egresados` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci */;
USE `egresados`;

-- Volcando estructura para tabla egresados.becas
-- CREATE TABLE IF NOT EXISTS `becas` (
--   `id` int(11) NOT NULL AUTO_INCREMENT,
--   `tipo` varchar(50) NOT NULL,
--   `monto` int(11) NOT NULL,
--   `fechaAsi` datetime NOT NULL,
--   `fechaExp` datetime NOT NULL,
--   `id_estudiante` int(11) NOT NULL,
--   PRIMARY KEY (`id`),
--   KEY `id_estudiante` (`id_estudiante`),
--   CONSTRAINT `FK_becas_estudiantes` FOREIGN KEY (`id_estudiante`) REFERENCES `estudiantes` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
-- ) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- -- Volcando datos para la tabla egresados.becas: ~3 rows (aproximadamente)
-- REPLACE INTO `becas` (`id`, `tipo`, `monto`, `fechaAsi`, `fechaExp`, `id_estudiante`) VALUES
-- 	(1, 'gratuidad', 100, '2023-05-15 18:32:03', '2023-05-15 18:32:07', 1),
-- 	(2, 'Profesores', 100, '2023-05-15 18:32:03', '2023-05-15 18:32:07', 2),
-- 	(3, 'gratuidad', 100, '2023-05-15 18:32:03', '2023-05-15 18:32:07', 3);

-- Volcando estructura para tabla egresados.comprobantes
CREATE TABLE IF NOT EXISTS `comprobantes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `fecha` datetime NOT NULL,
  `tipo` varchar(50) NOT NULL,
  `monto` int(11) NOT NULL,
  `img` LONGTEXT NOT NULL,
  `extension` varchar(50) NOT NULL,
  `id_estudiante` int(11) NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`),
  KEY `id_estudiante` (`id_estudiante`),
  CONSTRAINT `FK_comprobantes_estudiantes` FOREIGN KEY (`id_estudiante`) REFERENCES `estudiantes` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Volcando datos para la tabla egresados.comprobantes: ~4 rows (aproximadamente)
REPLACE INTO `comprobantes` (`id`, `fecha`, `tipo`, `monto`, `img`,`extension`, `id_estudiante`) VALUES
	(1, '2023-05-15 00:00:00', 'Arancel', 200000, 'aa.png', 'png',1),
	(2, '2023-05-15 18:26:19', 'Matricula', 200000, 'aa.png', 'png',1),
	(3, '2023-05-15 00:00:00', 'Arancel', 200000, 'aa.png', 'png',2),
	(4, '2023-05-15 18:28:29', 'Arancel', 250000, 'aa.png', 'png',3);

-- Volcando estructura para tabla egresados.estudiantes
CREATE TABLE IF NOT EXISTS `estudiantes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_usuario` int(11) NOT NULL,
  `rut` varchar(50) NOT NULL,
  `programa` varchar(50) NOT NULL,
  `carrera` varchar(50) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id_usuario` (`id_usuario`),
  CONSTRAINT `FK_estudiantes_usuarios` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Volcando datos para la tabla egresados.estudiantes: ~3 rows (aproximadamente)
REPLACE INTO `estudiantes` (`id`, `id_usuario`, `rut`, `programa`, `carrera`) VALUES
	(1, 1, '17283', 'magister', 'Ingenieria Civil Informatica'),
	(2, 2, '201443', 'magister', 'Ingenieria Civil Informatica'),
	(3, 3, '20142', 'magister', 'Ingenieria Civil Informatica');

-- Volcando estructura para tabla egresados.personal_administrativo
CREATE TABLE IF NOT EXISTS `personal_administrativo` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `cargo` varchar(50) NOT NULL DEFAULT '0',
  `id_usuario` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_personal_administrativo_usuarios` (`id_usuario`),
  CONSTRAINT `FK_personal_administrativo_usuarios` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Volcando datos para la tabla egresados.personal_administrativo: ~2 rows (aproximadamente)
REPLACE INTO `personal_administrativo` (`id`, `cargo`, `id_usuario`) VALUES
	(1, 'secretaria', 4),
	(2, 'director de programa', 5);

-- Volcando estructura para tabla egresados.usuarios
CREATE TABLE IF NOT EXISTS `usuarios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) DEFAULT NULL,
  `apellido` varchar(50) DEFAULT NULL,
  `rol` varchar(50) DEFAULT NULL,
  -- `password` varchar(50) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Volcando datos para la tabla egresados.usuarios: ~5 rows (aproximadamente)
-- REPLACE INTO `usuarios` (`id`, `nombre`, `apellido`, `password`, `email`) VALUES
-- 	(1, 'matias', 'martinez', '123413', 'matias.martinez@correo.cl'),
-- 	(2, 'juan', 'manriquez', '12341', 'juan@corre.cl'),
-- 	(3, 'sebastian', 'paredes', '123455532', 'sebastian@correo.cl'),
-- 	(4, 'yannete', 'muñoz', 'ghtd', 'yannete@secretaria.cl'),
-- 	(5, 'mathew', 'vernier', 'gjja133', 'mathew@administrativo.cl');

REPLACE INTO `usuarios` (`id`, `nombre`, `apellido`, `rol`,`email`) VALUES
	(1, 'matias', 'martinez', 'estudiante','matias.martinez@correo.cl'),
	(2, 'juan', 'manriquez', 'estudiante','juan@corre.cl'),
	(3, 'sebastian', 'paredes','estudiante', 'sebastian@correo.cl'),
	(4, 'yannete', 'muñoz', 'admin','yannete@secretaria.cl'),
	(5, 'mathew', 'vernier', 'admin','mathew@administrativo.cl');

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;