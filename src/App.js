import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { ThemeProvider, createGlobalStyle } from 'styled-components';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from'./pages/About';
import Posts from'./pages/Posts';
import Search from './pages/Search';
// 포스트
import UseEffectInfiniteLoop from './pages/post/UseEffectInfiniteLoop';
import Router404 from './pages/post/Router404';
import BJ1712 from './pages/post/BJ1712';
import BJ2292 from './pages/post/BJ2292';
import BJ4344 from './pages/post/BJ4344';

function App() {

  const theme = {
    boxSize: {
      main: '1000px',
    },
    fontSize: {
      subTitle: '26px',
      nomal: '16px',
    },
    margin: {
      titBtm: '20px',
      textBtm: '50px',
    },
    display : {
      flex: 'flex',
      content: 'center'
    },
  };

  return (
    <ThemeProvider theme={theme}> 
      <GloblaStyle/>
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
            </Routes>
        <Footer/>
      </BrowserRouter>
    </ThemeProvider>
  );
};

const GloblaStyle = createGlobalStyle`
  body {
    margin: 0;
  };

  ul, li {
  text-decoration: none;
  list-style:none;
  padding-left:0px;
  margin: 0;
  };

  h2, p {
    margin: 0;
  };

  h3 {
    font-size: 1.5rem;
  };

  p {
    font-size: 1rem;
  };

  a {
    text-decoration: none;
    color: #000;
  };
`;

export default App;
