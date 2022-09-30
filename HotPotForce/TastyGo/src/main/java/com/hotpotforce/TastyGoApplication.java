package com.hotpotforce;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;


@SpringBootApplication
//@SpringBootApplication(exclude= {DataSourceAutoConfiguration.class})
public class TastyGoApplication {

    public static void main(String[] args) {
        SpringApplication.run(TastyGoApplication.class, args);
    }

}
