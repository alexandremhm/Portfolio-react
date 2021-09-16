import React from 'react';
import ProfilePhoto from '../photos/matheus.jpg'
import '../Styles/ProfilePic.css'

class ProfilePic extends React.Component {
  render() {
    return (
      <div class="profile-card">
        <img 
          src={ProfilePhoto} 
          alt="John" 
          className="img-profile"
          />    
        
      </div>
    );
  }
}

export default ProfilePic;
