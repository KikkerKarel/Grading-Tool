package gps.s3.correctingtool;

import gps.s3.correctingtool.repo.IExamItemRepo;
import gps.s3.correctingtool.repo.IExamRepo;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;

import javax.transaction.Transactional;

import static org.assertj.core.api.Assertions.*;

@Transactional
@SpringBootTest
@ActiveProfiles("test")
public class ExamIntegrationTests {
    @Autowired
    IExamRepo examRepo;

    @Test
    public void getAllExams_IsNotEmpty()
    {
        var x = examRepo.findAll();

        assertThat(x).isNotEmpty();
    }

    @Test
    public void checkExamProperty_IsNotNull()
    {
        var x = examRepo.findById(1);

        assertThat(x.getId()).isGreaterThan(0);

        assertThat(x.getExamName()).isNotNull();
        assertThat(x.getExaminer()).isNotNull();
        assertThat(x.getStatus()).isNotNull();
        assertThat(x.getItems().size()).isEqualTo(6);
    }
}
