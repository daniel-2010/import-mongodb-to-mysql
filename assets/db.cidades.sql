-- --------------------------------------------------------
-- Servidor:                     127.0.0.1
-- Versão do servidor:           5.5.27 - MySQL Community Server (GPL)
-- OS do Servidor:               Win32
-- HeidiSQL Versão:              10.2.0.5599
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;

-- Copiando estrutura para tabela mongodb-vs-mysql.cidades
CREATE TABLE IF NOT EXISTS `cidades` (
  `idCidade` int(11) NOT NULL AUTO_INCREMENT,
  `_id` varchar(50) DEFAULT NULL,
  `nome_cidade` varchar(80) DEFAULT NULL,
  `estados_cod_estado` varchar(50) DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`idCidade`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=latin1;

-- Copiando dados para a tabela mongodb-vs-mysql.cidades: ~9 rows (aproximadamente)
DELETE FROM `cidades`;
/*!40000 ALTER TABLE `cidades` DISABLE KEYS */;
INSERT INTO `cidades` (`idCidade`, `_id`, `nome_cidade`, `estados_cod_estado`, `createdAt`, `updatedAt`) VALUES
	(1, '5da106e98d3e062ad437ff1e', 'Muzambinho', '5da1057dc6690f29f89b4c2b', '2019-10-11 19:49:13', '2019-10-11 19:49:13'),
	(2, '5da1071b8d3e062ad437ff1f', 'Guaxupé', '5da1057dc6690f29f89b4c2b', '2019-10-11 19:50:03', '2019-10-11 19:50:03'),
	(3, '5da107208d3e062ad437ff20', 'Alterosa', '5da1057dc6690f29f89b4c2b', '2019-10-11 19:50:08', '2019-10-11 19:50:08'),
	(4, '5da107258d3e062ad437ff21', 'Monte Belo', '5da1057dc6690f29f89b4c2b', '2019-10-11 19:50:13', '2019-10-11 19:50:13'),
	(5, '5da1072c8d3e062ad437ff22', 'Nova Resende', '5da1057dc6690f29f89b4c2b', '2019-10-11 19:50:20', '2019-10-11 19:50:20'),
	(6, '5da107388d3e062ad437ff23', 'Juruaia', '5da1057dc6690f29f89b4c2b', '2019-10-11 19:50:32', '2019-10-11 19:50:32'),
	(7, '5da107418d3e062ad437ff24', 'Carmo do Rio Claro', '5da1057dc6690f29f89b4c2b', '2019-10-11 19:50:41', '2019-10-11 19:50:41'),
	(8, '5da1078a8d3e062ad437ff25', 'Areado', '5da1057dc6690f29f89b4c2b', '2019-10-11 19:51:54', '2019-10-11 19:51:54'),
	(9, '5da1078f8d3e062ad437ff26', 'Alfenas', '5da1057dc6690f29f89b4c2b', '2019-10-11 19:51:59', '2019-10-11 19:51:59');
/*!40000 ALTER TABLE `cidades` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
