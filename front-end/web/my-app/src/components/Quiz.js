import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/Styles.css';
import Logo from '../img/logo.png';
import Background from '../img/background.png';


export default function QuizList() {


    // const initialQuizList = [];
    // const [quizs, setQuizs] = useState(quizList);

    // useEffect(() => {
    //     getQuestion();
    // }, []);

    // //get question and selectionABCD
    // async function getQuestion() {
    //     const questionURL = `http://localhost:8080/getQuizs?country=China`;
    //     const response = await fetch(questionURL);
    //     const quizList = await response.json();
    // }

    function calculateScore() {
        let count = 0;
        {userSelection.map((select) => {
            if (select == true) {
                count++
            }
        })}
        console.log("count->", count)
        return count;

    }


    var quizList = [
        {
            optionA:"选项一",
            optionB:"选项二",
            optionC:"选项三",
            optionD:"选项四",
            country:"China",
            id:1,
            question:"这里是第一题的内容"
        },
        {
            optionA:"选项一",
            optionB:"选项二",
            optionC:"选项三",
            optionD:"选项四",
            country:"Japan",
            id:2,
            question:"这里是第二题的内容"
        },
        {
            optionA:"选项一",
            optionB:"选项二",
            optionC:"选项三",
            optionD:"选项四",
            country:"Italy",
            id:3,
            question:"这里是第三题的内容"
        },
        {
            optionA:"选项一",
            optionB:"选项二",
            optionC:"选项三",
            optionD:"选项四",
            country:"Italy",
            id:4,
            question:"这里是第四题的内容"
        },
    ]


    console.log("quizList-->", quizList)

    return (

        <>
        <div className='home-header'>
            <Link to = '/home' style={{marginLeft:'50pt', textDecoration:'none'}}>Explore</Link>      
            <Link to = '/Quiz' style={{marginLeft:'100pt', textDecoration:'none'}}>Quiz</Link>
        </div>
        {quizList.map((quiz) => (
            <Quiz
            key={quiz.id}
            id = {quiz.id}
            question = {quiz.question}
            optionA = {quiz.optionA}
            optionB = {quiz.optionB}
            optionC = {quiz.optionC}
            optionD = {quiz.optionD}
            />
        ))}
        <br/>
        <button type='button' onClick={calculateScore}>submit</button>
        </>
    )
}

const userSelection = [
    false,
    false,
    false,
    false,
];

function Quiz({id, question, optionA, optionB, optionC, optionD}) {

    async function getAnswer(select, question) {
        const questionURL = `http://localhost:8080/checkQuizAns?userAnswer=${select}&question=${question}`;
        const response = await fetch(questionURL);
        const result = await response.json();
    }
    
    
    function handleClick(select, question, id) {
        console.log("click:", select, question)
        const result = getAnswer(select, question);
        userSelection[id - 1] = true;
        // if (select === 'a') {
        //     userSelection.id = true;
        // } else if (select === 'b') {
        //     userSelection.question2 = true;
        // } else if (select === 'c') {
        //     userSelection.question3 = true;
        // } else if (select === 'd') {
        //     userSelection.question4 = true;
        // }
        console.log("userSelection->", userSelection)
    }

    return(
        <>
            <main>
                <div className='quiz-section'>
                    <h2>Question {id}:</h2>
                    <p id="demo-radio-buttons-group-label" className='quiz-question'>{question}</p>
                    {/* <div>question:{id}</div> */}
                    <div className='quiz-a'><p>{optionA}</p><button type='button' onClick={() => handleClick("a", question, id)}>A</button></div>
                    <div className='quiz-b'><p>{optionB}</p><button type='button' onClick={() => handleClick("b", question, id)}>B</button></div>
                    <div className='quiz-c'><p>{optionC}</p><button type='button' onClick={() => handleClick("c", question, id)}>C</button></div>
                    <div className='quiz-d'><p>{optionD}</p><button type='button' onClick={() => handleClick("d", question, id)}>D</button></div>
                </div>
            </main>
        </>
    )
}



