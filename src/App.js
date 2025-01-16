import React from 'react';
import './assets/css/App.css';
import Navbar from './components/Navbar.jsx';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import {  Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      
    </div>
  );
}

export default App;

