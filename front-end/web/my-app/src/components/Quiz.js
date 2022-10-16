import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import '../css/Styles.css';
import Logo from '../img/logo.png';
import Background from '../img/background.png';

import SearchImg from '../img/filter.png';
import HomeImg from '../img/home.png';
import ShareImg from '../img/share.png';
import ShopImg from '../img/hot.png';
import MeImg from '../img/me.png';


export default function QuizList() {

    const user = useLocation().state;
    console.log(user);

    const navigate= useNavigate();
    function NavBar() {
        console.log(user);
        const toMe= () => {
            navigate('/me', {state: user})
        }
        const toHome= () => {
            navigate('/Home', {state: user})
        }
        const toCreate= () => {
            navigate('/Create', {state: user})
        }
        const toSearch= () => {
            navigate('/Search', {state: user})
        }
        const toChecklist= () => {
            navigate('/Checklist', {state: user})
        }
        
        return (
            <div className='navigation-bar'>
            <button onClick={toSearch} className='searchBtn'><img src={SearchImg} className='search-img' />Search</button>
            <button onClick={toHome} className='homeBtn'><img src={HomeImg} className='home-img' />Home</button>
            <button onClick={toCreate} className='createBtn'><img src={ShareImg} className='share-img' /></button>
            <button onClick={toChecklist} className='checklistBtn'><img src={ShopImg} className='shop-img' />CheckList</button>
            <button onClick={toMe} className='meBtn'><img src={MeImg} className='me-img' />Me</button>
            </div>
        )
    }


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
        <button type='button' onClick={calculateScore} className='quiz-submit'><h2>submit</h2></button>

        {NavBar()}
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
                    <div className='quiz-a'>
                        <button type='button' onClick={() => handleClick("a", question, id)} style={{width:'20pt', float:'left'}}>A</button><p>{optionA}</p>
                    </div>
                    <div className='quiz-b'>
                        <button type='button' onClick={() => handleClick("b", question, id)} style={{width:'20pt', float:'left'}}>B</button><p>{optionB}</p>
                    </div>
                    <div className='quiz-c'>
                        <button type='button' onClick={() => handleClick("c", question, id)} style={{width:'20pt', float:'left'}}>C</button><p>{optionC}</p>
                    </div>
                    <div className='quiz-d'>
                        <button type='button' onClick={() => handleClick("d", question, id)} style={{width:'20pt', float:'left'}}>D</button><p>{optionD}</p>
                    </div>
                </div>
            </main>
        </>
    )
}

