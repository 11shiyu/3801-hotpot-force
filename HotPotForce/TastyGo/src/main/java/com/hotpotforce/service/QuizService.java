package com.hotpotforce.service;

import com.hotpotforce.pojo.Quiz;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface QuizService {

    int addQuiz(String question, String op1, String op2, String op3, String op4, String country);

    List<Quiz> selectQuizByCountry(String country);

    String findAnswer(String question);

    boolean checkAnswer(String userAnswer, String question);

}
