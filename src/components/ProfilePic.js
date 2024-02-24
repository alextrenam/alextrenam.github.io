import React, { Component } from 'react';
import ProfileImage from '../images/profile_pic_2.jpg';

class ProfilePic extends Component {
	render() {
            return (
		<div id="profile-pic">
		    <img src={ProfileImage} alt="Alex Trenam" height="100%" width="100%"/>
		</div>
        );
  	}
}

export default ProfilePic;
