package gps.s3.correctingtool.services;

import gps.s3.correctingtool.dto.TextGradingAdvice;
import gps.s3.correctingtool.entity.ExamItem;
import gps.s3.correctingtool.entity.QuestionSettings;

public abstract class GenericGrader {

    public abstract boolean canGrade(QuestionSettings settings);

    public abstract TextGradingAdvice getAdvice(ExamItem item);

}
