package gps.s3.correctingtool.services;

import gps.s3.correctingtool.dto.TextGradingAdvice;
import gps.s3.correctingtool.entity.ExamItem;
import gps.s3.correctingtool.entity.QuestionSettings;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class GrammarGrader extends GenericGrader {


    @Override
    public boolean canGrade(QuestionSettings settings) {
        return settings != null && settings.isCheckGrammar();
    }

    @Override
    public TextGradingAdvice getAdvice(ExamItem item) {
        var advice = new TextGradingAdvice().setExamItem(item);
        var words = item.getQuestion().getCorrectAnswer().getText().split(" ");
        var capitalWords = Arrays.asList(words).stream()
                .filter(this::startsWithCapital).collect(Collectors.toList());

        var answer = item.getStudentTextAnswer().split(" ");
        var mistakes= Arrays.asList(answer).stream()
                .filter(v -> breaksRule(v, capitalWords)).collect(Collectors.toList());

        if (!mistakes.isEmpty())
        {
            String feedback = "De volgende woorden missen een hoofdletter: " + String.join(", ", mistakes);
            advice.addFeedback(feedback);
        }
        return advice;
    }

    private boolean startsWithCapital(String word)
    {
        var character= word.charAt(0);
        return Character.isUpperCase(character);
    }

    private boolean breaksRule(String word, List<String> capitalWords)
    {
        if (startsWithCapital(word))
        {
            return false;
        }
        return capitalWords.stream().anyMatch(s -> s.equalsIgnoreCase(word));
    }
}