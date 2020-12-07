package gps.s3.correctingtool.controller;

import gps.s3.correctingtool.entity.*;
import gps.s3.correctingtool.user.UserDTO;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;
import gps.s3.correctingtool.repo.IUserRepo;
import java.security.Principal;
import java.time.Instant;
import java.util.Collection;

@RestController
@RequestMapping("/api/users")
public class UserController {
    private final IUserRepo userRepo;
    private final BCryptPasswordEncoder bCryptPasswordEncoder;

    public UserController(IUserRepo userRepo,
                          BCryptPasswordEncoder bCryptPasswordEncoder) {
        this.userRepo = userRepo;
        this.bCryptPasswordEncoder = bCryptPasswordEncoder;
    }

    @PostMapping("/register")
    public void signUp(@RequestBody UserDTO userDTO) {
        User user = new User();

        user.setUsername(userDTO.getUsername());
        user.setPassword(bCryptPasswordEncoder.encode(userDTO.getPassword()));
        user.setRegisterDate(Instant.now());

        userRepo.save(user);
    }

    @RequestMapping("/all")
    public Collection<User> getUsers(){
        return userRepo.findAll();
    }

    @GetMapping(value = "/me")
    @ResponseBody
    public User getUsername(Principal principal) {
        return userRepo.findByUsername(principal.getName());
    }
}