import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../css/Styles.css';
import HomeImg from '../img/home.png';
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
        navigate('/Home', {state: user})
    }
    const toQuiz= () => {
        navigate('/Quiz', {state: user})
    }
    function NavBar() {
        console.log(user);
        const toMe= () => {
            navigate('/me', {state: user})
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