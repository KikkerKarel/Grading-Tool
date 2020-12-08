package gps.s3.correctingtool.services;

import gps.s3.correctingtool.dto.SummaryAdvice;
import gps.s3.correctingtool.entity.ExamItem;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@Slf4j
public class TextGradeManager {

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

    public SummaryAdvice getSummaryAdvice(ExamItem item)
    {
        //Get all graders, collect their advice in a list
        var advices = getAllGraders(item)
                .stream().map(g -> g.getAdvice(item))
                .collect(Collectors.toList());

        return new SummaryAdvice(item, advices);
    }

}
