import React from 'react';
import ProfilePhoto from '../photos/matheus.jpg'
import '../Styles/ProfilePic.css'

class ProfilePic extends React.Component {
  render() {
    return (
      <div class="card">
        <img src={ProfilePhoto} alt="John" style={{width:"200px"}} />       
        <p>
            I have a degree in Technological Chemistry and for a long time I was happy with this path, until it was no longer enough. I recently started my studies in web development  and I am very excited to cross this new universe. When not coding it's easy to find me playing PC or playstation games, cooking or just relaxing, listening some chill music.
        </p> 
      </div>
    );
  }
}

export default ProfilePic;
