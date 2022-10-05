import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Styles.css';
import HeadImg from '../img/search3.png';

export default function Search() {
    
    return(
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
        
    )
}