import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../css/Styles.css';
import Logo from '../img/logo.png';
import Background from '../img/background.png';

export default function Result() {
    const recipes = useLocation().state;
    console.log("recipes-->", recipes)
    return (
        <div>
        {recipes.map((recipe) => (
            <Recipe
            key={recipe.id}
            recipeName = {recipe.recipeName}
            photoPath = {recipe.photoPath}
            />
        ))}
        </div>
    )
}

function Recipe(recipeName, photoPath) {


    return(
        <>
        <div className='body'>
            <div className='section'>
                <Link to=''><img src={photoPath} className='section-img' alt='section-img'/></Link>
                <div className='section-desc'>{recipeName}</div>
                <div className='section-creater'>
                    <img src={HeadImg} />
                    <a>Nancy</a>
                    <img src={Like1}  style={{float:'right', width:'10%', marginRight:'5%'}}  onclick={Like} id='like1'/>
                    <img src={Like2}  style={{float:'right', width:'10%', marginRight:'5%', display:'none'}}  onclick={Like} id='like2'/>
                </div>
            </div>
        </div>
        </>
    )
}