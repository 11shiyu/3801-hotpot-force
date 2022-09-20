package com.hotpotforce.controller;


import com.hotpotforce.pojo.Users;
import com.hotpotforce.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class RegisterController {

    @Autowired
    private UserService userService;

    @GetMapping("/registeration")
//    @PostMapping ("/registeration")
//    @RequestMapping(value = "/registeration", method = RequestMethod.POST)
    public boolean register(String username, String password) {
//        return "Welcome Tasty Go";
        System.out.println("controller: \nusername: "+  username + '\n' + "password: " + password);
        boolean result = userService.register(username, password);
        return result;
    }

    @GetMapping("/login/{name}/{password}")
    public Users login(@PathVariable("name") String username, @PathVariable("password") String passsword) {
        return userService.login(username, passsword);
    }
}
