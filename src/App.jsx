import React, { useEffect } from 'react';
import { Routes, Route,  useLocation } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './GlobalStyled';

import theme from './theme';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from'./pages/About';
import Posts from'./pages/Posts';
import Search from './pages/Search';
// 포스트
import UseEffectInfiniteLoop from './pages/post/react/UseEffectInfiniteLoop';
import Router404 from './pages/post/react/Router404';
import BJ1712 from './pages/post/BaekjunProblem/BJ1712';
import BJ2292 from './pages/post/BaekjunProblem/BJ2292';
import BJ4344 from './pages/post/BaekjunProblem/BJ4344';
import ReactFragment from './pages/post/react/React-Fragment';
import ClipBoardCopy from './pages/post/javascript/ClipBoardCopy';
import StyledComponent from './pages/post/styledComponent/styledComponent';
import StyledComponentGlobleStyle from './pages/post/styledComponent/styledComponentGlobleStyle';

function App() {

  const location = useLocation(); 

  useEffect(()=>{
    if(location.state !== null){
      const htmlTitle = document.querySelector("title");
      htmlTitle.innerHTML = location.state.Title;
    }
  },[location.state])

  return (
    <ThemeProvider theme={theme}> 
      <GlobalStyle/>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/search' element={<Search/>}/>
        <Route path='/posts' element={<Posts/>}/>
        <Route path='/posts/UseEffect_infinite_loop' element={<UseEffectInfiniteLoop/>}/>
        <Route path='/posts/Router_404' element={<Router404/>}/>
        <Route path='/posts/BJ1712'  element={<BJ1712/>}/>
        <Route path='/posts/BJ2292' element={<BJ2292/>}/>
        <Route path='/posts/BJ4344' element={<BJ4344/>}/>
        <Route path='/posts/React-Fragment' element={<ReactFragment />}/>
        <Route path='/posts/ClipBoardCopy' element={<ClipBoardCopy />}/>
        <Route path='/posts/StyledComponent' element={<StyledComponent />}/>
        <Route path='/posts/StyledComponent-GlobleStyle' element={<StyledComponentGlobleStyle />}/>
      </Routes>
      <Footer/>
    </ThemeProvider>
  );
};

export default App;
