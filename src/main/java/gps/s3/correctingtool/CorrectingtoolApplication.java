package gps.s3.correctingtool;

import gps.s3.correctingtool.entity.User;
import gps.s3.correctingtool.repo.IUserRepo;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import java.time.Instant;

@SpringBootApplication
public class CorrectingtoolApplication extends SpringBootServletInitializer{
    public static void main(String[] args) {
        SpringApplication.run(CorrectingtoolApplication.class, args);
    }

    @Bean
    public BCryptPasswordEncoder bCryptPasswordEncoder() {
        return new BCryptPasswordEncoder();
    }
}