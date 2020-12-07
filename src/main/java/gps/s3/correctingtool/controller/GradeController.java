package gps.s3.correctingtool.controller;

import gps.s3.correctingtool.dto.TextGradingAdvice;
import gps.s3.correctingtool.entity.ExamItem;
import gps.s3.correctingtool.entity.ExamItemId;
import gps.s3.correctingtool.repo.IExamItemRepo;
import gps.s3.correctingtool.services.TextGradingService;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@RestController
public class GradeController {
    private final IExamItemRepo itemRepo;
    private final TextGradingService service;

    public GradeController(IExamItemRepo itemRepo,
                           TextGradingService service) {
        this.itemRepo = itemRepo;
        this.service = service;
    }

    @RequestMapping("/advice/{exam_id}/{question_id}")
    public TextGradingAdvice getAdviceForExamId(@PathVariable("exam_id") int examId,
                                                @PathVariable("question_id") int questionId) {
        ExamItemId id = new ExamItemId(examId, questionId);
        Optional<ExamItem> item = itemRepo.findById(id);

        if(item.isEmpty())
            return null;

        return service.getGradingAdvice(item.get());
    }
}