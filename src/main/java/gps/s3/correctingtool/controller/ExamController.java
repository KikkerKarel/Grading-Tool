package gps.s3.correctingtool.controller;

import gps.s3.correctingtool.exam.Exam;
import gps.s3.correctingtool.exam.ExamItem;
import gps.s3.correctingtool.exam.IExamItemRepo;
import gps.s3.correctingtool.exam.IExamRepo;
import org.springframework.data.domain.Sort;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collection;

@RestController
@RequestMapping("/api/exams")
public class ExamController {

    private final IExamRepo repo;
    private final IExamItemRepo itemRepo;

    public ExamController(IExamRepo repo, IExamItemRepo itemRepo) {
        this.repo = repo;
        this.itemRepo = itemRepo;
    }

    @RequestMapping("/find/all")
    public Collection<Exam> findAllExams() {
        return repo.findAll();
    }

    @RequestMapping("/find/{id}")
    public Exam findById(@PathVariable("id") int id)
    {
        return repo.findById(id);
    }

    @RequestMapping("/examiner/{id}")
    public Collection<Exam> byExaminer(@PathVariable("id") int id)
    {
        return repo.findAllByExaminerId(id);
    }

    @RequestMapping("/question/{id}")
    public Collection<ExamItem> byQuestion(@PathVariable("id") int id)
    {
        return itemRepo.findExamItemByQuestionId(id);
    }
}
