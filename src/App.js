import React from 'react';
import Home from './pages/Home';

function App(props) {
  return (
    <div>
      <Home content={props.content}></Home>
    </div>
  );
};

export default App;
