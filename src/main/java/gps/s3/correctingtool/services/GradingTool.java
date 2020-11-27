package gps.s3.correctingtool.services;

import gps.s3.correctingtool.exam.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class GradingTool {
    @Autowired
    IExamRepo repo;

    public Exam gradeMcExam (Exam exam){
        for (ExamItem examItem : exam.getItems()){
            Question question = examItem.getQuestion();

            if (question.getType() != 1){
                continue;
            }

            MultipleChoiceAnswer correct = question.getChoices().stream()
                .filter(MultipleChoiceAnswer::isCorrect).findFirst().get();

            examItem.setGradedCorrect(examItem.getMpAnswer() == correct.getId());
        }
        repo.save(exam);
        return exam;
    }
}
