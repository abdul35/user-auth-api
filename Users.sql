-- Adminer 4.8.1 MySQL 8.2.0 dump

SET NAMES utf8;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;
SET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';

SET NAMES utf8mb4;

DROP TABLE IF EXISTS `Users`;
CREATE TABLE `Users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `lastName` varchar(255) DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `sex` varchar(255) DEFAULT NULL,
  `photo` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `Users` (`id`, `name`, `lastName`, `email`, `password`, `sex`, `photo`, `createdAt`, `updatedAt`) VALUES
(1,	'GGWP',	NULL,	'we@gmail.com',	'$2b$10$/2SChtkXqw3u7BFQ/omiruF1FpDxhkemWBJibavXerjYaoH/vj6ce',	'male',	'1704846349778.Снимок экрана 2023-12-05 202214.png',	'2024-01-09 22:52:56',	'2024-01-10 00:25:49'),
(2,	'2131231c2',	NULL,	'we@g2mail.com',	'$2b$10$lallXET/27qvYRG0O7C1p.AwOrX8bx6r6WR6U069ZFCwumLytrKPa',	NULL,	NULL,	'2024-01-10 00:37:42',	'2024-01-10 00:37:42'),
(3,	'21312e1231c2',	NULL,	'wer12@g2mail.com',	'$2b$10$GmaWAp5fy3K6QbQe0zoy7OF6mmKgk1hvPDF7hZieWlV2oMB.v7Hf2',	NULL,	NULL,	'2024-01-10 00:37:46',	'2024-01-10 00:37:46'),
(4,	'gweg',	NULL,	'w1212er12@g2mail.com',	'$2b$10$njpXkOnm2k7DBrQ/aD3QV.1FUjv1sS5CZaoCo0oF/IOCYwrzsR3IG',	NULL,	NULL,	'2024-01-10 00:37:52',	'2024-01-10 00:37:52'),
(5,	'r21r12r12r',	NULL,	'wr12@g2mail.com',	'$2b$10$IBYwvG.vO2UdSc1yibuFLOQ952ZFjg1dsWPEuDsC/axsJtba59BRu',	NULL,	NULL,	'2024-01-10 00:37:57',	'2024-01-10 00:37:57'),
(6,	'r120-12r',	NULL,	'wr0-0@g2mail.com',	'$2b$10$5HINv6S71aOn6F8fb2KAn.QiPSUvXYaqzACre/dicnlheG8mbBqEm',	NULL,	NULL,	'2024-01-10 00:38:06',	'2024-01-10 00:38:06'),
(7,	'r22120-12r',	NULL,	'w2112r0-0@g2mail.com',	'$2b$10$4zJdfXsMbZPpHKDk6c9AieriXYwcFXI9zdCV7qNnQynqcR/kVMC/a',	NULL,	NULL,	'2024-01-10 00:38:11',	'2024-01-10 00:38:11'),
(8,	'r22rr120-12r',	NULL,	'rr-0@g2mail.com',	'$2b$10$ysPqn9EllkzKHqKezd1LXedSIHcj9cxm7Ioa1KSWhJMRS0P4reD/m',	NULL,	NULL,	'2024-01-10 00:38:15',	'2024-01-10 00:38:15'),
(9,	'r22rqqrr120-12r',	NULL,	'rr-021r@g2mail.com',	'$2b$10$WXeX75CCbgGpVwyH4nPsFeRyRRx/bbSv53mOfztLVb6gdbibYdHJO',	NULL,	NULL,	'2024-01-10 00:38:20',	'2024-01-10 00:38:20'),
(10,	'r21!!2rqqrr120-12r',	NULL,	'rr-2b2`021r@g2mail.com',	'$2b$10$tilmOU4pgMkU8KMgcXdqy.Xn8/o9woajVV9Ytv518uzmWcMnG1RgG',	NULL,	NULL,	'2024-01-10 00:38:45',	'2024-01-10 00:38:45'),
(11,	'r21!6++!2rqqrr120-12r',	NULL,	'++rr-2b2`021r@g2mail.com',	'$2b$10$DUBpyxflOBDAZlgQ/bad2eGxMJdS6hKmZzAfy23evkMMrBJZA3GBa',	NULL,	NULL,	'2024-01-10 00:38:59',	'2024-01-10 00:38:59'),
(12,	'r21!6++!2rqqrr120-212112r',	NULL,	'++rr-2b2`02112122r@g2mail.com',	'$2b$10$S8wjl1DeXJIgSvPWXej2mO8raP2EQJ.69VB9dty/n/gE1E21C9Lji',	NULL,	NULL,	'2024-01-10 00:39:06',	'2024-01-10 00:39:06'),
(13,	'vvvvvr21!6++!2rqqrr120-212112r',	NULL,	'vvvvv++rr-2b2`02112122r@g2mail.com',	'$2b$10$yBhDanvJYOp9CiauGcCdOe2C9D1nn6MfMHUrLVS9CibyZVKTWctkC',	NULL,	NULL,	'2024-01-10 00:39:11',	'2024-01-10 00:39:11');

-- 2024-01-10 01:07:45
