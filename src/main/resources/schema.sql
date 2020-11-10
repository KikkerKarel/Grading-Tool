-- MySQL Workbench Forward Engineering

SET UNIQUE_CHECKS=0;
SET FOREIGN_KEY_CHECKS=0;

-- -----------------------------------------------------
-- Schema gradest
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema gradest
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `gradest` DEFAULT CHARACTER SET utf8 ;
USE `gradest` ;

-- -----------------------------------------------------
-- Table `gradest`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `gradest`.`user` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(16) NOT NULL,
  `password_hash` VARCHAR(255) NOT NULL,
  `register_date` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `last_login` DATETIME NULL,
  PRIMARY KEY (`id`));


-- -----------------------------------------------------
-- Table `gradest`.`question_type`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `gradest`.`question_type` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `gradest`.`question`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `gradest`.`question` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `question_text` VARCHAR(512) NOT NULL,
  `question_type` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_question_question_type1_idx` (`question_type` ASC),
  CONSTRAINT `fk_question_question_type1`
    FOREIGN KEY (`question_type`)
    REFERENCES `gradest`.`question_type` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `gradest`.`mp_answer`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `gradest`.`mp_answer` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `question_id` INT NOT NULL,
  `answer_text` VARCHAR(512) NOT NULL,
  `is_correct` TINYINT NOT NULL,
  INDEX `fk_table1_question_idx` (`question_id` ASC),
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_table1_question`
    FOREIGN KEY (`question_id`)
    REFERENCES `gradest`.`question` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `gradest`.`text_answer`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `gradest`.`text_answer` (
  `question_id` INT NOT NULL,
  `answer_text` VARCHAR(512) NOT NULL,
  INDEX `fk_table2_question1_idx` (`question_id` ASC),
  CONSTRAINT `fk_table2_question1`
    FOREIGN KEY (`question_id`)
    REFERENCES `gradest`.`question` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `gradest`.`role`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `gradest`.`role` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(16) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `gradest`.`user_has_role`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `gradest`.`user_has_role` (
  `role_id` INT NOT NULL,
  `user_id` INT NOT NULL,
  INDEX `fk_user_has_role_role1_idx` (`role_id` ASC),
  INDEX `fk_user_has_role_user1_idx` (`user_id` ASC),
  CONSTRAINT `fk_user_has_role_role1`
    FOREIGN KEY (`role_id`)
    REFERENCES `gradest`.`role` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_user_has_role_user1`
    FOREIGN KEY (`user_id`)
    REFERENCES `gradest`.`user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `gradest`.`exam_status`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `gradest`.`exam_status` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `gradest`.`exam`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `gradest`.`exam` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `student_name` VARCHAR(45) NOT NULL DEFAULT 'UNKNOWN',
  `status` INT NOT NULL,
  `examiner_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_exam_exam_status1_idx` (`status` ASC),
  INDEX `fk_exam_user1_idx` (`examiner_id` ASC),
  CONSTRAINT `fk_exam_exam_status1`
    FOREIGN KEY (`status`)
    REFERENCES `gradest`.`exam_status` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_exam_user1`
    FOREIGN KEY (`examiner_id`)
    REFERENCES `gradest`.`user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `gradest`.`exam_item`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `gradest`.`exam_item` (
  `exam_id` INT NOT NULL,
  `question_id` INT NOT NULL,
  `text_answer` VARCHAR(512) NULL,
  `mp_answer` INT NULL,
  `graded_correct` TINYINT NULL,
  `graded_score` TINYINT(6) NULL,
  INDEX `fk_exam_questions_exam1_idx` (`exam_id` ASC),
  INDEX `fk_exam_questions_question1_idx` (`question_id` ASC),
  CONSTRAINT `fk_exam_questions_exam1`
    FOREIGN KEY (`exam_id`)
    REFERENCES `gradest`.`exam` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_exam_questions_question1`
    FOREIGN KEY (`question_id`)
    REFERENCES `gradest`.`question` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;



SET UNIQUE_CHECKS=1;
SET FOREIGN_KEY_CHECKS=1;