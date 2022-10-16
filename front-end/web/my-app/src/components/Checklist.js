import React from 'react';
import { Link,useLocation, useNavigate } from 'react-router-dom';
import '../css/Styles.css';

import Search from '../img/filter.png';
import HomeImg from '../img/home.png';
import Share from '../img/share.png';
import Shop from '../img/hot.png';
import MeImg from '../img/me.png';


export default function Checklist() {
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

        <button onClick={toSearch}><img src={Search} className='search-img' /></button>
        <button onClick={toHome}><img src={HomeImg} className='home-img' /></button>
        <button onClick={toCreate}><img src={Share} className='share-img' /></button>
        <button onClick={toChecklist}><img src={Shop} className='shop-img' /></button>
        <button onClick={toMe}><img src={MeImg} className='me-img' /></button>
        </>
    )
}