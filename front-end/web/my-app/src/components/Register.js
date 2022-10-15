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

    const registerURL = `http://localhost:8080/registeration?username=${username}&password=${password}&nation=${nationality}`;


    const handleButtonClick = event => {
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
            body: JSON.stringify(registerData),
        })
    }

    return (
        <div>
            <h3>Create Account</h3>
            <form onSubmit={handleButtonClick}>
                {/* <!-- username input--> */}
                <p>Username:</p>
                <label><input type="text" ref={username} name="username" placeholder="Enter your username" /></label>
                <br/>

                {/* <!-- password input --> */}
                <p>Password:</p>
                <label><input type="password" ref={password} name="password" id="password" placeholder="length between 5-15"/></label>
                <br/>

                {/* <!-- email input --> */}
                <p>Email:</p>
                <label><input type="email" ref={email} name="email" id="email" placeholder="Enter your email"/></label>
                <br/>
                
                <p>Cusine/Nationality:</p>
                <label><input type="nationality" ref={nationality} name="nationality" id="nationality" placeholder="Enter your nationality"/></label>
                <br/>

                {/* <!-- submit button--> */}         
                <label><button type="submit" value="Register"/>Register</label>
                <br/>
                <br/>
                <Link to='/' type='submit' className='Save-Btn'>Back to sign in</Link>
            </form>
        </div>
    )
}