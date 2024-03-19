import React, { Component } from 'react';
import ProfilePic from './ProfilePic.js';

class Bio extends Component {
	render() {
            return (
		<div id="bio">
		    <ProfilePic/>
		    <h3>About Me</h3>
		    <p id="bio-body">I'm a final year (scary!) numerical analysis PhD student in Cohort 2 of the <a href="https://www.aaps-cdt.ac.uk/" target="blank">Advanced Automotive Propulsion Systems Centre for Doctoral Training</a>. Under the supervision of Prof. Tristan Pryer, I'm researching structure-preserving numerical methods for battery electrolyte models (electrodiffusion and electrohydrodynamics), with a particular focus on discontinuous Galerkin finite element methods.{"\n\n"}If you would like to get in contact, my info can be found at the bottom of the page. I also have a <a href="https://github.com/alextrenam" target="blank">GitHub page</a> where you can find one of my current side projects developing a numerical analysis Python plotting package named NAPTools (<b>N</b>umerical <b>A</b>nalysis <b>P</b>lotting <b>Tool</b>box (+<b>s</b>). Any input, feedback or requests are very welcome!</p>
		</div>
            );
  	}
}

export default Bio;
