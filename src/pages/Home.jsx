import React from 'react';
import About from './About'
import Projects from './Projects'
import Contact from './Contact'
import Footer from './Footer'
import HomePic from '../photos/dev.svg'
import '../Styles/Home.css'
import '../Styles/General.css'

class Home extends React.Component {

  render() {

    return (

      <div id="home" className="general">       
        <div className="homeContainer">
          <aside className="aside-home">
            <a href="https://github.com/alexandremhm" target="blank" className="social-links">
              <img 
                src="https://img.icons8.com/ios-glyphs/30/000000/github.png" 
                alt="GitHub" 
                className="aside-home-img"
                />
            </a>
            <a href="https://www.linkedin.com/in/alexandremhm/" target="blank" className="social-links">
              <img 
                src="https://img.icons8.com/ios-glyphs/30/000000/linkedin.png" 
                alt="LinkedIn" 
                className="aside-home-img"
                />
            </a>            
          </aside>
          <div className="Header">
            <h2 className="title-two">Hello, I'm</h2>
            <h1 className="title-one">Matheus Alexandre</h1>
            <h1 className="title-one">Web Development Student</ h1>
            <h3 className="title-general">My Second 'Hello World' happened when I started coding!!!</h3>
          </div>
            <img className="img-home" id="dev-pic" src={HomePic} alt="developer" />             
        </div>
        <About />
        <Projects />
        <Contact />        
        <Footer />
      </div>
    );
  };
}

export default Home;
