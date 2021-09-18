import React, { Component } from 'react';
import styled from 'styled-components';
import Burger from './Burger';

const Nav = styled.nav` 
  height: 60px;
  padding: 0 20px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  position: fixed;
  background: #333;
  opacity: 0.9;
  z-index: 100;

`

class NavBar extends Component {
  render() {
    return (
      <Nav>
        <Burger />
      </Nav>
    );
  }
}

export default NavBar;