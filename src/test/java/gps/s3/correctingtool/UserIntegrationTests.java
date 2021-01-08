package gps.s3.correctingtool;

import gps.s3.correctingtool.entity.User;
import gps.s3.correctingtool.repo.IUserRepo;
import org.junit.jupiter.api.Test;
import static org.assertj.core.api.Assertions.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.web.servlet.MockMvc;

@SpringBootTest
@ActiveProfiles("test")
public class UserIntegrationTests {
    @Autowired
    IUserRepo userRepo;

    private MockMvc mockMvc;


    @Test
    public void getAllUsers_IsNotEmpty()
    {
        var x = userRepo.findAll();
        assertThat(x).isNotEmpty();
    }

    @Test
    public void getUserByName()
    {
        User x = userRepo.findByUsername("Admin");

        assertThat(x).isNotNull();

        assertThat(x.getUsername()).isEqualTo("Admin");
    }

    @Test
    public void checkUserProperty_IsNotNull()
    {
        User x = userRepo.findByUsername("Admin");

        assertThat(x.getRegisterDate()).isNotNull();
        assertThat(x.getId()).isGreaterThan(0);
    }
}
