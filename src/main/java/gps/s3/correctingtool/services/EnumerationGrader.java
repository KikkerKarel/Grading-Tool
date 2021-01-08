package gps.s3.correctingtool.services;


import gps.s3.correctingtool.dto.TextGradingAdvice;
import gps.s3.correctingtool.entity.ExamItem;
import gps.s3.correctingtool.entity.QuestionSettings;
import org.springframework.stereotype.Service;

import java.util.Arrays;

@Service
public class EnumerationGrader extends GenericGrader {

    @Override
    public boolean canGrade(QuestionSettings settings) {return settings != null && settings.isCheckEnumeration();}

    @Override
    public TextGradingAdvice getAdvice(ExamItem item){
        var amountCorrect = 0;
        var advice = new TextGradingAdvice();
        var studentItems = item.getStudentTextAnswer().split("\\s*(-|=>|,|\\s)\\s*");
        var correctItems = Arrays.asList(item.getQuestion().getCorrectAnswer().getText().split("\\s*(=>|,|\\s)\\s*"));

        if(studentItems.length > correctItems.size()){
            for (int i = 0; i < correctItems.size() ;i++){
                if (correctItems.contains(studentItems[i])) {
                    amountCorrect++;
                    advice.addFeedback("de student heeft " + studentItems.length
                            + " opsommings items gegeven, terwijl het gevraagde aantal " + correctItems.size() + " was" );
                }
            }
        }
        else
        {
            for (String studentItem : studentItems) {
                if (correctItems.contains(studentItem)) {
                    amountCorrect++;
                }
            }
        }

        double score = (double)amountCorrect/correctItems.size() * 5;
        return advice.setSuggestedScore((int)score);
    }
}
