import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../css/Styles.css';
import Logo from '../img/logo.png';
import Background from '../img/background.png';

export default function Result() {
    const rrecipe = useLocation().state;
    console.log("recipes-->", rrecipe)
    return (
        {rrecipe}
    )
}