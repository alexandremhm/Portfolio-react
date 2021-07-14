import React from 'react';
import '../Styles/Education.css'
import LogoTrybe from '../photos/logotrybe.png'
import LogoCefet from '../photos/cefet.png'


class Education extends React.Component {
  render() {
    return (
      <div id="education">       
       <div id="skills-container">
         <div>
           <a href="https://www.betrybe.com/" target="blank" className="skills-card">
          <h3>Web Development</h3>
          <img src={LogoTrybe} alt="logotipo" />         
        </a>
        <a href="https://www.cefetmg.br/" target="blank" className="skills-card">
          <h3>Materials Engeeniring field</h3>
          <h4>Master student</h4>
          <img src={LogoCefet} alt="logotipo" />         
        </a>
         </div>
         <div>
           <a href="https://www.cefetmg.br/" target="blank" className="skills-card">
          <h3>Technological Chemistry</h3>
          <h4>Bachelor degree</h4>
          <img src={LogoCefet} alt="logotipo" />         
        </a>
        <div className="skills-card language-card">
          <h3>English (B1), Deutsch (B1)</h3>
          <img src="https://img.icons8.com/fluent/96/000000/language.png" alt="languages" />             
        </div>
         </div>        
       </div>    
      </div>      
    );
  };
}

export default Education;