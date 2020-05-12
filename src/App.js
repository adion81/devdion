import React from 'react';
// import logo from './logo.svg';
import './styles/tailwind.css';
import './App.css';
import {Router, Link} from '@reach/router';
import Main from './views/Main';
import Projects from './views/Projects';
import Hamburger from './components/Hamburger';


function App() {

  
  return (
    <div className="mx-auto font-mono bg-white ">
      <h1 className="border-b p-1 border-bluey-100 bg-bluey-900 text-white flex items-center justify-between">
        <div className="flex items-center">
          <Hamburger />
          <p className="text-lg text-bluey-100 ">drien Dion</p>
        </div>
        <ul className="flex ">
          <li className="mr-6">
            <Link to="/devdion" className="text-blue-500 hover:text-blue-800" >Home</Link>
          </li>
          <li className="mr-6">
            <Link to="/devdion/projects" className="text-blue-500 hover:text-blue-800" >Projects</Link>
          </li>
        </ul>

      </h1>
      <Router>
        <Main path="devdion" />
        <Projects path="devdion/projects" />
      </Router> 
      
    </div>
  );
}

export default App;
