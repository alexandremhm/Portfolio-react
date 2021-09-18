import React from 'react';
import '../Styles/Contacts.css';
import ContactForm from './ContactForm';

class Contact extends React.Component {
  render() {
    return (
      <div id="contact">
        <div>
          <h1 className="header-hello">
            Say Hi!!! Feel free to contact me at any time if you have any questions.
          </h1>      
        </div>
        <div id="contact-big-container">          
          <ContactForm />
        </div>        
          <div id="contact-links">
          <div className="contact-div">            
            <a href="https://github.com/alexandremhm" target="blank" className="links-contact">
              <img src="https://img.icons8.com/ios-glyphs/30/000000/github.png" alt="GitHub" className="img-contact-social"/>
            </a>
            <a href="https://www.linkedin.com/in/alexandremhm/" target="blank" className="links-contact">
              <img src="https://img.icons8.com/ios-glyphs/30/000000/linkedin.png" alt="LinkedIn" className="img-contact-social"/>
            </a> 
          </div>            
          </div>
        </div>
    );
  };
}

export default Contact;
