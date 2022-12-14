package com.hotpotforce.controller;

import com.hotpotforce.pojo.Quiz;
import com.hotpotforce.service.QuizService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class QuizController {

    @Autowired
    private QuizService quizService;

    @CrossOrigin
    @GetMapping("/getQuizs")
    public List<Quiz> quizByCountry(String country) {
        return quizService.selectQuizByCountry(country);
    }

    @CrossOrigin
    @PostMapping("/addtQuiz")
    public int addQuiz(String question, String op1, String op2, String op3, String op4, String country) {
        return quizService.addQuiz(question, op1, op2, op3, op4, country);
    }

    @CrossOrigin
    @GetMapping("/checkQuizAns")
    public boolean checkAnswer(String userAnswer, String question) {
        System.out.println("question->"+question);
        boolean result = quizService.checkAnswer(userAnswer,question);
        return result;
    }

}
