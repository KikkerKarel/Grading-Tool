package gps.s3.correctingtool.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/hello")
public class HelloController {

    @RequestMapping("**")
    public String index()
    {
        return "Hello world!";
    }

}
