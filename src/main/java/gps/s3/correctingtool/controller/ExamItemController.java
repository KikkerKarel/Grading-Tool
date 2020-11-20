package gps.s3.correctingtool.controller;


import gps.s3.correctingtool.exam.*;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;
import java.util.List;

@RestController
@RequestMapping("/api/examitems")
public class ExamItemController {

    private final IExamItemRepo eiRepo;
    private final IExamRepo eRepo;
    private final IQuestionRepo qRepo;

    public ExamItemController(IExamItemRepo eiRepo, IExamRepo eRepo, IQuestionRepo qrepo){
        this.eiRepo = eiRepo;
        this.eRepo = eRepo;
        this.qRepo = qrepo;
    }

    @PostMapping("create/mc/{examid}/{questionid}/{mcanswer}")
    public Exam CreateMcExamItem(@PathVariable("examid") int examID,@PathVariable("questionid") int questionID, @PathVariable("mcanswer") int mcAnswer ){
        ExamItem examItem = new ExamItem();

        Exam exam = eRepo.findById(examID);
        examItem.setExam(exam);
        examItem.setExamId(examID);
//
        Question question = qRepo.findById(questionID);
        examItem.setQuestion(question);
        examItem.setQuestionId(questionID);
//
        examItem.setMpAnswer(mcAnswer);
//
        exam.addExamItem(examItem);

        eiRepo.save(examItem);
        return exam;
    }

    @PostMapping("create/oq/{examId}/{questionId}/{oqAnswer}")
    public Exam CreateOqExamItem(@PathVariable("examId") int examID,@PathVariable("questionId") int questionID, @PathVariable("oqAnswer") String oqAnswer ){
        ExamItem examItem = new ExamItem();

        Exam exam = eRepo.findById(examID);
        examItem.setExam(exam);
        examItem.setExamId(examID);

        Question question = qRepo.findById(questionID);
        examItem.setQuestionId(questionID);
        examItem.setQuestion(question);

        examItem.setTextAnswer(oqAnswer);

        exam.addExamItem(examItem);
        eiRepo.save(examItem);
        return exam;
    }
}
