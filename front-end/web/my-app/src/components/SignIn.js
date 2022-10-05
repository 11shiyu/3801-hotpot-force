import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Styles.css';
import Logo from '../img/logo.png';
import Background from '../img/background.png';

export default function SignIn() {
    return (
        <div className='sign-in-body' style={{ backgroundImage: `url(${Background})`}}>
            <div style={{height:'100pt'}}></div>
            <div className='sign-in-title'>Welcome</div>
            <div className='img-div'>
                <img src={Logo} className='sign-in-img' alt='Logo'/>
            </div>
            <div className='account'>
                <input className='username' placeholder='Username (*)'/>
                <br/>
                <input className='password' placeholder='Password (*)'/>
            </div>
            <div className='forget-signUp'>
                <p>
                    Forget your password?
                    <br/>
                    <br/>
                    Sign up here
                </p>
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