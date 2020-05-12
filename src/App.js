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
      <h1 className="border-b p-1 border-bluey-100 bg-hex text-white flex items-center justify-between">
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

      <footer className="border-b mt-10 p-5 border-bluey-100 bg-hex text-white flex items-center justify-around">
        <div className="bg-rounded text-center">
          <h3 className="text-lg">Contact</h3>
          <p>adion81@gmail.com</p>
        </div>
        <div className=" text-center">
          <h3 className="text-lg ">Addition Links</h3>
          <ul className="md:flex justify-around">
            <li className="mx-5">
              <a 
                href="https://www.linkedin.com/in/adion81/" 
                className="hover:text-greeny-500" 
                target="_blank"
                rel="noopener noreferrer"
              >Linked In</a>
            </li>
            <li className="mx-5">
              <a 
                href="https://github.com/adion81" 
                className=" hover:text-greeny-500" 
                target="_blank"
                rel="noopener noreferrer"
              >Github</a>
            </li>
          </ul>

        </div>
      </footer>
      
    </div>
  );
}

export default App;
