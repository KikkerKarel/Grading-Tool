package gps.s3.correctingtool.controller;

import gps.s3.correctingtool.dto.SummaryAdvice;
import gps.s3.correctingtool.entity.ExamItemId;
import gps.s3.correctingtool.repo.IExamItemRepo;
import gps.s3.correctingtool.repo.IExamRepo;
import gps.s3.correctingtool.services.TextGradeManager;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/grade")
public class GradeController {

private final IExamRepo repo;
private final IExamItemRepo itemRepo;
private final TextGradeManager manager;

    public GradeController(IExamRepo repo, IExamItemRepo itemRepo, TextGradeManager manager) {
        this.repo = repo;
        this.itemRepo = itemRepo;
        this.manager = manager;
    }

    @RequestMapping("/advice/{exam_id}/{question_id}")
    public SummaryAdvice getAdviceForExamId(@PathVariable("exam_id") int examId, @PathVariable("question_id") int questionId) {
        var id = new ExamItemId(examId, questionId);
        var item = itemRepo.findById(id).orElseThrow();

        return manager.getSummaryAdvice(item);
    }
}
