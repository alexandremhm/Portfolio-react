import React, { Component } from "react";
import "../Styles/ProjectsCard.css";

class ProjectCard extends Component {
  render() {
    const {
      title,
      description,
      image,
      credits,
      technologies,
      linkRepo,
      linkDemo,
    } = this.props.projectsData;
    return (
      <div className="project-card-container">
        <div className="project-card">
          <h1 className="project-card-title">{title}</h1>
          <img src={image} alt={title} className="project-card-image" />
          <p className="project-card-none project-card-description">
            {description}
          </p>
          <p className="project-card-tech">{technologies.join(" - ")}</p>
          <p className="project-card-none project-card-credits">{credits}</p>
          <div className="project-card-links">
            <button className="project-card-button btn-margin">
              <a href={linkRepo} target="_blank" rel="noopener noreferrer" className="btn-link">
                Repo
              </a>
            </button>
            <button className="project-card-button">
              <a href={linkDemo} target="_blank" rel="noopener noreferrer" className="btn-link">
                Demo
              </a>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectCard;
