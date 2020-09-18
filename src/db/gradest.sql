-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

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
  `id` INT NOT NULL,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `gradest`.`question`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `gradest`.`question` (
  `id` INT NOT NULL,
  `question_text` VARCHAR(512) NOT NULL,
  `question_type` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_question_question_type1_idx` (`question_type` ASC) VISIBLE,
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
  `question_id` INT NOT NULL,
  `answer_text` VARCHAR(512) NOT NULL,
  `is_correct` TINYINT NOT NULL,
  INDEX `fk_table1_question_idx` (`question_id` ASC) VISIBLE,
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
  INDEX `fk_table2_question1_idx` (`question_id` ASC) VISIBLE,
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
  `id` INT NOT NULL,
  `title` VARCHAR(16) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `gradest`.`user_has_role`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `gradest`.`user_has_role` (
  `role_id` INT NOT NULL,
  `user_id` INT NOT NULL,
  INDEX `fk_user_has_role_role1_idx` (`role_id` ASC) VISIBLE,
  INDEX `fk_user_has_role_user1_idx` (`user_id` ASC) VISIBLE,
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
  `id` INT NOT NULL,
  `title` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `gradest`.`exam`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `gradest`.`exam` (
  `id` INT NOT NULL,
  `student_name` VARCHAR(45) NOT NULL DEFAULT 'UNKNOWN',
  `status` INT NOT NULL,
  `examiner_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_exam_exam_status1_idx` (`status` ASC) VISIBLE,
  INDEX `fk_exam_user1_idx` (`examiner_id` ASC) VISIBLE,
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
  INDEX `fk_exam_questions_exam1_idx` (`exam_id` ASC) VISIBLE,
  INDEX `fk_exam_questions_question1_idx` (`question_id` ASC) VISIBLE,
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


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
