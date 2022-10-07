package com.hotpotforce.service;

import com.hotpotforce.pojo.Users;
import org.apache.ibatis.annotations.Param;

public interface UserService {
     boolean register(String username, String password, String nation);

     Users login(String usernma, String password);

     Users getUserByID(Long ID);

     Users updateUserScore(String username);

     Users getUserByname(@Param("username") String username);
}
