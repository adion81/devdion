import React from 'react';
// import logo from './logo.svg';
import './styles/tailwind.css';
import './App.css';
import {Router} from '@reach/router';
import Main from './views/Main';
import Hamburger from './components/Hamburger';


function App() {

  
  return (
    <div className="mx-auto font-mono bg-white ">
      <h1 className="border-b p-1 border-bluey-100 bg-bluey-900 text-white flex items-center">
        <Hamburger />
        <p className="text-lg text-bluey-100 ">drien Dion</p>
      </h1>
      <Main  />
   
      
    </div>
  );
}

export default App;
