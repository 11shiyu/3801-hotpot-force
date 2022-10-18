import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import '../css/Styles.css';

import SearchImg from '../img/filter.png';
import HomeImg from '../img/home.png';
import ShareImg from '../img/share.png';
import ShopImg from '../img/hot.png';
import MeImg from '../img/me.png';

import Logo from '../img/logo.png';
import Background from '../img/background.png';
import HeadImg from '../img/search3.png';
import Like1 from '../img/like1.png';
import Like2 from '../img/like2.png';
import image1 from '../img/Sushi.jpg';

export default function Result() {
    const recipes = useLocation().state;

    const navigate= useNavigate();
    const toHome= () => {
        navigate('/Home', {state: recipes})
    }
    const toQuiz= () => {
        navigate('/Quiz', {state: recipes})
    }
    function NavBar() {
        console.log(recipes);
        const toMe= () => {
            navigate('/me', {state: recipes})
        }
        const toCreate= () => {
            navigate('/Create', {state: recipes})
        }
        const toSearch= () => {
            navigate('/Search', {state: recipes})
        }
        const toChecklist= () => {
            navigate('/Checklist', {state: recipes})
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



    return(
        <>
        <div className='body'>
            <div className='section'>
                <Link to=''><img src={image1} className='section-img' alt='section-img'/></Link>
                <div className='section-desc'></div>
                {recipes.recipeName}
                <div className='section-creater'>
                    <img src={HeadImg} />
                    <a>Nancy</a>
                    <img src={Like1}  style={{float:'right', width:'10%', marginRight:'5%'}}  onClick={Like} id='like1'/>
                    <img src={Like2}  style={{float:'right', width:'10%', marginRight:'5%', display:'none'}}  onClick={Like} id='like2'/>
                </div>
            </div>
        </div>
        {NavBar()}
        </>
    )
}

function Like() {
    var state1 = document.getElementById('like1');
    var state2 = document.getElementById('like2');
    console.log(state1.style.display)
    if (state1.style.display === "block") {
        state1.style.display = "none";
        state2.style.display = "block";
    } else {
        state1.style.display = "block";
        state2.style.display = "none";
    }
    
}

// function Recipe({recipeName, photoPath}) {


//     return(
//         <>
//         <div className='body'>
//             <div className='section'>
//                 <Link to=''><img src={require({photoPath})} className='section-img' alt='section-img'/></Link>
//                 <div className='section-desc'>{recipeName}</div>
//                 <div className='section-creater'>
//                     <img src={HeadImg} />
//                     <a>Nancy</a>
//                     <img src={Like1}  style={{float:'right', width:'10%', marginRight:'5%'}}  onClick={Like} id='like1'/>
//                     <img src={Like2}  style={{float:'right', width:'10%', marginRight:'5%', display:'none'}}  onClick={Like} id='like2'/>
//                 </div>
//             </div>
//         </div>
//         </>
//     )
// }