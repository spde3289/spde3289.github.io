import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from'./pages/About';
import Posts from'./pages/Posts';
import Search from './pages/Search';
import UseEffectInfiniteLoop from './pages/post/UseEffectInfiniteLoop';
import Router404 from './pages/post/Router404';
import NotFound from './404NotFound';

function App(props) {
  return (
    <>
    <Header/>
    <Routes>
      <Route path='/*' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/posts' element={<Posts/>}/>
      <Route path='/search' element={<Search/>}/>
      <Route path='/posts/UseEffect_infinite_loop' element={<UseEffectInfiniteLoop/>}/>
      <Route path='/posts/Router_404' element={<Router404/>}/>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
    <Footer/>
    </>
  );
};

export default App;
