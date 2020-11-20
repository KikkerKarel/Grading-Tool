package gps.s3.correctingtool;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import static org.assertj.core.api.Assertions.*;

@SpringBootTest
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