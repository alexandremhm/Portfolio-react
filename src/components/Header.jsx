import React from 'react';
import '../Styles/Header.css';
import { HashLink as Link } from 'react-router-hash-link';

class Header extends React.Component {
    
  render() {    
    
    return (      
      <nav className="NavBar">
        <Link className="header-link" smooth to="/#home">Home</Link>       
        <Link className="header-link" smooth to="/#about">About</Link>
        <Link className="header-link" smooth to="/#education">Education</Link>
        <Link className="header-link" smooth to="/#projects">Projects</Link>
        <Link className="header-link Contact" smooth to="/#contact">Contact</Link>
      </nav>      
    );
    
  }
}

export default Header;
