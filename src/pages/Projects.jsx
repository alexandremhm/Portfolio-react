import React from 'react';
import '../Styles/Projects.css'

class Projects extends React.Component {
  render() {
    return (
      <div id="projects">        
        <a href="https://alexandremhm.github.io/art-pixel-project/" target="blank" className="project-card">
          <h3>Pixel Art</h3>
          <h4>Pixel Art App</h4>          
          <h4> HTML JS CSS</h4>
          <img src="https://img.icons8.com/ios-glyphs/30/000000/link--v2.png" alt="link"/>
        </a>
        <a href="https://alexandremhm.github.io/to-do-list/" target="blank" className="project-card">
          <h3>To-do list</h3>
          <h4>To-do list App</h4>          
          <h4> HTML JS CSS</h4>
          <img src="https://img.icons8.com/ios-glyphs/30/000000/link--v2.png" alt="link"/>
        </a>
        <a href="https://alexandremhm.github.io/shopping-cart/" target="blank" className="project-card">
          <h3>Shopping Cart</h3>
          <h4>API for shopping</h4>
          <h4> HTML JS CSS API</h4>
          <img src="https://img.icons8.com/ios-glyphs/30/000000/link--v2.png" alt="link"/>
        </a>
      </div>
    );
  };
}

export default Projects;
