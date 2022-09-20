package com.hotpotforce.service;

import com.hotpotforce.pojo.Users;

public interface UserService {
     boolean register(String username, String password);

     Users login(String usernma, String password);
}
