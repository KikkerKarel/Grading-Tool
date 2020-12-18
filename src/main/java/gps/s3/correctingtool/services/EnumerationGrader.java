package gps.s3.correctingtool.services;

import gps.s3.correctingtool.dto.TextGradingAdvice;
import gps.s3.correctingtool.entity.ExamItem;
import gps.s3.correctingtool.entity.QuestionSettings;
import org.springframework.stereotype.Service;

@Service
public class EnumerationGrader extends GenericGrader {

    @Override
    public boolean canGrade(QuestionSettings settings) {
        return settings != null && settings.isCheckEnumeration();
    }

    @Override
    public TextGradingAdvice getAdvice(ExamItem item) {
        var advice = new TextGradingAdvice();

        var studentItems = item.getStudentTextAnswer().split("[,]");
        var correctItems = item.getQuestion().getCorrectAnswer().getText().split("[,]");

        int amountCorrect = 0;
        for (int i = 0; i < correctItems.length; i++){
            if(correctItems[i].equalsIgnoreCase(studentItems[i])){
                amountCorrect++;
            }
        }

        double score = (double) amountCorrect / correctItems.length * 5;

        int finalScore = (int) Math.ceil(score);

        if(studentItems.length > correctItems.length){
            advice.addFeedback("De invuller heeft het aantal antwoorden overstreden.");
        }

        advice.addFeedback("De invuller heeft "+ amountCorrect + " van de " + correctItems.length + " antwoorden goed.");
        advice.setSuggestedScore(finalScore);

        return advice;
    }
}
