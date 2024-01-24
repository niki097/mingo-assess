// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Profile from './pages/Profile';
import Login from './pages/Login';
import Header from './component/header/Header';
import Home from './pages/Home';
import './App.css'
import Faq from './pages/faq';
import Dashboard from './pages/Dashboard';

const App = () => {

  const toast = (msg) => {
    // Display a success toast
    toast.success(msg, {
      position: toast.POSITION.TOP_RIGHT,
    });
  };



  return (
    <div className='App'>
    <Router>
    <Header />
    <Routes>
    <Route path="/" element={<Home/>} />
      <Route path="/signin" element={<Login />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/faq" element={<Faq />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  </Router>
  </div>
  );
};

export default App;
