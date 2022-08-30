import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
    <BrowserRouter>
      <Routes><Route  Path='Home' element={<Home/>} /></Routes>
      <Routes><Route Path='About' element={<About/>} /> </Routes>
    </BrowserRouter>
  );
};

export default App;
