import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react';

import './App.css';

import Create from './components/Create';
import Home from './components/Home';
import Me from './components/Me';
import Search from './components/Search';
import SignIn from './components/SignIn';
import Register from "./components/Register";
import QuizList from "./components/Quiz";
import CheckList from "./components/CheckList";
import Result from "./components/Result";


function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<SignIn />} />
            <Route path='create' element={<Create />} />
            <Route path='home' element={<Home />} />
            <Route path='me' element={<Me />} />
            <Route path='search' element={<Search />} />
            <Route path='checklist' element={<CheckList />} />
            <Route path='register' element={<Register />} />
            <Route path='quiz' element={<QuizList />} />
            <Route path='result' element={<Result />} />
        </Routes>
        {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;