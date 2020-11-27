package gps.s3.correctingtool.controller;

import gps.s3.correctingtool.dto.TextGradingAdvice;
import gps.s3.correctingtool.exam.ExamItemId;
import gps.s3.correctingtool.exam.IExamItemRepo;
import gps.s3.correctingtool.exam.IExamRepo;
import gps.s3.correctingtool.services.TextGradingService;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class GradeController {

    private final IExamRepo repo;
    private final IExamItemRepo itemRepo;
    private final TextGradingService service;

    public GradeController(IExamRepo repo, IExamItemRepo itemRepo, TextGradingService service) {
        this.repo = repo;
        this.itemRepo = itemRepo;
        this.service = service;
    }

    @RequestMapping("/advice/{exam_id}/{question_id}")
    public TextGradingAdvice getAdviceForExamId(@PathVariable("exam_id") int examId, @PathVariable("question_id") int questionId) {
        var id = new ExamItemId(examId, questionId);
        var item = itemRepo.findById(id);

        if(item.isEmpty())
            return null;

        return service.getGradingAdvice(item.get());
    }
}
