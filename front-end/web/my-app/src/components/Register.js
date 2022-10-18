import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/Styles.css';
import Logo from '../img/logo.png';
import Background from '../img/background.png';

export default function Register() {
    console.log("come register")
    const username = useRef(null);
    const password = useRef(null);
    const email = useRef(null);
    const nationality = useRef(null);
    const score = 0;
    const id = 0;


    const handleButtonClick = event => {
        const registerURL = `http://localhost:8080/registeration?username=${username.current.value}&password=${password.current.value}&nation=${nationality.current.value}`;

        event.preventDefault();
        console.log("username->", username.current.value)
        console.log("password->", password.current.value)
        console.log("email->", email.current.value)
        console.log("nationality->", nationality.current.value)

        const registerData = [
            {"username": username.current.value},
            {"password": password.current.value},
            {"nationality": nationality.current.value},
            {"score": score},
            {"id": id},
            {"email": email.current.value},
        ];
        console.log("registerData->", JSON.stringify(registerData))

        fetch(registerURL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(registerData),
        })
    }

    return (
        <div style={{minHeight:'650pt', backgroundImage: `url(${Background})`}}>
            <div style={{height:'80pt'}}></div>
            <h3 className='register-title'>Create Account</h3>
            <form onSubmit={handleButtonClick} className="register-body">
                {/* <!-- username input--> */}
                <p>Username:</p>
                <label><input type="text" ref={username} name="username" placeholder="Enter your username" className='register-input'/></label>
                <br/>

                {/* <!-- password input --> */}
                <p>Password:</p>
                <label><input type="password" ref={password} name="password" id="password" placeholder="length between 5-15" className='register-input'/></label>
                <br/>

                {/* <!-- email input --> */}
                <p>Email:</p>
                <label><input type="email" ref={email} name="email" id="email" placeholder="Enter your email" className='register-input'/></label>
                <br/>
                
                <p>Cusine/Nationality:</p>
                <label><input type="nationality" ref={nationality} name="nationality" id="nationality" placeholder="Enter your nationality" className='register-input'/></label>
                <br/>

                {/* <!-- submit button--> */}         
                <label><button type="submit" value="Register" className='register-button'>Register</button></label>
                <br/>
                <br/>
                <Link to='/' type='submit' className='register-back'>Back to sign in</Link>
            </form>
        </div>
    )
}