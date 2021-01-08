package gps.s3.correctingtool.IntegrationTests;

import gps.s3.correctingtool.repo.IExamItemRepo;
import gps.s3.correctingtool.services.QuoteGrader;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;

import javax.transaction.Transactional;

import static org.assertj.core.api.Assertions.as;
import static org.assertj.core.api.Assertions.assertThat;

@Transactional
@SpringBootTest
@ActiveProfiles("test")
class QuoteGraderIntegrationTests {
    @Autowired
    IExamItemRepo examItemRepo;

    @Autowired
    QuoteGrader grader;

    @Test
    void getAllExamItems_IsNotEmpty()
    {
        var x = examItemRepo.findAll();

        assertThat(x).isNotEmpty();
    }

    @Test
    void checkQuoteGraderProperties_WhenAnswerIsCorrect()
    {
        var examItem = examItemRepo.findByQuestionIdAndExamId(5, 2);
        examItem.setStudentTextAnswer("Duncan Laurence uit Nederland won met Arcade");

        var x = grader.getAdvice(examItem);

        assertThat(x.getExamItem()).isNotNull();
        assertThat(x.getFeedback().size()).isZero();
    }

    @Test
    void checkQuoteGraderProperties_WhenAnswerIsIncorrect()
    {
        var examItem = examItemRepo.findByQuestionIdAndExamId(5, 2);
        var x = grader.getAdvice(examItem);

        assertThat(x.getExamItem()).isNotNull();
        assertThat(x.getFeedback().size()).isEqualTo(1);
    }

    @Test
    void returnFeedback_WhenRuleIsBroken()
    {
        var examItem = examItemRepo.findByQuestionIdAndExamId(5, 2);
        var x = grader.getAdvice(examItem);

        assertThat(x.getExamItem()).isNotNull();
        assertThat(x.getFeedback().size()).isEqualTo(1);
        assertThat(x.getFeedback().get(0)).isEqualTo("Citaatregel: Dit antwoord is geen exact citaat.");
    }
}
