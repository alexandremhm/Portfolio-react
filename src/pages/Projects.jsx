import React from 'react';
import Carousel from '../components/Carousel';
import '../Styles/Projects.css'


class Projects extends React.Component {
  render() {
    return (
      <div 
      id="projects"
      className="carousel-big-container"
      >
        <Carousel />
      </div>
    );
  };
}

export default Projects;
