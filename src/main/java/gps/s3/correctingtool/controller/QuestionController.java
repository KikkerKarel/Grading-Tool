package gps.s3.correctingtool.controller;

import gps.s3.correctingtool.exam.*;
import gps.s3.correctingtool.services.GradingTool;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.awt.print.Pageable;
import java.util.Collection;

@RestController
@RequestMapping("/api/question")
public class QuestionController {

    private final IQuestionRepo qRepo;
    private final IMcAnswerRepo mcRepo;
    private final TextAnswerRepo taRepo;

    public QuestionController(IQuestionRepo qRepo, IMcAnswerRepo mcRepo, TextAnswerRepo taRepo){
        this.qRepo = qRepo;
        this.mcRepo = mcRepo;
        this.taRepo = taRepo;
    }


    @PostMapping("/create/{questionText}/{questionType}")
    public Question createQuestion(@PathVariable("questionText") String text, @PathVariable("questionType") int type){

        Question question = new Question();
        question.setType(type);
        question.setText(text);
        qRepo.save(question);


        return qRepo.findByText(text);
    }

    @PostMapping("/addMcAnswer/{questionID}/{answerText}/{isCorrect}")
    public void CreateMcAnswer(@PathVariable("questionID") int questionID, @PathVariable("answerText") String text,@PathVariable("isCorrect") Boolean isCorrect){
        MultipleChoiceAnswer mcAnswer = new MultipleChoiceAnswer();
        mcAnswer.setQuestionId(questionID);
        mcAnswer.setValue(text);
        mcAnswer.setCorrect(isCorrect);
        mcRepo.save(mcAnswer);
    }

    @PostMapping("/addTextAnswer/{questionID}/{answerText}")
    public void CreateTextAnswer(@PathVariable("questionID") int questionID, @PathVariable("answerText") String text){
        TextAnswer textAnswer = new TextAnswer();
        textAnswer.setQuestionId(questionID);
        textAnswer.setValue(text);
        taRepo.save(textAnswer);
    }

    @RequestMapping("/find/all")
    public Collection<Question> GetAllQuestions(){
       return qRepo.findAll();
    }

    @RequestMapping("/mc/{questionID}")
    public Collection<MultipleChoiceAnswer> GetMcAnwersByQuestion(@PathVariable("questionID") int questionID){
        return mcRepo.findByQuestionId(questionID);
    }

}
