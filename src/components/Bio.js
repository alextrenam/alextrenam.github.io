import React, { Component } from 'react';
import ProfilePic from './ProfilePic.js';

class Bio extends Component {
	render() {
            return (
		<div id="bio">
		    <ProfilePic/>
		    <h3>About Me</h3>
		    <p id="bio-body">I'm an Innovation Expert (Research Associate) at the <a href="https://mdice.site.hw.ac.uk/" target="blank"><b>M</b>athematics-<b>d</b>riven <b>I</b>nnovation <b>Ce</b>ntre</a> (M-DICE) at Heriot-Watt University. My background is numerical analysis and numerical methods, specifically finite element methods, for solving partial differential equations.

			{"\n\n"}
			
			I am in the final stages of completing my PhD as a member of the <a href="https://www.aaps-cdt.ac.uk/" target="blank">Advanced Automotive Propulsion Systems Centre for Doctoral Training</a>. Under the supervision of Prof. Tristan Pryer, I have developed <b>structure-preserving numerical methods</b> for: continuum models of <b>charged particle transport</b>, especially in the context of electrolytes; <b>non-Newtonian fluids</b>; and <b>optimal control</b> problems involving <b>hypocoercive</b> operators.
			
			{"\n\n"}
			
		    If you would like to get in contact, my info can be found at the bottom of the page. I also have a <a href="https://github.com/alextrenam" target="blank">GitHub page</a> where you can see some of my side projects!</p>
		</div>
            );
  	}
}

export default Bio;
