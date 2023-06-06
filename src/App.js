import React from 'react';
import {  Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';



import Footer from './Components/Footer';
import './App.css';
import Contact from './Components/Contact';
import Skills from './Components/Skills';
import Hero from './Components/Hero';
import About from './Components/About';
import Projects from './Components/Projects';

const App = () => {
  return (
    <>
    <Navbar/>
    <Routes>
    <Route path="/" element={<Hero />} />
    <Route path="/about" element={<About />} />
    <Route path="/projects" element={<Projects />} />
    <Route path="/skills" element={<Skills />} />
    <Route path="/contact" element={<Contact />} />
  </Routes>
   <Footer />
    
    </>
  );
};

export default App;
