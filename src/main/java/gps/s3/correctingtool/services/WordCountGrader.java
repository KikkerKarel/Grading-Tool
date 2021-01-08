package gps.s3.correctingtool.services;

import gps.s3.correctingtool.dto.TextGradingAdvice;
import gps.s3.correctingtool.entity.ExamItem;
import gps.s3.correctingtool.entity.QuestionSettings;
import org.springframework.stereotype.Service;

@Service
public class WordCountGrader extends GenericGrader {

    @Override
    public boolean canGrade(QuestionSettings settings) {
        return settings != null && settings.getMaxWords() > 0;
    }

    @Override
    public TextGradingAdvice getAdvice(ExamItem item) {
        var settings = item.getQuestion().getSettings();
        var advice = new TextGradingAdvice().setExamItem(item);

        if(item.getStudentTextAnswer().split("\\s+").length > settings.getMaxWords())
        {
            return advice.addFeedback("Woordenlimiet overschreden!");
        }
        else {
            return advice;
        }
    }
}
