import React, { Component } from 'react';
import ProfilePic from './ProfilePic.js';

class Bio extends Component {
	render() {
            return (
		<div id="bio">
		    <ProfilePic/>
		    <h3>About Me</h3>
		    <p id="bio-body">I am a first year numerical analysis PhD student in Cohort 2 of the <a href="https://www.aaps-cdt.ac.uk/" target="blank">Advanced Automotive Propulsion Systems Centre for Doctoral Training</a>. Under the supervision of Dr. Tristan Pryer, I am researching numerical methods for battery modelling, with a particular focus on automotive applications. I am especially interested in structural batteries.{"\n\n"}I am passionate about outreach and improving accessibility to academia, and will be adding a list of useful resources I come across to this page - if you have any you wish to add, please feel free to get in contact!{"\n\n"}Outside of my studies I volunteer with the ReachSci initiative, and I release music under the name <a href="http://www.eskafell.com/" target="blank">Eskafell</a>. I also enjoy cooking, playing basketball, bouldering and generally keeping fit.{"\n\n"}My CV can be found <a href="">here</a> (coming soon).</p>
		</div>
            );
  	}
}

export default Bio;
