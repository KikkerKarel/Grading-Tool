package gps.s3.correctingtool.IntegrationTests;

import gps.s3.correctingtool.repo.IExamItemRepo;
import gps.s3.correctingtool.services.GrammarGrader;
import gps.s3.correctingtool.services.TextGradeManager;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;

import javax.transaction.Transactional;

import static org.assertj.core.api.Assertions.*;

@Transactional
@SpringBootTest
@ActiveProfiles("test")
class GrammarGraderIntegrationTests {
    @Autowired
    IExamItemRepo examItemRepo;

    @Autowired
    GrammarGrader grader;

    @Autowired
    TextGradeManager manager;

    @Test
    void getAllExamItems_IsNotEmpty()
    {
        var x = examItemRepo.findAll();

        assertThat(x).isNotEmpty();
    }

    @Test
    void checkGrammarGraderProperties_WhenAnswerIsCorrect()
    {
        var examItem = examItemRepo.findByQuestionIdAndExamId(5, 2);
        var x = grader.getAdvice(examItem);

        assertThat(x.getExamItem()).isNotNull();
        assertThat(x.getFeedback().size()).isZero();
    }

    @Test
    void checkGrammarGraderProperties_WhenAnswerIsIncorrect()
    {
        var examItem = examItemRepo.findByQuestionIdAndExamId(6, 1);
        var x = grader.getAdvice(examItem);

        assertThat(x.getExamItem()).isNotNull();
        assertThat(x.getFeedback().size()).isEqualTo(1);
    }

    @Test
    void returnsFeedback_WhenGrammarRuleBroken()
    {
        var examItem = examItemRepo.findByQuestionIdAndExamId(6, 1);
        var x = grader.getAdvice(examItem);

        assertThat(x.getExamItem()).isNotNull();
        assertThat(x.getFeedback().size()).isEqualTo(1);
        assertThat(x.getFeedback().get(0)).startsWith("De volgende woorden missen een hoofdletter: ");
    }
}
