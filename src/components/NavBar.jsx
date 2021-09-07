import React, { Component } from 'react';
import styled from 'styled-components';
import Burger from './Burger';

const Nav = styled.nav` 
  height: 70px;
  padding: 0 20px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  background: #333;

  #header {
    width: 100%;
    position: fixed;
    top: 0;
    background: #333;

  }

`

class NavBar extends Component {
  render() {
    return (
      <header id="header">
        <Nav>
          <Burger />  
        </Nav>
      </header>
    );
  }
}

export default NavBar;