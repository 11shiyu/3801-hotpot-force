package com.hotpotforce.controller;


import com.hotpotforce.pojo.Users;
import com.hotpotforce.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class RegisterController {

    @Autowired
    private UserService userService;

//    @GetMapping("/registeration")
    @CrossOrigin
    @PostMapping ("/registeration")
//    @RequestMapping(value = "/registeration", method = RequestMethod.POST)
    public boolean register(String username, String password, String nation) {
//        return "Welcome Tasty Go";
        System.out.println("controller: \nusername: "+  username + '\n' + "password: " + password +'\n' + "nation: "+ nation);
        boolean result = userService.register(username, password, nation);
        return result;
    }

    @CrossOrigin
    @GetMapping("/login/{name}/{password}")
    public Users login(@PathVariable("name") String username, @PathVariable("password") String passsword) {
        return userService.login(username, passsword);
    }
}
