package com.hotpotforce.service;

import com.hotpotforce.pojo.Users;

public interface UserService {
     boolean register(String username, String password, String nation);

     Users login(String usernma, String password);

     Users getUserByID(Long ID);
}
