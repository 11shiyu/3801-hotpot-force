package com.hotpotforce.controller;


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/index")
public class RegisterController {
    @GetMapping("/registeration")
    public String register() {
        return "Welcome Tasty Go";
    }
}
