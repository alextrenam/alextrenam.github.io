import React, { Component } from 'react';
import ProfilePic from './ProfilePic.js';

class Bio extends Component {
	render() {
            return (
		<div id="bio">
		    <ProfilePic/>
		    <h3>About Me</h3>
		    <p id="bio-body">I'm an Innovation Expert (Innovation Research Associate) at the <a href="https://mdice.site.hw.ac.uk/" target="blank"><b>M</b>athematics-<b>d</b>riven <b>I</b>nnovation <b>Ce</b>ntre</a> (M-DICE) at Heriot-Watt University. My background is numerical analysis and numerical methods, specifically finite element methods, for solving partial differential equations.

			{"\n\n"}
			
			I completed my PhD under the supervision of Prof. Tristan Pryer as part of the <a href="https://www.aaps-cdt.ac.uk/" target="blank">Advanced Automotive Propulsion Systems Centre for Doctoral Training</a>. In my thesis I developed <b>structure-preserving numerical methods</b> for continuum models of: charged particle transport; viscoelastic fluids; and optimal control problems involving hypocoercive operators.
			
			{"\n\n"}

			Recently I've been working on:
			<ul>
			    <li>applying structure-preserving techniques to reduce nonlinear solver iterations in multiphase subsurface fluid simulations</li>
			    <li>developing a physics-based continuum model and corresponding finite element methods for peat bog system dynamics</li>
			    <li>combining generative machine learning techniques with multiscale finite element methods to speed up simulations in the context of uncertainty quantification</li>
			    <li>creating a mixed integer linear programming model of national-scale cold chain logistics to inform policy decisions on reducing emissions</li>
			</ul>
			
			{"\n"}
			
		    If you would like to get in contact, my info can be found at the bottom of the page. I also have a <a href="https://github.com/alextrenam" target="blank">GitHub page</a> where you can see some of my projects!</p>
		</div>
            );
  	}
}

export default Bio;
