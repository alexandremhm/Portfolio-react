import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'
import { HashLink as Link } from 'react-router-hash-link';
import Home from './pages/Home'
import './Styles/Nav.css'



class App extends Component {
  render() {

   return (
    <BrowserRouter basename="/portfolio-react" >
       <nav className="NavBar">
          <Link className="Link" smooth to="/#home">Home</Link>       
          <Link className="Link" smooth to="/#about">About</Link>
          <Link className="Link" smooth to="/#education">Education</Link>
          <Link className="Link" smooth to="/#projects">Projects</Link>
          <Link className="Link Contact" smooth to="/#contact">Contact</Link>
        </nav>
        <Home />  
    </BrowserRouter>
  ); 
  }
  
}

export default App;
