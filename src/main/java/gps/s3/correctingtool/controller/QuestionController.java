package gps.s3.correctingtool.controller;

import gps.s3.correctingtool.entity.ChoiceAnswer;
import gps.s3.correctingtool.entity.CorrectAnswer;
import gps.s3.correctingtool.entity.Question;
import gps.s3.correctingtool.entity.QuestionType;
import gps.s3.correctingtool.repo.IChoiceRepo;
import gps.s3.correctingtool.repo.IQuestionRepo;
import gps.s3.correctingtool.repo.ITextAnswerRepo;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collection;

@RestController
@RequestMapping("/api/question")
public class QuestionController {

    private final IQuestionRepo qRepo;
    private final IChoiceRepo mcRepo;
    private final ITextAnswerRepo taRepo;

    public QuestionController(IQuestionRepo qRepo, IChoiceRepo mcRepo, ITextAnswerRepo taRepo){
        this.qRepo = qRepo;
        this.mcRepo = mcRepo;
        this.taRepo = taRepo;
    }

    @PostMapping("/create/{questionText}/{questionType}")
    public Question createQuestion(@PathVariable("questionText") String qText, @PathVariable("questionType") int type){
        Question question = new Question();

        var questionType = type == 1 ? QuestionType.CHOICE : QuestionType.TEXT;
        question.setType(questionType);
        question.setText(qText);

        qRepo.save(question);

        Question myQuestion = qRepo.findAll().stream().filter(question1 -> question1.getText() == qText).filter(question1 -> question1.getType() == questionType).findFirst().get();
        return myQuestion;
        //return qRepo.findByText(text);
    }

    @PostMapping("/addMcAnswer/{questionID}/{answerText}/{isCorrect}")
    public void CreateMcAnswer(@PathVariable("questionID") int questionID, @PathVariable("answerText") String text,@PathVariable("isCorrect") Boolean isCorrect){
        ChoiceAnswer mcAnswer = new ChoiceAnswer();
        mcAnswer.setQuestionId(questionID);
        mcAnswer.setText(text);
        mcAnswer.setCorrect(isCorrect);

        mcRepo.save(mcAnswer);
    }

    @PostMapping("/addTextAnswer/{questionID}/{answerText}")
    public void CreateTextAnswer(@PathVariable("questionID") int questionID, @PathVariable("answerText") String text){
        CorrectAnswer textAnswer = new CorrectAnswer();
        textAnswer.setQuestionId(questionID);
        textAnswer.setText(text);

        taRepo.save(textAnswer);
    }

    @RequestMapping("/find/all")
    public Collection<Question> GetAllQuestions(){
       return qRepo.findAll();
    }

    @RequestMapping("/mc/{questionID}")
    public Collection<ChoiceAnswer> GetMcAnwersByQuestion(@PathVariable("questionID") int questionID){
        return mcRepo.findByQuestionId(questionID);
    }
}