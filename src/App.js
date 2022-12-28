import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from'./pages/About';
import Posts from'./pages/Posts';
import Search from './pages/Search';
import UseEffectInfiniteLoop from './pages/post/UseEffectInfiniteLoop';
import Router404 from './pages/post/Router404';
import BJ1712 from './pages/post/BJ1712';
import BJ2292 from './pages/post/BJ2292';
import BJ4344 from './pages/post/BJ4344';
import Test from './pages/post/Test';

function App() {
  return (
    <BrowserRouter>  {/*  basename={process.env.PUBLIC_URL}  */}
      <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/posts' element={<Posts/>}/>
          <Route path='/search' element={<Search/>}/>
          <Route path='/posts/UseEffect_infinite_loop' element={<UseEffectInfiniteLoop/>}/>
          <Route path='/posts/Router_404' element={<Router404/>}/>
          <Route path='/posts/BJ1712'  element={<BJ1712/>}/>
          <Route path='/posts/BJ2292' element={<BJ2292/>}/>
          <Route path='/posts/BJ4344' element={<BJ4344/>}/>
          <Route path='/posts/test' element={<Test/>}/>
        </Routes>
      <Footer/>
    </BrowserRouter>
  );
};

export default App;
