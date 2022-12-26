import React, { Component } from 'react';
import ProfilePic from './ProfilePic.js';

class Bio extends Component {
	render() {
            return (
		<div id="bio">
		    <ProfilePic/>
		    <h3>About Me</h3>
		    <p id="bio-body">I'm a second year numerical analysis PhD student in Cohort 2 of the <a href="https://www.aaps-cdt.ac.uk/" target="blank">Advanced Automotive Propulsion Systems Centre for Doctoral Training</a>. Under the supervision of Dr. Tristan Pryer, I'm researching structure-preserving numerical methods for battery electrolyte models (electrodiffusion and electrohydrodynamics), with a particular focus on discontinuous Galerkin finite element methods.{"\n\n"}I'm passionate about outreach and improving accessibility to academia, and plan to add links to some resources I find interesting or useful to this page.{"\n\n"}If you would like to get in contact, my info can be found at the bottom!</p>
		</div>
            );
  	}
}

export default Bio;
