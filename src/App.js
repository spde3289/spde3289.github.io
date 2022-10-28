import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from'./pages/About';
import Posts from'./pages/Posts';
import Search from './pages/Search';
import First from './pages/post/First';
import Second from './pages/post/Second';

function App(props) {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/posts' element={<Posts/>}/>
      <Route path='/search' element={<Search/>}/>
      <Route path='/posts/first' element={<First/>}/>
      <Route path='/posts/second' element={<Second/>}/>
    </Routes>
  );
};

export default App;
