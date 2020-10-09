SET UNIQUE_CHECKS=0;
SET FOREIGN_KEY_CHECKS=0;

INSERT INTO gradest.exam (id, student_name, status, examiner_id) VALUES (1, 'John', 1, 1);

INSERT INTO gradest.exam_item (exam_id, question_id, text_answer, mp_answer, graded_correct) VALUES (1, 1, null, 3, null);
INSERT INTO gradest.exam_item (exam_id, question_id, text_answer, mp_answer, graded_correct) VALUES (1, 2, null, 7, null);

INSERT INTO gradest.exam_status (id, title) VALUES (1, 'Awaiting Assignment');
INSERT INTO gradest.exam_status (id, title) VALUES (2, 'Not graded');
INSERT INTO gradest.exam_status (id, title) VALUES (3, 'Grading in progress');
INSERT INTO gradest.exam_status (id, title) VALUES (4, 'Graded');

INSERT INTO gradest.mp_answer (id, question_id, answer_text, is_correct) VALUES (1, 1, 'Berlijn', 1);
INSERT INTO gradest.mp_answer (id, question_id, answer_text, is_correct) VALUES (2, 1, 'Praag', 0);
INSERT INTO gradest.mp_answer (id, question_id, answer_text, is_correct) VALUES (3, 1, 'Rome', 0);
INSERT INTO gradest.mp_answer (id, question_id, answer_text, is_correct) VALUES (4, 1, 'Krakau', 0);
INSERT INTO gradest.mp_answer (id, question_id, answer_text, is_correct) VALUES (5, 2, 'Bot', 0);
INSERT INTO gradest.mp_answer (id, question_id, answer_text, is_correct) VALUES (6, 2, 'Nagel', 0);
INSERT INTO gradest.mp_answer (id, question_id, answer_text, is_correct) VALUES (7, 2, 'Kraakbeen', 0);
INSERT INTO gradest.mp_answer (id, question_id, answer_text, is_correct) VALUES (8, 2, 'Tandglazuur', 1);

INSERT INTO gradest.question (id, question_text, question_type) VALUES (1, 'Wat is de hoofdstad van Duitsland?', 1);
INSERT INTO gradest.question (id, question_text, question_type) VALUES (2, 'Wat is het hardste materiaal van het menselijk lichaam?', 1);

INSERT INTO gradest.question_type (id, name) VALUES (1, 'multiple-choice');
INSERT INTO gradest.question_type (id, name) VALUES (2, 'text-input');

INSERT INTO gradest.role (id, title) VALUES (1, 'Admin');

INSERT INTO gradest.user (id, username, password_hash, register_date, last_login) VALUES (1, 'Admin', '$2a$10$o20qgZqCXBqUxfogcLQgEO.JZfDBdpjQb2cVPxtqAYjyrqIydyHsa', '2020-10-09 02:49:51', null);

INSERT INTO gradest.user_has_role (role_id, user_id) VALUES (1, 1);

SET UNIQUE_CHECKS=1;
SET FOREIGN_KEY_CHECKS=1;