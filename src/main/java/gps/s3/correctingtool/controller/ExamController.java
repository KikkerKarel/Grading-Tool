package gps.s3.correctingtool.controller;

import gps.s3.correctingtool.exam.Exam;
import gps.s3.correctingtool.exam.ExamItem;
import gps.s3.correctingtool.exam.IExamItemRepo;
import gps.s3.correctingtool.exam.IExamRepo;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collection;
import java.util.List;

@RestController
@RequestMapping("/api/exams")
public class ExamController {

    private final IExamRepo repo;
    private final IExamItemRepo itemRepo;

    public ExamController(IExamRepo repo, IExamItemRepo itemRepo) {
        this.repo = repo;
        this.itemRepo = itemRepo;
    }

    @RequestMapping("/find/{id}")
    public Exam findById(@PathVariable("id") int id)
    {
        return repo.findById(id);
    }

    @RequestMapping("/find/{id}/mc")
    public Exam getMultipleChoiceExam(@PathVariable ("id") int id){
        Exam exam = repo.findById(id);
        List<ExamItem> examItems = exam.getItems();

        for(ExamItem examItem : examItems){
            int examType = examItem.getQuestion().getType();
            if (examType != 1){
                examItems.remove(examItem);
            }
        }

        exam.setItems(examItems);
        exam.getProgress();
        return exam;
    }

    @RequestMapping("/examiner/{id}")
    public Collection<Exam> byExaminer(@PathVariable("id") int id)
    {
        return repo.findAllByExaminerId(id);
    }

    @RequestMapping("/question/all")
    public Collection<ExamItem> findAllQuestions()
    {
        return itemRepo.findAll();
    }

    @RequestMapping("/question/{id}")
    public Collection<ExamItem> byQuestion(@PathVariable("id") int id)
    {
        return itemRepo.findExamItemByQuestionId(id);
    }
}
