package com.hotpotforce.service.impl;

import com.hotpotforce.mapper.UserMapper;
import com.hotpotforce.pojo.Users;
import com.hotpotforce.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserMapper userMapper;

    @Override
    public boolean register(String username, String password) {
        // 先if 判断如果没有在insert
        boolean flag = false;
        System.out.println("service : \nusername: "+  username + '\n' + "password: " + password);
        try {
            int result = userMapper.register(username, password);

            if (result == 1) {
                flag = true;
            }
            System.out.println("service层： " + flag);
            return flag;
        } catch (Exception e) {
            return flag;
        }
    }

    @Override
    public Users login(String username, String password) {
        Users user = userMapper.login(username, password);
        if (null != user && username.equals(user.getUsername()) && password.equals(user.getPassword())) {
            return user;
        } else {
            return null;
        }
    }
}
