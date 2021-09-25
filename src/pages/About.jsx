import React from "react";
import ProfilePic from "../components/ProfilePic";
import "../Styles/About.css";

class About extends React.Component {
  render() {
    return (
      <div id="about">
        <div className="text-about-container">
          <div className="moldura-dois">
            <div className="moldura-um">
              <p id="about-paragraph">
                I have a degree in Technological Chemistry and for a long time I
                was happy with this path, until it was no longer enough. I
                recently started my studies in web development and I am very
                excited to cross this new universe. When not coding it's easy to
                find me playing PC or playstation games, cooking or just
                relaxing, listening some chill music.
              </p>
            </div>
          </div>
          <ProfilePic />
        </div>
        <p id="about-paragraph-mobile">
          I have a degree in Technological Chemistry and for a long time I was
          happy with this path, until it was no longer enough. I recently
          started my studies in web development and I am very excited to cross
          this new universe. When not coding it's easy to find me playing PC or
          playstation games, cooking or just relaxing, listening some chill
          music.
        </p>
      </div>
    );
  }
}

export default About;