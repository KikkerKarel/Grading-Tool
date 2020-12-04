SET UNIQUE_CHECKS=0;
SET FOREIGN_KEY_CHECKS=0;


/*
    Drop data
*/


DELETE FROM gradest.user;
DELETE FROM gradest.exam;
DELETE FROM gradest.question;
DELETE FROM gradest.choice_answer;
DELETE FROM gradest.correct_answer;
DELETE FROM gradest.exam_item;


/*
    Change auto increment value
*/


ALTER TABLE gradest.user AUTO_INCREMENT = 1;
ALTER TABLE gradest.exam AUTO_INCREMENT = 1;
ALTER TABLE gradest.question AUTO_INCREMENT = 1;
ALTER TABLE gradest.choice_answer AUTO_INCREMENT = 1;
ALTER TABLE gradest.correct_answer AUTO_INCREMENT = 1;


/*
    Users
*/

INSERT INTO gradest.user (username, password, register_date, last_login) VALUES ('Admin', '$2a$10$/kTasUe4JFibs20IbQcSLOZh.1uxHid96INBYFTXRuCr54F5uiXfW', '2020-10-09 02:49:51', null);

INSERT INTO gradest.user (username, password, register_date, last_login) VALUES ('Youssef', '$2a$10$/kTasUe4JFibs20IbQcSLOZh.1uxHid96INBYFTXRuCr54F5uiXfW', '2020-10-09 02:49:51', null);
INSERT INTO gradest.user (username, password, register_date, last_login) VALUES ('Jens', '$2a$10$/kTasUe4JFibs20IbQcSLOZh.1uxHid96INBYFTXRuCr54F5uiXfW', '2020-10-09 02:49:51', null);
INSERT INTO gradest.user (username, password, register_date, last_login) VALUES ('Servi', '$2a$10$/kTasUe4JFibs20IbQcSLOZh.1uxHid96INBYFTXRuCr54F5uiXfW', '2020-10-09 02:49:51', null);
INSERT INTO gradest.user (username, password, register_date, last_login) VALUES ('Nahir', '$2a$10$/kTasUe4JFibs20IbQcSLOZh.1uxHid96INBYFTXRuCr54F5uiXfW', '2020-10-09 02:49:51', null);
INSERT INTO gradest.user (username, password, register_date, last_login) VALUES ('Rachid', '$2a$10$/kTasUe4JFibs20IbQcSLOZh.1uxHid96INBYFTXRuCr54F5uiXfW', '2020-10-09 02:49:51', null);
INSERT INTO gradest.user (username, password, register_date, last_login) VALUES ('Sem', '$2a$10$/kTasUe4JFibs20IbQcSLOZh.1uxHid96INBYFTXRuCr54F5uiXfW', '2020-10-09 02:49:51', null);


/*
    Exams
*/


INSERT INTO gradest.exam (student_name, status, examiner_id) VALUES ('Petra', 'NOT_GRADED', 2);
INSERT INTO gradest.exam (student_name, status, examiner_id) VALUES ('Mohammed', 'NOT_GRADED', 3);
INSERT INTO gradest.exam (student_name, status, examiner_id) VALUES ('Senna', 'NOT_GRADED', 4);
INSERT INTO gradest.exam (student_name, status, examiner_id) VALUES ('Jaap', 'NOT_GRADED', 5);
INSERT INTO gradest.exam (student_name, status, examiner_id) VALUES ('Mark', 'NOT_GRADED', 6);
INSERT INTO gradest.exam (student_name, status, examiner_id) VALUES ('Samantha', 'NOT_GRADED', 7);


/*
    Questions
*/


INSERT INTO gradest.question (text, type) VALUES ('Wat is de hoofdstad van Duitsland?', 'CHOICE');
INSERT INTO gradest.question (text, type) VALUES ('Wat is het hardste materiaal van het menselijk lichaam?', 'CHOICE');

INSERT INTO gradest.question (text, type) VALUES ('Wat is de hoofdstad van Duitsland?', 'TEXT');
INSERT INTO gradest.question (text, type) VALUES ('Wat is het hardste materiaal van het menselijk lichaam?', 'TEXT');


/*
    Choice answers
*/


INSERT INTO gradest.choice_answer (question_id, text, is_correct) VALUES (1, 'Berlijn', 1);
INSERT INTO gradest.choice_answer (question_id, text, is_correct) VALUES (1, 'Praag', 0);
INSERT INTO gradest.choice_answer (question_id, text, is_correct) VALUES (1, 'Rome', 0);
INSERT INTO gradest.choice_answer (question_id, text, is_correct) VALUES (1, 'Krakau', 0);

INSERT INTO gradest.choice_answer (question_id, text, is_correct) VALUES (2, 'Bot', 0);
INSERT INTO gradest.choice_answer (question_id, text, is_correct) VALUES (2, 'Nagel', 0);
INSERT INTO gradest.choice_answer (question_id, text, is_correct) VALUES (2, 'Kraakbeen', 0);
INSERT INTO gradest.choice_answer (question_id, text, is_correct) VALUES (2, 'Tandglazuur', 1);


/*
    Correct answers
*/


INSERT INTO gradest.correct_answer (question_id, text) VALUES (3, 'Berlijn');
INSERT INTO gradest.correct_answer (question_id, text) VALUES (4, 'Tandglazuur');


/*
    Exam items
*/


/* Youssef */


INSERT INTO gradest.exam_item (exam_id, question_id, student_text_answer, student_choice_answer, graded_correct) VALUES (1, 1, null, 1, null);
INSERT INTO gradest.exam_item (exam_id, question_id, student_text_answer, student_choice_answer, graded_correct) VALUES (1, 2, null, 5, null);
INSERT INTO gradest.exam_item (exam_id, question_id, student_text_answer, student_choice_answer, graded_correct) VALUES (1, 3, 'Berlin', null, null);
INSERT INTO gradest.exam_item (exam_id, question_id, student_text_answer, student_choice_answer, graded_correct) VALUES (1, 4, 'Bot', null, null);


/* Jens */


INSERT INTO gradest.exam_item (exam_id, question_id, student_text_answer, student_choice_answer, graded_correct) VALUES (2, 1, null, 1, null);
INSERT INTO gradest.exam_item (exam_id, question_id, student_text_answer, student_choice_answer, graded_correct) VALUES (2, 2, null, 5, null);
INSERT INTO gradest.exam_item (exam_id, question_id, student_text_answer, student_choice_answer, graded_correct) VALUES (2, 3, 'Berlin', null, null);
INSERT INTO gradest.exam_item (exam_id, question_id, student_text_answer, student_choice_answer, graded_correct) VALUES (2, 4, 'Bot', null, null);


/* Servi */


INSERT INTO gradest.exam_item (exam_id, question_id, student_text_answer, student_choice_answer, graded_correct) VALUES (3, 1, null, 1, null);
INSERT INTO gradest.exam_item (exam_id, question_id, student_text_answer, student_choice_answer, graded_correct) VALUES (3, 2, null, 5, null);
INSERT INTO gradest.exam_item (exam_id, question_id, student_text_answer, student_choice_answer, graded_correct) VALUES (3, 3, 'Berlin', null, null);
INSERT INTO gradest.exam_item (exam_id, question_id, student_text_answer, student_choice_answer, graded_correct) VALUES (3, 4, 'Bot', null, null);


/* Nahir */


INSERT INTO gradest.exam_item (exam_id, question_id, student_text_answer, student_choice_answer, graded_correct) VALUES (4, 1, null, 1, null);
INSERT INTO gradest.exam_item (exam_id, question_id, student_text_answer, student_choice_answer, graded_correct) VALUES (4, 2, null, 5, null);
INSERT INTO gradest.exam_item (exam_id, question_id, student_text_answer, student_choice_answer, graded_correct) VALUES (4, 3, 'Berlin', null, null);
INSERT INTO gradest.exam_item (exam_id, question_id, student_text_answer, student_choice_answer, graded_correct) VALUES (4, 4, 'Bot', null, null);


/* Rachid */


INSERT INTO gradest.exam_item (exam_id, question_id, student_text_answer, student_choice_answer, graded_correct) VALUES (5, 1, null, 1, null);
INSERT INTO gradest.exam_item (exam_id, question_id, student_text_answer, student_choice_answer, graded_correct) VALUES (5, 2, null, 5, null);
INSERT INTO gradest.exam_item (exam_id, question_id, student_text_answer, student_choice_answer, graded_correct) VALUES (5, 3, 'Berlin', null, null);
INSERT INTO gradest.exam_item (exam_id, question_id, student_text_answer, student_choice_answer, graded_correct) VALUES (5, 4, 'Bot', null, null);


/* Sem */


INSERT INTO gradest.exam_item (exam_id, question_id, student_text_answer, student_choice_answer, graded_correct) VALUES (6, 1, null, 1, null);
INSERT INTO gradest.exam_item (exam_id, question_id, student_text_answer, student_choice_answer, graded_correct) VALUES (6, 2, null, 5, null);
INSERT INTO gradest.exam_item (exam_id, question_id, student_text_answer, student_choice_answer, graded_correct) VALUES (6, 3, 'Berlin', null, null);
INSERT INTO gradest.exam_item (exam_id, question_id, student_text_answer, student_choice_answer, graded_correct) VALUES (6, 4, 'Bot', null, null);

SET UNIQUE_CHECKS=1;
SET FOREIGN_KEY_CHECKS=1;