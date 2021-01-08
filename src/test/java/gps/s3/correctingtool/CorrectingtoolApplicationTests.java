package gps.s3.correctingtool;

import gps.s3.correctingtool.repo.IExamRepo;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;

import static org.assertj.core.api.Assertions.*;

@SpringBootTest
@ActiveProfiles("test")
class CorrectingtoolApplicationTests {

    @Autowired
    IExamRepo examRepo;

    @Test
    public void TestTrue() {
        var result = examRepo.findAll();

        assertThat(result).isNotEmpty();
    }

    @Test
    public void TestFalse() {
        assertThat(false).isFalse();
    }

//    @Test
//    public void TestWrong() {
//        assertThat(true).isFalse();
//    }
}