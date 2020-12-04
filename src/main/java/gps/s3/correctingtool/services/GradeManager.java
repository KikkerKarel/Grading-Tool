package gps.s3.correctingtool.services;

import gps.s3.correctingtool.dto.TextGradingAdvice;
import gps.s3.correctingtool.entity.ExamItem;
import gps.s3.correctingtool.util.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.HashSet;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class GradeManager {

    @Autowired
    private List<? extends GenericGrader> gradingStrategies;

    public GenericGrader getGrader(ExamItem item)
    {
        var settings = item.getQuestion().getSettings();

        return gradingStrategies.stream()
                .filter(s -> s.canGrade(settings))
                .findFirst()
                .orElseThrow();
    }

    public List<GenericGrader> getAllGraders(ExamItem item)
    {
        var settings = item.getQuestion().getSettings();

        return gradingStrategies.stream()
                .filter(s -> s.canGrade(settings))
                .collect(Collectors.toList());
    }

    public TextGradingAdvice getSummaryAdvice(ExamItem item)
    {
        //TODO: Combine all the Grader advices into 1 object
        return new TextGradingAdvice()
                .setMatchingWordPositions(getMatchingWords(item));
    }

    private HashSet<Integer> getMatchingWords(ExamItem item)
    {
        var matches = new HashSet<Integer>();
        String studentAnswer = item.getStudentTextAnswer();
        String realAnswer = item.getQuestion().getCorrectAnswer().getText();

        if(studentAnswer == null || studentAnswer.isBlank())
            throw new IllegalStateException("Unable to grade question with empty answer!");

        String[] studentAnswerWords = studentAnswer.split("\\s+");
        String[] correctWords = realAnswer.split("\\s+");

        for(int i = 0; i < studentAnswerWords.length; i++)
        {
            String word = studentAnswerWords[i];

            //If the word is found in the correct answer's list of words, add its index to the list of matches
            if(Arrays.stream(correctWords).anyMatch(w -> StringUtils.compareWords(w, word)))
                matches.add(i);
        }

        return matches;
    }

}
