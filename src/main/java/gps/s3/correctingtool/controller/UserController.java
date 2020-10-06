package gps.s3.correctingtool.controller;

import gps.s3.correctingtool.user.AppUser;
import gps.s3.correctingtool.user.IUserRepo;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.Instant;

@RestController
@RequestMapping("/users")
public class UserController {

    private IUserRepo userRepo;
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    public UserController(IUserRepo userRepo,
                          BCryptPasswordEncoder bCryptPasswordEncoder) {
        this.userRepo = userRepo;
        this.bCryptPasswordEncoder = bCryptPasswordEncoder;
    }

    @PostMapping("/sign-up")
    public void signUp(@RequestBody AppUser user) {
        user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()))
                .setRegisterDate(Instant.now());
        userRepo.save(user);
    }
}