import React from 'react';
import { Link,useLocation, useNavigate } from 'react-router-dom';
import '../css/Styles.css';
import HeadImg from '../img/search3.png';

import SearchImg from '../img/filter.png';
import HomeImg from '../img/home.png';
import Share from '../img/share.png';
import Shop from '../img/hot.png';
import MeImg from '../img/me.png';


export default function Search() {

    const user = useLocation().state;
    console.log(user);

    const navigate= useNavigate();
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
    
    return(
        <>
        <div className='body'>
            <div className='search-header'>
                <input className='search-input'/>
                <img src={HeadImg} style={{float:'right', marginLeft:'3%'}} />
            </div>
            <div className='search-title'>
                <h1>INGREDIENT</h1>
            </div>
            <div className='meet'>
                <p>MEET</p>
                <div className='test'>test</div>
            </div>
            <div className='vegetables'>
                <p>VEGETABLES</p>
            </div>
            <div className='other'>
                <p>OTHER</p>
            </div>
        </div>
        <button onClick={toSearch}><img src={SearchImg} className='search-img' /></button>
        <button onClick={toHome}><img src={HomeImg} className='home-img' /></button>
        <button onClick={toCreate}><img src={Share} className='share-img' /></button>
        <button onClick={toChecklist}><img src={Shop} className='shop-img' /></button>
        <button onClick={toMe}><img src={MeImg} className='me-img' /></button>
        </>
    )
}