package com.hotpotforce;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
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
        // 查看一下默认数据源 class com.zaxxer.hikari.HikariDataSource
//        System.out.println(dataSource.getClass());
        System.out.println("数据库连接");
//        System.out.println(dataSource.getConnection());
//        Connection conn = dataSource.getConnection();

    }

    @Test
    void userList() {
        String sql = "select * from users";
        List<Map<String, Object>> listMaps = jdbcTemplate.queryForList(sql);

        System.out.println(listMaps);
        System.out.println("111111");

    }

}
