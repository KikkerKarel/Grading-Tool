package gps.s3.correctingtool.IntegrationTests;

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
class ExamIntegrationTests {
    @Autowired
    IExamRepo examRepo;

    @Test
    void getAllExams_IsNotEmpty()
    {
        var x = examRepo.findAll();

        assertThat(x).isNotEmpty();
    }

    @Test
    void checkExamProperty_IsNotNull()
    {
        var x = examRepo.findById(1);

        assertThat(x.getId()).isPositive();

        assertThat(x.getExamName()).isNotNull();
        assertThat(x.getExaminer()).isNotNull();
        assertThat(x.getStatus()).isNotNull();
        assertThat(x.getItems().size()).isEqualTo(7);
    }
}
