import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react';

import './App.css';

import Create from './components/Create';
import Home from './components/Home';
import Me from './components/Me';
import Search from './components/Search';
import Shop from './components/Shop';
import SignIn from './components/SignIn';
import Footer from "./components/footer";

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<SignIn />} />
            <Route path='create' element={<Create />} />
            <Route path='home' element={<Home />} />
            <Route path='me' element={<Me />} />
            <Route path='search' element={<Search />} />
            <Route path='shop' element={<Shop />} />
        </Routes>
        <Footer />
    </BrowserRouter>
  );
}

export default App;