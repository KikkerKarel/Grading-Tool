package gps.s3.correctingtool.controller;

import gps.s3.correctingtool.entity.*;
import gps.s3.correctingtool.repo.*;
import gps.s3.correctingtool.services.ChoiceAutoGrader;
import org.springframework.web.bind.annotation.*;
import java.security.Principal;
import java.util.Collection;

@RestController
@RequestMapping("/api/exams")
public class ExamController {
    private final IExamRepo repo;
    private final IExamItemRepo itemRepo;
    private final IUserRepo uRepo;
    private final ChoiceAutoGrader choiceGradingTool;

    public ExamController(IExamRepo repo,
                          IExamItemRepo itemRepo,
                          IUserRepo uRepo,
                          ChoiceAutoGrader choiceGradingTool) {
        this.repo = repo;
        this.itemRepo = itemRepo;
        this.uRepo = uRepo;
        this.choiceGradingTool = choiceGradingTool;
    }

    @RequestMapping("/find/all")
    public Collection<Exam> findAllExams() {
        return repo.findAll();
    }

    @RequestMapping("/find/{id}")
    public Exam findById(@PathVariable("id") int id) {
        return repo.findById(id);
    }

    @RequestMapping("/me")
    public Collection<Exam> getMyExams(Principal principal) {
        User user = uRepo.findByUsername(principal.getName());
        return repo.findAllByExaminerId(user.getId());
    }

    @RequestMapping("/examiner/{id}")
    public Collection<Exam> byExaminer(@PathVariable("id") int id) {
        return repo.findAllByExaminerId(id);
    }

    @RequestMapping("/question/{questionid}/{examid}")
    public ExamItem byQuestion(@PathVariable("questionid") int questionid,
                               @PathVariable("examid") int examid) {
        return itemRepo.findByQuestionIdAndExamId(questionid, examid);
    }

    @RequestMapping("/grade/{id}")
    public Exam gradeExam(@PathVariable("id") int id) {
        return choiceGradingTool.gradeMcExam(repo.findById(id));
    }

    @PostMapping("/create/{examName}/{examiner}")
    public void CreateExam(@PathVariable("examName") String examName,
                           @PathVariable("examiner") int examinerID) {
        Exam exam = new Exam();
        exam.setExamName(examName);

        User user = uRepo.findById((long) examinerID).get();

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
    public ExamItem getExamItemPreviousGrade(@PathVariable("questionid") int questionid,
                                             @PathVariable("examid") int examid) {
        return itemRepo.findByQuestionIdAndExamId(questionid, examid);
    }

    @PutMapping("/{examid}/status/{newStatus}")
    public boolean ChangeExamStatus(@PathVariable("examid") int examID, @PathVariable("newStatus") String status ){
        Exam exam = repo.findById(examID);
        ExamStatus examStatus = ExamStatus.valueOf(status);
        exam.setStatus(examStatus);
        repo.save(exam);
        return true;

    }
}