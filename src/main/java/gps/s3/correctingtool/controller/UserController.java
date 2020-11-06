package gps.s3.correctingtool.controller;

import gps.s3.correctingtool.user.AppUser;
import gps.s3.correctingtool.user.IUserRepo;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.time.Instant;
import java.util.Collection;

@RestController
@RequestMapping("/api/users")
public class UserController {

    private IUserRepo userRepo;
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    public UserController(IUserRepo userRepo, BCryptPasswordEncoder bCryptPasswordEncoder) {
        this.userRepo = userRepo;
        this.bCryptPasswordEncoder = bCryptPasswordEncoder;
    }

    @PostMapping("/register")
    public void signUp(@RequestBody AppUser user) {
        user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()))
                .setRegisterDate(Instant.now());
        userRepo.save(user);
    }

    @RequestMapping("/all")
    public Collection<AppUser> getUsers(){
        return userRepo.findAll();
    }
}