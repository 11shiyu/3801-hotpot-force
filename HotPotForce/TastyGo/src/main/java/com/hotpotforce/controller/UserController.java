package com.hotpotforce.controller;

import com.hotpotforce.pojo.Users;
import com.hotpotforce.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {
    @Autowired
    private UserService userService;

    @GetMapping("/getUserInforByname")
    public Users getUsersInfor(String username) {
        return userService.getUserByname(username);
    }

    @GetMapping("/updateUserScore")
    public Users updateUserScore(String username) {
        return userService.updateUserScore(username);
    }
}
