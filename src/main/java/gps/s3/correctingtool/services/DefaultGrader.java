package gps.s3.correctingtool.services;

import gps.s3.correctingtool.dto.TextGradingAdvice;
import gps.s3.correctingtool.entity.ExamItem;
import gps.s3.correctingtool.entity.QuestionSettings;
import gps.s3.correctingtool.entity.QuestionType;
import gps.s3.correctingtool.repo.IExamItemRepo;
import gps.s3.correctingtool.util.StringUtils;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@Slf4j
public class DefaultGrader extends GenericGrader {

    @Autowired
    private IExamItemRepo repo;

    @Override
    public boolean canGrade(QuestionSettings settings) {
        return true;
    }

    @Override
    public TextGradingAdvice getAdvice(ExamItem item) {

        var advice = new TextGradingAdvice().setExamItem(item);

        if (item.getQuestion().getType() != QuestionType.TEXT)
            throw new IllegalStateException("Invalid question type");

        String studentAnswer = item.getStudentTextAnswer();
        String realAnswer = item.getQuestion().getCorrectAnswer().getText();

        String[] correctWords = realAnswer.split("\\s+");
        var matchingWords = StringUtils.getMatchingPositions(studentAnswer, realAnswer);

        var questionHistory = repo.findExamItemByQuestionId(item.getQuestionId());

        //Look for identical answers to this question that have already been graded
        var exactMatch = questionHistory
                .stream()
                .filter(ExamItem::isGraded)
                .filter(q -> q.getExamId() != item.getExamId())
                .filter(q -> q.getStudentTextAnswer().equalsIgnoreCase(item.getStudentTextAnswer()))
                .findFirst();


        if(exactMatch.isPresent()) //If this same answer has been submitted before, return that score instead
            return advice.addFeedback("Dit exacte antwoord is ooit eerder beoordeeld").setSuggestedScore(exactMatch.get().getGradedScore());

        if(matchingWords.isEmpty()) //If no words match, return score of 0
            return advice.addFeedback("Geen overeenkomende woorden gevonden!").setSuggestedScore(0);

        log.info("The given answer by the student is {}", studentAnswer);
        log.info("The correct answer in the database is {}", realAnswer);
        log.info("Found {} matches out of {}", matchingWords.size(),  correctWords.length);

        //Get score out of 100
        int score = 100 / (correctWords.length / matchingWords.size());
        log.info("Score out of 100 = {}", score);

        score = score / 20; //make it 0-5 range
        log.info("ranged = {}", score);

        return advice.setSuggestedScore(score);
    }
}
