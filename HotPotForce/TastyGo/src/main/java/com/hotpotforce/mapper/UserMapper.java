package com.hotpotforce.mapper;

import com.hotpotforce.pojo.Users;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import org.springframework.stereotype.Repository;


@Mapper
@Repository
public interface UserMapper {

//    int insertUser(Users user);
//
//    int deleteUser(Long userId);
//
//    int updateUser(Users user);
//
//    Users selectById(Long id);

    @Insert("insert into users(username, password) values (#{username}, #{password})")
    int register(@Param("username") String username, @Param("password") String password);

    @Select("select * from users where username = #{username} and password = #{password}")
    Users login(@Param("username") String username, @Param("password") String password);
}
