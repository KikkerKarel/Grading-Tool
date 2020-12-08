package gps.s3.correctingtool.dto;

import gps.s3.correctingtool.entity.ExamItem;
import gps.s3.correctingtool.util.StringUtils;
import lombok.Getter;
import lombok.extern.slf4j.Slf4j;

import java.util.Collection;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Slf4j
@Getter
public class SummaryAdvice {

    private final Integer suggestedScore;
    private final Set<Integer> matchingWordPositions;
    private final ExamItem examItem;
    private final List<String> feedback;

    public SummaryAdvice(ExamItem item, List<TextGradingAdvice> advices)
    {
        var studentAnswer = item.getStudentTextAnswer();
        var correctAnswer = item.getQuestion().getCorrectAnswer().getText();

        this.examItem = item;
        this.matchingWordPositions = StringUtils.getMatchingPositions(correctAnswer, studentAnswer);

        //Gather stats about the amount of graders, avg score
        var stats = advices.stream()
                .mapToInt(TextGradingAdvice::getSuggestedScore)
                .summaryStatistics();

        //Combine collective feedback lists to a single list
        this.feedback = advices.stream()
                .map(TextGradingAdvice::getFeedback)
                .flatMap(Collection::stream)
                .collect(Collectors.toList());

        this.suggestedScore = (int) stats.getAverage();

        log.info("Generated summary advice collected from {} graders\n" +
                "Average score: {}, highest: {}, lowest: {}", stats.getCount(), stats.getAverage(), stats.getMax(), stats.getMin());

    }
}
