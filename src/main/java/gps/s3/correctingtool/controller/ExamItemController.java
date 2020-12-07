package gps.s3.correctingtool.controller;

import gps.s3.correctingtool.entity.*;
import gps.s3.correctingtool.repo.IExamItemRepo;
import gps.s3.correctingtool.repo.IExamRepo;
import gps.s3.correctingtool.repo.IQuestionRepo;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/examitems")
public class ExamItemController {

    private final IExamItemRepo eiRepo;
    private final IExamRepo eRepo;
    private final IQuestionRepo qRepo;

    public ExamItemController(IExamItemRepo eiRepo,
                              IExamRepo eRepo,
                              IQuestionRepo qrepo){
        this.eiRepo = eiRepo;
        this.eRepo = eRepo;
        this.qRepo = qrepo;
    }

    @PostMapping("create/mc/{examid}/{questionid}/{mcanswer}")
    public Exam CreateMcExamItem(@PathVariable("examid") int examID,
                                 @PathVariable("questionid") int questionID,
                                 @PathVariable("mcanswer") int mcAnswer) {
        ExamItem examItem = new ExamItem();

        Exam exam = eRepo.findById(examID);
        examItem.setExam(exam);
        examItem.setExamId(examID);

        Question question = qRepo.findById(questionID);
        examItem.setQuestion(question);
        examItem.setQuestionId(questionID);

        examItem.setStudentChoiceAnswer(mcAnswer);

        exam.getItems().add(examItem);

        eiRepo.save(examItem);
        return exam;
    }

    @PostMapping("create/oq/{examId}/{questionId}/{oqAnswer}")
    public Exam CreateOqExamItem(@PathVariable("examId") int examID,
                                 @PathVariable("questionId") int questionID,
                                 @PathVariable("oqAnswer") String oqAnswer ){
        ExamItem examItem = new ExamItem();

        Exam exam = eRepo.findById(examID);
        examItem.setExam(exam);
        examItem.setExamId(examID);

        Question question = qRepo.findById(questionID);
        examItem.setQuestionId(questionID);
        examItem.setQuestion(question);

        examItem.setStudentTextAnswer(oqAnswer);

        exam.getItems().add(examItem);
        eiRepo.save(examItem);
        return exam;
    }
}