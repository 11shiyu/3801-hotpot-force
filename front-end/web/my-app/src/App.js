import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react';

import './App.css';

import Create from './components/Create';
import Home from './components/Home';
import Me from './components/Me';
import Search from './components/Search';
import Shop from './components/Checklist';
import SignIn from './components/SignIn';
import Footer from "./components/footer";
import Register from "./components/Register";
import QuizList from "./components/Quiz";
import Checklist from "./components/Checklist";

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<SignIn />} />
            <Route path='create' element={<Create />} />
            <Route path='home' element={<Home />} />
            <Route path='me' element={<Me />} />
            <Route path='search' element={<Search />} />
            <Route path='checklist' element={<Checklist />} />
            <Route path='register' element={<Register />} />
            <Route path='quiz' element={<QuizList />} />
        </Routes>
        {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;