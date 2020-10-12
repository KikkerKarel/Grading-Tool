package gps.s3.correctingtool.controller;

import gps.s3.correctingtool.exam.*;
import gps.s3.correctingtool.services.GradingTool;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.Collection;
import java.util.List;

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
}