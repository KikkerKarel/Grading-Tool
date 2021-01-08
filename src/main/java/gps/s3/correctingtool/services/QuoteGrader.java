package gps.s3.correctingtool.services;

import gps.s3.correctingtool.dto.TextGradingAdvice;
import gps.s3.correctingtool.entity.ExamItem;
import gps.s3.correctingtool.entity.QuestionSettings;
import org.springframework.stereotype.Service;

@Service
public class QuoteGrader extends GenericGrader{

    @Override
    public boolean canGrade(QuestionSettings settings) {
        return settings != null && settings.isCheckQuote();
    }

    @Override
    public TextGradingAdvice getAdvice(ExamItem item) {
        var settings = item.getQuestion().getSettings();
        var advice = new TextGradingAdvice().setExamItem(item);
        var answer = item.getStudentTextAnswer();
        var correct = item.getQuestion().getCorrectAnswer().getText();

        if(!answer.equalsIgnoreCase(correct) ){
        //if(!answer.equals(correct) ){
        //if(!answer.equals(correct) && settings.isCheckGrammar() ){
                 advice.addFeedback("Citaatregel: Dit antwoord is geen exact citaat.");
        }

        return advice;
    }
}
