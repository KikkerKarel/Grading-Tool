package gps.s3.correctingtool.IntegrationTests;

import gps.s3.correctingtool.entity.User;
import gps.s3.correctingtool.repo.IUserRepo;
import org.junit.jupiter.api.Test;
import static org.assertj.core.api.Assertions.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;

@SpringBootTest
@ActiveProfiles("test")
class UserIntegrationTests {
    @Autowired
    IUserRepo userRepo;

    @Test
    void getAllUsers_IsNotEmpty()
    {
        var x = userRepo.findAll();
        assertThat(x).isNotEmpty();
    }

    @Test
    void getUserByName()
    {
        User x = userRepo.findByUsername("Admin");

        assertThat(x).isNotNull();

        assertThat(x.getUsername()).isEqualTo("Admin");
    }

    @Test
    void checkUserProperty_IsNotNull()
    {
        User x = userRepo.findByUsername("Admin");

        assertThat(x.getRegisterDate()).isNotNull();
        assertThat(x.getId()).isPositive();
    }
}
