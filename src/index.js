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
import './css/reset.css'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>}/>
      <Route path='about' element={<About/>} />
      <Route path='posts' element={<Posts/>} />
    </Routes>
  </BrowserRouter>
);
