import React, { useEffect, useRef, useState } from 'react';
import { Link,useLocation, useNavigate } from 'react-router-dom';
import '../css/Styles.css';
import Logo from '../img/logo.png';
import Background from '../img/background.png';
import SearchImg from '../img/filter.png';
import HomeImg from '../img/home.png';
import ShareImg from '../img/share.png';
import ShopImg from '../img/hot.png';
import MeImg from '../img/me.png';

export default function Create() {
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



    // console.log("come Create")
    const recipeName = useRef(null);
    const cookingTime = useRef(null);
    const description = useRef(null);
    const nationality = useRef(null);
    const photoPath = ''; // need fix
    const cultureBackground = useRef(null);

    const ingredient = useRef(null);

    const handleButtonClick = event => {
        const createRecipeURL = `http://localhost:8080/createRecipe?cookingTime=${cookingTime.current.value}&recipeName=${recipeName.current.value}&nationality=${nationality.current.value}&photoPath='null'&description=${description.current.value}`;

        event.preventDefault();
        console.log("recipeName->", recipeName.current.value)
        console.log("nationality->", nationality.current.value)

        const recipeData = [
            {"cookingTime": cookingTime.current.value},
            {"recipeName": recipeName.current.value},
            {"description": description.current.value},
            {"nationality": nationality.current.value},
            {"photoPath": photoPath},
            {"cultureBackground": cultureBackground.current.value},
            {"ingredient" : ingredient.current.value},
        ];

        const ingredientData = ingredient.current.value;

        console.log("registerData->", JSON.stringify(recipeData))

        fetch(createRecipeURL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(recipeData),
        })

    }

    return (
        <>
        <div style={{minHeight:'540pt'}}>
        <h3 className='create-recipe-title'>Create your Recipe</h3>
            <form onSubmit={handleButtonClick} className='create-body'>
                {/* <!-- username input--> */}
                <div className='create-title'>
                    <label><input type="text" ref={recipeName} name="username" placeholder="Title" style={{border:'none', fontSize:'20pt'}}/></label>
                </div>
                <br/>

                {/* <!-- email input --> */}
                <p>Description</p>
                <label><input type="text" ref={description} name="email" id="email" placeholder="Recipe description" className='create-description'/></label>
                <br/>

                {/* <!-- password input --> */}
                
                <p>Cusine/Nationality:</p>
                <label><input type="text" ref={nationality} name="nationality" id="nationality" placeholder="Enter your nationality" className='create-cusine'/></label>
                <br/>

                <p style={{marginTop:'15pt'}}>Ingredient:</p>
                <label><input type="text" ref={ingredient} name="nationality" id="nationality" placeholder="eg. [beef, salt, rice]" className='create-ingredient'/></label>
                <br/>

                <div style={{marginTop:'15pt', verticalAlign:'middle'}}>
                    <p style={{float:'left'}} className='cookTime'>Cook time</p>
                    <input type="text" ref={cookingTime} name="password" id="password" placeholder="eg. 1 hr 30 mins" className='create-time'/>
                    <br/>
                </div>
        
                <p style={{marginTop:'30pt'}}>Culture Background:</p>
                <label><input type="text" ref={cultureBackground} name="nationality" id="nationality" placeholder="eg. origin and story of the dish..." className='create-cultural'/></label>
                <br/>

                {/* <!-- submit button--> */}         
                <label><button type="submit" value="Register" className='create-send'>Send</button></label>
                <br/>
                <br/>
            </form>
        </div>
        {NavBar()}
        </>
    )
}