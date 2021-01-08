package gps.s3.correctingtool;

import gps.s3.correctingtool.repo.IExamItemRepo;
import gps.s3.correctingtool.services.WordCountGrader;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;

import static org.assertj.core.api.Assertions.*;

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

//    @Test
//     void test()
//    {
//        grader.
//    }

}
