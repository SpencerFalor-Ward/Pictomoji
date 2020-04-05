DROP DATABASE IF EXISTS `userDB`;

CREATE DATABASE `userDB`;

USE `userDB`;

CREATE TABLE [IF NOT EXISTS] `users` (
    `id` INT AUTO_INCREMENT NOT NULL,
    `name` VARCHAR(50) NOT NULL,
    `highScore` INT,
    `email` TEXT,
    PRIMARY KEY(`id`)
);
