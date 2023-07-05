import Nav from './components/Nav';
import React from 'react';
import Cursor from './components/Cursor';

function App() {
  return(
    <>
    <Cursor />
    <div className="flex p-5">
      <Nav />
      <div className="main-container">
        <h1>PHOTOS GO HERE</h1>
      </div>
    </div>
    </>
  );
}

export default App;
