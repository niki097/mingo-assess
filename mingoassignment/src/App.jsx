// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Profile from './pages/Profile';
import Login from './pages/Login';
import Header from './component/header/Header';
import Home from './pages/Home';
import './App.css'

const App = () => {
  return (
    <div className='App'>
    <Router>
    <Header />
    <Routes>
    <Route path="/" element={<Home/>} />
      <Route path="/signin" element={<Login />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  </Router>
  </div>
  );
};

export default App;
