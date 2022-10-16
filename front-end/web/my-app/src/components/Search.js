import React, { useEffect, useRef, useState } from 'react';
import { Link,useLocation, useNavigate } from 'react-router-dom';
import '../css/Styles.css';
import HeadImg from '../img/search3.png';

import SearchImg from '../img/filter.png';
import HomeImg from '../img/home.png';
import ShareImg from '../img/share.png';
import ShopImg from '../img/hot.png';
import MeImg from '../img/me.png';


export default function Search() {

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

    const ingredient = useRef(null);
    const Cusine = useRef(null);
    const recipeName = useRef(null);

    const initialRecipes = [];
    const [recipes, setRecipes] = useState(initialRecipes);

    const filterURL = `http://localhost:8080/filter?cookingTime=60&ingredient=${ingredient}&nationality=${Cusine}`;
    const searchRUL = `http://localhost:8080/searchRecipe?recipeName=${recipeName}`

    async function search() {
        const response = await fetch(searchRUL);
        const recipes = await response.json();
        setRecipes(recipes);
    }
    async function filter() {
        const response = await fetch(filterURL);
        const recipes = await response.json();
        setRecipes(recipes);
    }
    // const rrecipe = [
    //     {first : "a"},
    //     {second : "b"},
    // ]
    const navigate2 = useNavigate();

    function SearchByName() {
        console.log("search", recipeName.current.value)
        search();
        console.log("Recipes", recipes)
        const toResult= () => {
            navigate2('/Result', {state: recipes})
        }
        toResult()
    }

    const confirmFilter = event => {
        event.preventDefault();
        console.log("filter", ingredient.current.value, Cusine.current.value)
        filter();
        console.log("Recipes", recipes)
        const toResult= () => {
            navigate2('/Result', {state: recipes})
        }
        toResult()
    }
    
    return(
        <>
        <div className='body'>
            <div className='search-header'>
                <input type="text" ref={recipeName} placeholder="Search recipe name, eg ..." className='search-input'/>
                <img src={HeadImg} onClick={SearchByName} style={{float:'right', marginLeft:'3%'}} />
            </div>
            
            <div className='search-title'>
                <h1>Filter</h1>
            </div>
            <form onSubmit={confirmFilter}>
                <p>Filter by ingredient:</p>
                <label><input type="text" ref={ingredient} name="username" placeholder="Input Ingredient" className='filter-input'/></label>
                <p>Tips:Search the recipe including your input ingredient, eg. eggs, milk, apple...</p>
                <br/>
                <hr />
                <p>Filter by Cusine:</p>
                <label><input type="text" ref={Cusine} name="username" placeholder="Input Cusine" className='filter-input'/></label>
                <p>Tips:Search the recipe based on cusine, eg. Italy, Chinese, Thai...</p>
                <br/>
                <button type="submit" className='register-button'>Confirm</button>
            </form>
        </div>
        {NavBar()}
        </>
    )
}