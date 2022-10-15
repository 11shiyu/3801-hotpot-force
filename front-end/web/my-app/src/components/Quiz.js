import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/Styles.css';
import Logo from '../img/logo.png';
import Background from '../img/background.png';

export default function QuizList() {

    const initialQuizList = [];
    const [quizs, setQuizs] = useState(initialQuizList);

    useEffect(() => {
        getQuestion();
    }, []);

    //get question and selectionABCD
    async function getQuestion() {
        const questionURL = `http://localhost:8080/getQuizs?country=China`;
        const response = await fetch(questionURL);
        const quizList = await response.json();
        // const question = questions.question;
        // const optionA = userInfo.optionA;
        // const optionB = userInfo.optionB;
        // const optionC = userInfo.optionC;
        // const optionD = userInfo.optionD;
    }

    async function getAnswer(select, question) {
        const questionURL = `http://localhost:8080/checkQuizAns?userAnswer=${select}&question=${question}`;
        const response = await fetch(questionURL);
        const result = await response.json();
    }

    const userSelection = [
        {"question1" : true},
        {"question2" : true},
        {"question3" : true},
        {"question4" : true},
    ];

    return {

        
    }

}

function Quiz({id, question, optionA, optionB, optionC, optionD}) {
    
    return(
        <div>
            <h2>Question {id}</h2>
            <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">{question}</FormLabel>
            <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name={question}
            >
            <FormControlLabel value="optionA" control={<Radio />} label={optionA} />
            <FormControlLabel value="optionB" control={<Radio />} label={optionB} />
            <FormControlLabel value="optionC" control={<Radio />} label={optionC} />
            <FormControlLabel value="optionD" control={<Radio />} label={optionD} />
            </RadioGroup>
            </FormControl>
        </div>
    )
}

