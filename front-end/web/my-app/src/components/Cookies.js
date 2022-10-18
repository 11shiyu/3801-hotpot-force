import React from 'react';

import '../css/Styles.css';

import Back from '../img/arrow-left-solid.svg';
import { Link } from 'react-router-dom';

import CookieImg from '../img/cookie5.jpg';
import HeadImg from '../img/search3.png';
import Like1 from '../img/like1.png';

export default function Cookie() {
    
    return(
        <>
        <div className='cookies-header'>
            <Link to='/home'><img src={Back} alt='Back to home' style={{width:'10%', marginLeft:'5%', marginTop:'3%', float:'left'}} /></Link>
            <img src={HeadImg} style={{width:'15%', marginLeft:'5%', marginTop:'2%', float:'left'}} />
            <p style={{float:'left', marginLeft:'10pt', marginTop:'15pt', width:'30pt'}}>Nancy</p>
            <button className='cookies-follow'>follow</button>
        </div>
        <div className='cookies-section'>
            <img src={CookieImg} style={{width:'100%'}} />
            <div className='cookies-title'>
                <h2>Grapes Cream Cookies!</h2>
                <h3>Creamy and thick~</h3>
                <img src={Like1} style={{float:'right', marginTop:'-13%'}} />
            </div>
            <div className='cookies-ingredients'>
                <h4>Ingredients:</h4>
                <ul>
                    <li>Low flour 110g</li>
                    <li>Butter 60g</li>
                    <li>Powdered sugar 30g</li>
                    <li>Milk power 20g</li>
                    <li>Egg yolks 2</li>
                    <li>Grape thousand 30g</li>
                </ul>
            </div>
            <div className='cookies-progress'>
                <h4>Progress:</h4>
                ① Butter at room temperature, softened ten powdered sugar whipped until fluffy, a small number of times into the egg yolk mixture stir well. <br/>
                ②Sift the low flour and milk powder into a dough, add the grapes and knead well divide into small portions, roll out and flatten into a baking tin, brush the surface with egg yolk mixture.
            </div>
        </div>
        </>
    )
}