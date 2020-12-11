package gps.s3.correctingtool.services;

import gps.s3.correctingtool.entity.*;
import gps.s3.correctingtool.repo.IExamRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ChoiceAutoGrader {
    @Autowired
    IExamRepo repo;

    public Exam gradeMcExam (Exam exam){
        for (ExamItem examItem : exam.getItems()){
            Question question = examItem.getQuestion();

            if (question.getType() != QuestionType.CHOICE){
                continue;
            }

            ChoiceAnswer correct = question.getChoices().stream()
                .filter(ChoiceAnswer::isCorrect).findFirst().get();

            examItem.setGradedCorrect(examItem.getStudentChoiceAnswer() == correct.getId());
            int score = examItem.getGradedCorrect() ? 5 : 0;
            examItem.setGradedScore(score);
        }
        repo.save(exam);
        return exam;
    }
}
