package gps.s3.correctingtool;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;

import static org.assertj.core.api.Assertions.*;

@SpringBootTest
@ActiveProfiles("test")
class CorrectingtoolApplicationTests {

    @Test
    public void TestTrue() {
        assertThat(true).isTrue();
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