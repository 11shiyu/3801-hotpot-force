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

    @Select("select id, username from users where ID = #{ID};")
    Users getUser(@Param("ID") Long id);

    @Insert("insert into users(username, password, nationality) values (#{username}, #{password}, #{nationality})")
    int register(@Param("username") String username, @Param("password") String password, String nationality);

    @Select("select * from users where username = #{username} and password = #{password}")
    Users login(@Param("username") String username, @Param("password") String password);

    @Insert("update users set score = score + 1 where username = #{username}")
    int updateScore(@Param("username") String username);

    @Select("select id, username, email, score from users where username = #{username};")
    Users getUserByname(@Param("username") String username);
}
