import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';

import '../css/Styles.css';
import Search from '../img/filter.png';
import HomeImg from '../img/home.png';
import Share from '../img/share.png';
import CheckList from '../img/hot.png';
import Me from '../img/me.png';

export default function footer() {
    return(
        <Navbar fixed="bottom" className='nav-bar'>
            <Container>
                <Navbar.Collapse id='navbarScroll'>
                    <Nav className='me-auto'>
                        <Link to='search'><img src={Search} className='search-img'/></Link>
                        <Link to='home'><img src={HomeImg} className='home-img' /></Link>
                        <Link to='create'><img src={Share} className='share-img' /></Link>
                        <Link to='checkList'><img src={CheckList} className='shop-img' /></Link>
                        <Link to='me'><img src={Me} className='me-img' /></Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    
    )
}