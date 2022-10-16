import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Container, Navbar } from 'react-bootstrap';
import '../css/Styles.css';

import Nav from 'react-bootstrap/Nav';

import '../css/Styles.css';
import Search from '../img/filter.png';
import HomeImg from '../img/home.png';
import Share from '../img/share.png';
import Shop from '../img/hot.png';
import MeImg from '../img/me.png';

import Like1 from '../img/like1.png';
import HeadImg from '../img/search3.png';
import food1 from '../img/cookie5.jpg';
import food2 from '../img/3.jpg'
import food3 from '../img/cake3.jpg';
import food4 from '../img/bread1.jpg';

export default function Me() {
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
        <><div className='body'>
            <div style={{ width: '100%', height: '70pt' }}>
                <img src={Like1} className='me-like' />
            </div>
            <div className='person'>
                <img src={HeadImg} className='me-head' />
                <p className='me-name'>{user}</p>
            </div>
            <div className='me-create'>
                <img src={food1} className='create-img' />
                <img src={food2} className='create-img' />
                <img src={food3} className='create-img' />
                <img src={food4} className='create-img' />
            </div>
        </div>
        <button onClick={toSearch}><img src={Search} className='search-img' /></button>
        <button onClick={toHome}><img src={HomeImg} className='home-img' /></button>
        <button onClick={toCreate}><img src={Share} className='share-img' /></button>
        <button onClick={toChecklist}><img src={Shop} className='shop-img' /></button>
        <button onClick={toMe}><img src={MeImg} className='me-img' /></button>
        </>
    )
}