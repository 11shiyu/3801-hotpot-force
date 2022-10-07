package com.hotpotforce.service.impl;

import com.hotpotforce.mapper.QuizMapper;
import com.hotpotforce.pojo.Quiz;
import com.hotpotforce.service.QuizService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class QuizServiceImpl implements QuizService {

    @Autowired
    private QuizMapper quizMapper;

    @Override
    public int addQuiz(String question, String op1, String op2, String op3, String op4, String country) {
        try {
            quizMapper.addQuiz(question, op1, op2, op3, op4, country);
        } catch (Exception e) {
            e.printStackTrace();
            return 0;
        }
        return 1;
    }

    @Override
    public List<Quiz> selectQuizByCountry(String country) {
        return quizMapper.selectQuizByCountry(country);
    }

    @Override
    public String findAnswer(String question) {
        return quizMapper.findAnswer(question);

    }

    @Override
    public boolean checkAnswer(String userAnswer, String question) {
        String ans = findAnswer(question);
        return userAnswer.equals(ans);
    }
}
