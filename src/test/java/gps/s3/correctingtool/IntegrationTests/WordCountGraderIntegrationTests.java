package gps.s3.correctingtool.IntegrationTests;

import gps.s3.correctingtool.repo.IExamItemRepo;
import gps.s3.correctingtool.services.WordCountGrader;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;

import javax.transaction.Transactional;

import static org.assertj.core.api.Assertions.*;

@Transactional
@SpringBootTest
@ActiveProfiles("test")
class WordCountGraderIntegrationTests {
    @Autowired
    IExamItemRepo examItemRepo;

    @Autowired
    WordCountGrader grader;

    @Test
    void getAllExamItems_IsNotEmpty()
    {
        var x = examItemRepo.findAll();

        assertThat(x).isNotEmpty();
    }

    @Test
     void checkWordCountProperties_WhenAnswerCorrect()
    {
        var examItem = examItemRepo.findByQuestionIdAndExamId(6, 1);
        var x = grader.getAdvice(examItem);

        assertThat(x.getExamItem()).isNotNull();
        assertThat(x.getFeedback().size()).isZero();
    }

    @Test
    void checkWordCountProperties_WhenAnswerIncorrect()
    {
        var examItem = examItemRepo.findByQuestionIdAndExamId(6, 7);
        var x = grader.getAdvice(examItem);

        assertThat(x.getExamItem()).isNotNull();
        assertThat(x.getFeedback().size()).isEqualTo(1);
    }

    @Test
    void checkWordCountFeedback_IsEqual()
    {
        var examItem = examItemRepo.findByQuestionIdAndExamId(6, 7);
        var x = grader.getAdvice(examItem);

        assertThat(x.getExamItem()).isNotNull();
        assertThat(x.getFeedback().size()).isEqualTo(1);
        assertThat(x.getFeedback().get(0)).isEqualTo("Woordenlimiet overschreden!");
    }

}
