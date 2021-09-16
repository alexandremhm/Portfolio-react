import React, { Component } from 'react';
import '../Styles/ProjectsCard.css'

class ProjectCard extends Component {
  render() {
    const { title, description, image, credits, technologies, linkRepo, linkDemo } = this.props.projectsData;
    return (
      <div className="project-card-conatiner" >
        <div className="project-card">
          <h1 
            className="project-card-title"
          >
            { title }
          </h1>
          <img 
            src={ image } 
            alt={ title }
            className="project-card-image"
          />
          <p 
            className="project-card-none"
          >
            { description }
          </p>
          <p 
            className="project-card-tech"
          >
            { technologies.join(' - ') }
          </p>
          <p 
            className="project-card-none"
          >
            { credits }
          </p>
          <button 
            className="project-card-button-repo"
          >
            <a href={ linkRepo } target="_blank" rel="noopener noreferrer">Repo</a>
          </button >
          < button 
            className="project-card-button-demo" 
          >
            <a href={ linkDemo } target="_blank" rel="noopener noreferrer">Demo</a>
          </button >
        </div>      
      </div>
    );
  }
}

export default ProjectCard;
