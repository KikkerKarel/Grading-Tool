package gps.s3.correctingtool;

import gps.s3.correctingtool.dto.TextGradingAdvice;
import gps.s3.correctingtool.entity.CorrectAnswer;
import gps.s3.correctingtool.entity.ExamItem;
import gps.s3.correctingtool.entity.Question;
import gps.s3.correctingtool.entity.QuestionSettings;
import gps.s3.correctingtool.repo.IExamRepo;
import gps.s3.correctingtool.services.QuoteGrader;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;

import static org.assertj.core.api.Assertions.*;

@SpringBootTest
@ActiveProfiles("test")
class GraderUnitTest {

    @Autowired
    QuoteGrader quoteGrader;
    ExamItem item;
    Question question;
    QuestionSettings settings;
    CorrectAnswer correctAnswer;

    public GraderUnitTest()   {
        item = new ExamItem();
        question = new Question();
        settings = new QuestionSettings();
        correctAnswer = new CorrectAnswer();
    }

    @Test
    public void QuoteGraderGetAdvice() {
        var advice = new TextGradingAdvice();
        advice.addFeedback("Citaatregel: Dit antwoord is geen exact citaat.");

        settings.setCheckQuote(true);
        correctAnswer.setText("321");
        question.setCorrectAnswer(correctAnswer);
        question.setSettings(settings);
        item.setQuestion(question);
        item.setStudentTextAnswer("123");

        assertThat(advice.getFeedback()).isEqualTo(quoteGrader.getAdvice(item).getFeedback());
    }

    @Test
    public void QuoteGraderNoAdvice() {
        var advice = new TextGradingAdvice();
        advice.addFeedback("Citaatregel: Dit antwoord is geen exact citaat.");

        settings.setCheckQuote(true);
        correctAnswer.setText("123");
        question.setCorrectAnswer(correctAnswer);
        question.setSettings(settings);
        item.setQuestion(question);
        item.setStudentTextAnswer("123");

        assertThat(advice.getFeedback()).isNotEqualTo(quoteGrader.getAdvice(item).getFeedback());
    }

//    @Test
//    public void TestWrong() {
//        assertThat(true).isFalse();
//    }
}