import React, { Component } from 'react';
import styled from 'styled-components';
import Header from './Header';

const Div = styled.div`
  width: 2rem;
  height: 2rem;
  z-index: 10;
  display: none;
  top: 0.85rem;
  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
    z-index: 100;
    position: fixed;
  };
  div {
    width: 2rem;
    background: #43D993;
    height: 0.25rem;
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    &:nth-child(1) {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }
    &:nth-child(2) {
      transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${({ open }) => open ? 0 : 1};
    }
    &:nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }    
  }
`;

class Burger extends Component {
  constructor() {
    super();
    this.state = {
      open: false,
    };
    this.setOPen = this.setOPen.bind(this);
  }

  setOPen = () => {
    const { open } = this.state;
    this.setState({ open: !open });
  };
    
  render() {
    const { open } = this.state;

    return (
      <>
        <Div 
          open={ open }
          onClick={this.setOPen}
        >
          <div></div>
          <div></div>
          <div></div>
        </Div>
        <Header 
          open={ open }
          setOPen={this.setOPen}
          />
      </>
    );
  }
}

export default Burger;
