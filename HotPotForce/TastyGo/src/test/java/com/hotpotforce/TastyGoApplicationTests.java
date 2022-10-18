package com.hotpotforce;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.jdbc.core.JdbcTemplate;

import javax.sql.DataSource;
import java.sql.SQLException;
import java.util.List;
import java.util.Map;

@SpringBootTest
class TastyGoApplicationTests {

    @Autowired
    DataSource dataSource;
    @Autowired
    JdbcTemplate jdbcTemplate;

    @Test
    void contextLoads() {
//        System.out.println(dataSource.getClass());
        System.out.println("CONNECT");
//        System.out.println(dataSource.getConnection());
//        Connection conn = dataSource.getConnection();

    }

    @Test
    void SearchRecipeTest() {
//        ApplicationContext ac = new ClassPathXmlApplicationContext("application.yaml");
    }

}
