import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Styles.css';

import Like1 from '../img/like1.png';
import HeadImg from '../img/search3.png';
import food1 from '../img/cookie5.jpg';
import food2 from '../img/3.jpg'
import food3 from '../img/cake3.jpg';
import food4 from '../img/bread1.jpg';

export default function Shop() {
    return(
        <div className='body'>
            <div style={{width:'100%', height:'70pt'}}>
                <img src={Like1} className='me-like'/>
            </div>
            <div className='person'>
                <img src={HeadImg} className='me-head'/>
                <p className='me-name'>Nancy</p>
            </div>
            <div className='me-create'>
                <img src={food1} className='create-img' />
                <img src={food2} className='create-img' />
                <img src={food3} className='create-img' />
                <img src={food4} className='create-img' />
            </div>
        </div>
    )
}