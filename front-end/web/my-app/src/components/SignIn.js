import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/Styles.css';
import Logo from '../img/logo.png';
import Background from '../img/background.png';

export default function SignIn() {
    const signinURL = '';
    const registerURL = '';

    console.log("come signin")
    const username = useRef(null);
    const password = useRef(null);

    useEffect(() => {
        getData();
    }, []);

    async function getData() {
        const response = await fetch(registerURL);
        const userInfo = await response.json();
        const getUsername = userInfo.username;
        const getPassword = userInfo.password;
    }

    const handleButtonClick = event => {
        event.preventDefault();
        console.log("username->", username.current.value)
        console.log("password->", password.current.value)
    }

    return (
        <div className='sign-in-body' style={{ backgroundImage: `url(${Background})`}}>
            <div style={{height:'100pt'}}></div>
            <div className='sign-in-title'>Welcome</div>
            <div className='img-div'>
                <img src={Logo} className='sign-in-img' alt='Logo'/>
            </div>
            <form onSubmit={handleButtonClick}>
                <div className='account'>
                    <input className='username' ref={username} placeholder='Username (*)'/>
                    <br/>
                    <input type='password' className='password' ref={password} placeholder='Password (*)'/>
                </div>
            </form>
            <div className='forget-signUp'>
                <div>
                    Forget your password?
                    <br/>
                    <br/>
                    <Link to="/Register">Sign up here</Link>
                </div>
            </div>
            <div style={{height:'50pt'}}>
                <Link to='home'>
                    <button className='sign-Btn' type='primary'>Sign In</button>
                </Link>
            </div>
            <div className='policy'>
                By signng up, you are agree to our <a style={{textDecoration:'underline'}}>Term of Service</a> and <a style={{textDecoration:'underline'}}>Privacy Policy</a>
            </div>
        </div>
    )
}