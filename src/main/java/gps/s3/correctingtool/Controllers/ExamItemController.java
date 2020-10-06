package gps.s3.correctingtool.Controllers;
import gps.s3.correctingtool.Entities.*;
import gps.s3.correctingtool.Repositories.ExamItemRepository;
import gps.s3.correctingtool.Repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.Collection;
import java.util.Date;

@Controller
@RequestMapping(path="/question")
public class ExamItemController {
    @Autowired
    private ExamItemRepository examItemRepository;

    @GetMapping(path="/all")
    public @ResponseBody Collection<ExamItem> getAllExamItems() {
        // This returns a JSON or XML with the users
        //var x = examItemRepository.findAll();
        Exam exam = new Exam();
        exam.setExam_id(0);


        return examItemRepository.GetAllExamItemsPerExam(0);
    }
}
