import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/Styles.css';
import Logo from '../img/logo.png';
import Background from '../img/background.png';

export default function Create() {
    const createRecipeURL = '';
    const createIngredientURL = '';

    console.log("come Create")
    const recipeName = useRef(null);
    const cookingTime = useRef(null);
    const description = useRef(null);
    const nationality = useRef(null);
    const photoPath = ''; // need fix
    const cultureBackground = useRef(null);

    const ingredient = useRef(null);

    const handleButtonClick = event => {
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
        ];

        const ingredientData = [
            {"ingredient": ingredient.current.value},
        ];

        console.log("registerData->", JSON.stringify(recipeData))
        console.log("ingredientData->", JSON.stringify(ingredientData))

        fetch(createRecipeURL, {
            method: 'POST',
            body: JSON.stringify(recipeData),
        })

        fetch(createIngredientURL, {
            method: 'POST',
            body: JSON.stringify(ingredientData),
        })
    }

    return (
        <div>
        <h3>Create your Recipe</h3>
        <form onSubmit={handleButtonClick}>
            {/* <!-- username input--> */}
            <p>Recipe name:</p>
            <label><input type="text" ref={recipeName} name="username" placeholder="Enter your username" /></label>
            <br/>

            {/* <!-- password input --> */}
            <p>Cooking time:</p>
            <label><input type="text" ref={cookingTime} name="password" id="password" placeholder="length between 5-15"/></label>
            <br/>

            {/* <!-- email input --> */}
            <p>Recipe Description:</p>
            <label><input type="text" ref={description} name="email" id="email" placeholder="Enter your email"/></label>
            <br/>
            
            <p>Cusine/Nationality:</p>
            <label><input type="text" ref={nationality} name="nationality" id="nationality" placeholder="Enter your nationality"/></label>
            <br/>

            <p>Ingredient:</p>
            <label><input type="text" ref={ingredient} name="nationality" id="nationality" placeholder="Enter your nationality"/></label>
            <br/>

            <p>Culture Background:</p>
            <label><input type="text" ref={cultureBackground} name="nationality" id="nationality" placeholder="Enter your nationality"/></label>
            <br/>

            {/* <!-- submit button--> */}         
            <label><button type="submit" value="Register"/>Send</label>
            <br/>
            <br/>
        </form>
    </div>
    )
}