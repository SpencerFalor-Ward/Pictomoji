DROP DATABASE if EXISTS `questionsDB`;

CREATE DATABASE `questionsDB`;

USE `questionsDB`;

CREATE TABLE [IF NOT EXISTS] `questions` (
    `id` INT AUTO_INCREMENT NOT NULL,
    `question` TEXT NOT NULL,
    'answer' TEXT NOT NULL,
    PRIMARY KEY (`id`)
); 