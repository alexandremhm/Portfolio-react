import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import '../Styles/Footer.css';

class Footer extends React.Component {
  render() {
    return (
      <div id="Footer">
        <div className="footer-container">
          <h2>
            Thanks! Let's Code with Pride!
          </h2>
          <Link smooth to="/#home">
            <img id="img-footer" src="https://img.icons8.com/ios-filled/50/000000/home-buton.png" alt="home"/>
          </Link>
        </div>        
      </div>
    );
  };
}

export default Footer;