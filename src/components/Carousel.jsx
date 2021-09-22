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
      speed: window.innerWidth > 768 ? 800 : 500,
      slidesToShow: window.innerWidth > 768 ? 2 : 1,
      slidesToScroll: 1,
      centerMode: true,
      className: "center",
      accessibility: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 2,
            infinite: true,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
          }
        }
      ]
    };
    return (
      <div id="projectsnav">
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
