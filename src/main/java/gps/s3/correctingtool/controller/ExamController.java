package gps.s3.correctingtool.controller;

import gps.s3.correctingtool.entity.*;
import gps.s3.correctingtool.repo.*;
import gps.s3.correctingtool.services.GradingTool;
import org.springframework.web.bind.annotation.*;
import java.util.Collection;

@RestController
@RequestMapping("/api/exams")
public class ExamController {

    private final IExamRepo repo;
    private final IExamItemRepo itemRepo;
    private final IUserRepo uRepo;
    private final GradingTool gradingTool;

    public ExamController(IExamRepo repo, IExamItemRepo itemRepo,IUserRepo uRepo , GradingTool gradingTool) {
        this.repo = repo;
        this.itemRepo = itemRepo;
        this.uRepo = uRepo;
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

    @RequestMapping("/question/{questionid}/{examid}")
    public ExamItem byQuestion(@PathVariable("questionid") int questionid, @PathVariable("examid") int examid) {
        return itemRepo.findByQuestionIdAndExamId(questionid, examid);
    }

    @RequestMapping("/grade/{id}")
    public Exam gradeExam(@PathVariable("id") int id) {
        return gradingTool.gradeMcExam(repo.findById(id));
    }

    @PostMapping("/create/{student}/{examiner}")
    public void CreateExam(@PathVariable("student") String studentName, @PathVariable("examiner") int examinerID) {
        Exam exam = new Exam();
        exam.setStudentName(studentName);

        long longID = examinerID;

        User user = uRepo.findById(longID).get();

        exam.setExaminer(user);
        exam.setStatus(ExamStatus.NOT_GRADED);

        repo.save(exam);
    }

    @PutMapping("/grade/{exam}/{question}/{score}")
    public @ResponseBody ExamItem UpdateQuestion(@PathVariable("exam") int exam,
                                                 @PathVariable("question") int question,
                                                 @PathVariable("score") int score) {
        ExamItem examItem = itemRepo.findByQuestionIdAndExamId(question, exam);

        examItem.setGradedScore(score);
        examItem.setGradedCorrect(score > 0);
        itemRepo.save(examItem);

        return examItem;
    }

    @RequestMapping("/previousgrading/{questionid}/{examid}")
    public ExamItem getExamItemPreviousGrade(@PathVariable("questionid") int questionid, @PathVariable("examid") int examid) {
        return itemRepo.findByQuestionIdAndExamId(questionid, examid);
    }
}