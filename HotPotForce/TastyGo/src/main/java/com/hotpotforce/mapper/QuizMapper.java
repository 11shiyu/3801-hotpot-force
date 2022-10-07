package com.hotpotforce.mapper;

import com.hotpotforce.pojo.Quiz;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import org.springframework.stereotype.Repository;

import java.util.List;

@Mapper
@Repository
public interface QuizMapper {

    @Insert("INSERT INTO quiz (Question, optionA, optionB, optionC, optionD, country) VALUES (#{Question}, #{optionA}, #{optionB}, #{optionC}, #{optionD}, #{country})")
    int addQuiz(@Param("Question") String question, @Param("optionA") String op1, @Param("optionB") String op2, @Param("optionC") String op3, @Param("optionD") String op4, @Param("country")String Country);

    @Select("SELECT * FROM quiz where country = #{country}")
    List<Quiz> selectQuizByCountry(@Param("country") String country);

    @Select("SELECT optionC FROM quiz where question=#{question}")
    String findAnswer(@Param("question") String question);
}
