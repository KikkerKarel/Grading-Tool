package gps.s3.correctingtool.controller;

import gps.s3.correctingtool.exam.*;
import gps.s3.correctingtool.services.GradingTool;
import org.springframework.web.bind.annotation.*;
import java.util.Collection;

@RestController
@RequestMapping("/api/exams")
public class ExamController {

    private final IExamRepo repo;
    private final IExamItemRepo itemRepo;
    private final GradingTool gradingTool;

    public ExamController(IExamRepo repo, IExamItemRepo itemRepo, GradingTool gradingTool) {
        this.repo = repo;
        this.itemRepo = itemRepo;
        this.gradingTool = gradingTool;
    }

    @RequestMapping("/find/all")
    public Collection<Exam> findAllExams() {
        return repo.findAll();
    }

    @RequestMapping("/find/{id}")
    public Exam findById(@PathVariable("id") int id) {
        return repo.findById(id);
    }

    @RequestMapping("/examiner/{id}")
    public Collection<Exam> byExaminer(@PathVariable("id") int id) {
        return repo.findAllByExaminerId(id);
    }

    @RequestMapping("/question/{id}")
    public Collection<ExamItem> byQuestion(@PathVariable("id") int id) {
        return itemRepo.findExamItemByQuestionId(id);
    }

    @RequestMapping("/grade/{id}")
    public Exam gradeExam(@PathVariable("id") int id) {
        return gradingTool.gradeMcExam(repo.findById(id));
    }

    @PutMapping("/grade/question/{id}/{score}")
    public @ResponseBody String UpdateQuestion(@PathVariable("id") int id, @PathVariable("score") int score) {
        ExamItem examItem = itemRepo.findByQuestionId(id);
        examItem.setGradedScore(score);

        if (score >0)
        {
            examItem.setGradedCorrect(true);
        }
        examItem.setGradedCorrect(false);
        itemRepo.save(examItem);

        return "Updated";
    }
}