import React, { Component } from 'react';
import ProfileImage from '../images/profile_pic_3.jpg';

class ProfilePic extends Component {
	render() {
            return (
		<div id="profile-pic">
		    <img src={ProfileImage} alt="Alex Trenam"/>
		</div>
        );
  	}
}

export default ProfilePic;
