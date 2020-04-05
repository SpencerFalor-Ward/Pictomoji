DROP DATABASE IF EXISTS `emojiDB`;

CREATE DATABASE `emojiDB`;

USE `emojiDB`;

CREATE TABLE [IF NOT EXISTS] `emojis` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `name` TEXT NOT NULL,
    `UTCCode` TEXT NOT NULL,
    `category` TEXT,
    PRIMARY KEY(`id`)
);