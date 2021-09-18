import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import NavBar from './components/NavBar';
import Opening from './components/Opening';
import { motion } from "framer-motion"
import './Styles/Nav.css'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showOpening: true,
    };
  }
  componentDidMount(){
    setTimeout(() => {
      this.setState(() => {
        return {showOpening: false}
      });  
    }, 3500);

  } 
  render() {

   return (
    <BrowserRouter basename="/" >
      { this.state.showOpening ? <Opening /> :
      <motion.div exit={{ opacity: 0.6 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <div className="app-container">
          <NavBar />
          <Home />
        </div>
      </motion.div>
    }
    </BrowserRouter>
  ); 
  }
  
}

export default App;
