package gps.s3.correctingtool.dto;

import gps.s3.correctingtool.entity.ExamItem;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

public class TextGradingAdvice {

    private Integer suggestedScore;
    private Set<Integer> matchingWordPositions;
    private ExamItem examItem;
    private List<String> feedback = new ArrayList<>();

    public TextGradingAdvice() {
        matchingWordPositions = new HashSet<>();
    }

    public Integer getSuggestedScore() {
        return suggestedScore;
    }

    public boolean hasSuggestedScore()
    {
        return suggestedScore != null;
    }

    public TextGradingAdvice setSuggestedScore(Integer suggestedScore) {

        if(suggestedScore < 0 || suggestedScore > 5)
            throw new IllegalArgumentException("UserScore must be in the 0 to 5 range!");

        this.suggestedScore = suggestedScore;
        return this;
    }

    public Set<Integer> getMatchingWordPositions() {
        return matchingWordPositions;
    }

    public TextGradingAdvice setMatchingWordPositions(Set<Integer> matchingWordPositions) {
        this.matchingWordPositions = matchingWordPositions;
        return this;
    }

    public ExamItem getExamItem() {
        return examItem;
    }

    public TextGradingAdvice setExamItem(ExamItem examItem) {
        this.examItem = examItem;
        return this;
    }

    public TextGradingAdvice addFeedback(String text)
    {
        this.feedback.add(text);
        return this;
    }

    public List<String> getFeedback() {
        return feedback;
    }

    public TextGradingAdvice setFeedback(List<String> feedback) {
        this.feedback = feedback;
        return this;
    }
}
