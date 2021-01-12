package gps.s3.correctingtool.IntegrationTests;

import gps.s3.correctingtool.repo.IExamItemRepo;
import gps.s3.correctingtool.services.EnumerationGrader;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;

import javax.transaction.Transactional;

import static org.assertj.core.api.Assertions.assertThat;

@Transactional
@SpringBootTest
@ActiveProfiles("test")
class EnumerationGraderIntegrationTests {
    @Autowired
    IExamItemRepo examItemRepo;

    @Autowired
    EnumerationGrader grader;

    @Test
    void getAllExamItems_IsNotEmpty()
    {
        var x = examItemRepo.findAll();

        assertThat(x).isNotEmpty();
    }

//    @Test
//    void checkEnumerationGraderProperties_WhenAnswerIsCorrect()
//    {
//        var examItem = examItemRepo.findByQuestionIdAndExamId(6, 1);
//        var x = grader.getAdvice(examItem);
//
//        assertThat(x.getExamItem()).isNotNull();
//        assertThat(x.getFeedback().size()).isEqualTo(1);
//    }

    @Test
    void returnFeedback_WhenAnswerIsCorrect()
    {
        var examItem = examItemRepo.findByQuestionIdAndExamId(7, 1);
        var x = grader.getAdvice(examItem);

        assertThat(x.getFeedback().size()).isZero();
    }

//    @Test
//    void returnFeedback_WhenAnswerIsIncorrect()
//    {
//        var examItem = examItemRepo.findByQuestionIdAndExamId(5, 2);
//        examItem.setStudentTextAnswer("Duncan Laurence uit Tilburg in Nederland had gewonnen met zijn liedje: Arcade");
//        var x = grader.getAdvice(examItem);
//
//        assertThat(x.getExamItem()).isNotNull();
//        assertThat(x.getFeedback().size()).isEqualTo(1);
//        assertThat(x.getFeedback().stream().anyMatch(f -> f.equals("De invuller heeft het aantal antwoorden overschreden."))).isTrue();
//    }
}
