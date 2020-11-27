package gps.s3.correctingtool.services;

import gps.s3.correctingtool.dto.TextGradingAdvice;
import gps.s3.correctingtool.exam.ExamItem;
import gps.s3.correctingtool.exam.IExamItemRepo;
import gps.s3.correctingtool.exam.Question;
import gps.s3.correctingtool.util.StringUtils;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.Objects;

@Service
@Slf4j
public class TextGradingService {

    private final IExamItemRepo repo;

    public TextGradingService(IExamItemRepo repo) {
        this.repo = repo;
    }

    public TextGradingAdvice getGradingAdvice(ExamItem item)
    {
        Objects.requireNonNull(item);
        var advice = new TextGradingAdvice().setExamItem(item);

        if (item.getQuestion().getType() != Question.TYPE_TEXT_INPUT)
            throw new IllegalStateException("Invalid question type");

        String studentAnswer = item.getTextAnswer();
        String realAnswer = item.getQuestion().getTextAnswer().getValue();

        if(studentAnswer == null || studentAnswer.isBlank())
            throw new IllegalStateException("Unable to grade question with empty answer!");

        String[] studentAnswerWords = studentAnswer.split("\\s+");
        String[] correctWords = realAnswer.split("\\s+");

        for(int i = 0; i < studentAnswerWords.length; i++)
        {
            String word = studentAnswerWords[i];

            //If the word is found in the correct answer's list of words, add its index to the list of matches
            if(Arrays.stream(correctWords).anyMatch(w -> StringUtils.compareWords(w, word)))
                advice.getMatchingWordPositions().add(i);
        }

        var questionHistory = repo.findExamItemByQuestionId(item.getQuestionId());

        //Look for identical answers to this question that have already been graded
        var exactMatch = questionHistory
                .stream()
                .filter(ExamItem::isGraded)
                .filter(q -> q.getExamId() != item.getExamId())
                .filter(q -> q.getTextAnswer().equalsIgnoreCase(item.getTextAnswer()))
                .findFirst();


        if(exactMatch.isPresent()) //If this same answer has been submitted before, return that score instead
            return advice.setSuggestedScore(exactMatch.get().getScore());

        if(advice.getMatchingWordPositions().isEmpty()) //If no words match, return score of 0
            return advice.setSuggestedScore(0);

        log.info("The given answer by the student is {}", studentAnswer);
        log.info("The correct answer in the database is {}", realAnswer);
        log.info("Found {} matches out of {}", advice.getMatchingWordPositions().size(),  correctWords.length);

        //Get score out of 100
        int score = 100 / (correctWords.length / advice.getMatchingWordPositions().size());
        log.info("Score out of 100 = {}", score);

        score = score / 20; //make it 0-5 range
        log.info("ranged = {}", score / 20);

        return advice.setSuggestedScore(score);
    }

}
