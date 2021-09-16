import React from 'react';
import '../Styles/Header.css';
import { HashLink as Link } from 'react-router-hash-link';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-end;
  position: fixed;
  font-size: 1.2rem;
  background-color: #333;
  align-items: center;
  width: 100%;
  gap: 1rem;
  @media (max-width: 768px) {
    background-color: #333;
    top: 0;
    right: 0;
    flex-flow: column;
    gap:1rem;
    width: 100%;
    heigh: 100%;
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
    transition: transform 0.3s ease-in-out;
    position: fixed;
  };
`;

class Header extends React.Component {
    
  render() {
    const { open } = this.props;
    
    return (      
      <Nav className="header-container" open={ open }>
        <Link className="header-link" smooth to="/#home">Home</Link>       
        <Link className="header-link" smooth to="/#about">About</Link>
        <Link className="header-link" smooth to="/#projects">Projects</Link>
        <Link className="header-link" smooth to="/#contact">Contact</Link>
      </Nav>      
    );
    
  }
}

export default Header;
