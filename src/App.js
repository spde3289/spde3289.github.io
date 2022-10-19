import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from'./pages/About';
import Posts from'./pages/Posts';
import First from './pages/post/First';
import Second from './pages/post/Second';

const content = [
  {key: 1, title: 'useEffect 무한루프', body: 'asdasd', date:'2022.09.13', category: 'react', link: '/first'},
  {key: 2, title: '첫 글', body: 'asdasd', date:'2022.09.13', category: '웹', link: '/second'},
];

function App(props) {
  return (
    <Routes>
      <Route path='/' element={<Home content={content}/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/posts' element={<Posts/>}/>
      <Route path='/posts/first' element={<First/>}/>
      <Route path='/posts/second' element={<Second/>}/>
    </Routes>
  );
};

export default App;
