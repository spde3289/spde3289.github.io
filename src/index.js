import React from 'react';
import ReactDOM from 'react-dom/client';
import { 
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import App from './App';
import About from'./pages/About';
import Posts from'./pages/Posts';
import First from './pages/post/First';
import Second from './pages/post/Second';
import './css/reset.css'

const content = [
  {key: 1, title: 'useEffect 무한루프', body: 'asdasd', date:'2022.09.13', category: 'react', link: '/first'},
  {key: 2, title: '첫 글', body: 'asdasd', date:'2022.09.13', category: '웹', link: '/second'},
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route 
      path='/' 
      element={<App content={content}/>}/>
      <Route path='about' element={<About/>} />
      <Route path='posts' element={<Posts/>} />
      <Route path='first' element={<First/>} />
      <Route path='second' element={<Second/>} />
    </Routes>
  </BrowserRouter>
);
