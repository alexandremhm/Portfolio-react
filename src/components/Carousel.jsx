import React, { Component } from "react";
import Slider from "react-slick";
import projectsData from "../data/projectsData";
import ProjectCard from "./ProjectCard";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "../Styles/Carousel.css";

class Carousel extends Component {
  render() {
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: window.innerWidth > 770 ? 2 : 1,
      slidesToScroll: 1,
      centerMode: true,
      className: "center",
      dots: true,
    };
    return (
      <div>
        <Slider {...settings}>
          { projectsData.map((project, index) => 
            < ProjectCard key={index} projectsData={project} />
          )}      
        </Slider>
      </div>
    );
  }
}

export default Carousel;
