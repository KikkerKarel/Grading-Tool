package gps.s3.correctingtool.controller;

import gps.s3.correctingtool.exam.Exam;
import gps.s3.correctingtool.exam.IExamRepo;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/exams")
public class ExamController {

    private final IExamRepo repo;

    public ExamController(IExamRepo repo) {
        this.repo = repo;
    }

    @RequestMapping("/find/{id}")
    public Exam findById(@PathVariable("id") int id)
    {
        return repo.findById(id);
    }
}
