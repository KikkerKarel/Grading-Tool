package gps.s3.correctingtool.controller;

import gps.s3.correctingtool.dto.AppUserDTO;
import gps.s3.correctingtool.user.AppUser;
import gps.s3.correctingtool.user.IUserRepo;
import org.modelmapper.ModelMapper;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.time.Instant;

@RestController
@RequestMapping("/api/users")
public class UserController {

    private final IUserRepo userRepo;
    private final BCryptPasswordEncoder bCryptPasswordEncoder;
    private final ModelMapper mapper;

    public UserController(IUserRepo userRepo,
                          BCryptPasswordEncoder bCryptPasswordEncoder, ModelMapper mapper) {
        this.userRepo = userRepo;
        this.bCryptPasswordEncoder = bCryptPasswordEncoder;
        this.mapper = mapper;
    }

    @PostMapping("/register")
    public void signUp(@RequestBody AppUserDTO dto) {

        AppUser user = mapper.map(dto, AppUser.class);
        user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()))
                .setRegisterDate(Instant.now());
        userRepo.save(user);
    }

    @GetMapping(value = "/me")
    @ResponseBody
    public AppUser getUsername(Principal principal) {
        return userRepo.findByUsername(principal.getName());
    }
}