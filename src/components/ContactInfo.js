import React, { Component } from 'react';
import LinkedIn from "../images/LinkedIn-Logos/LI-In-Bug.png";
import Email from "../images/email_logo.png";
import AAPS from "../images/AAPS_RGB_Strap.png";
import ORCID from "../images/ORCIDiD_icon128x128.png";
import Bath from "../images/University_of_Bath_logo.png";

const contact_height = "28px";

class ContactInfo extends Component {
    constructor(props) {
	super(props)
	this.state = {
	    bottom: "-250px"
	};
    }
    
    openContact = () => {
	this.setState({bottom: "0"});
    }

    closeContact = () => {
	this.setState({bottom: "-270px"});
    }

    render() {
        return (
	    <div id="contact-info" style={{bottom: this.state.bottom}}>
		<button onClick={this.openContact}>{'\u21D1'}</button>
		<button onClick={this.closeContact}>{'\u21D3'}</button>
		<h3>Contact Info</h3>
		<ul>
		    <li><a href="mailto:A.Trenam@hw.ac.uk"><img src={Email} alt="Email icon" height={contact_height}/></a></li>
		    <li><a href="https://researchportal.bath.ac.uk/en/persons/alex-trenam" target="blank"><img src={Bath} alt="University of Bath logo" height={contact_height}/></a></li>
		    <li><a href="https://www.linkedin.com/in/alex-trenam-7766981b2/" target="lank"><img src={LinkedIn} alt="LinkedIn logo" height={contact_height}/></a></li>
		    <li><a href="https://www.aaps-cdt.ac.uk/students/alex-trenam/" target="blank"><img src={AAPS} alt="AAPS logo" height={contact_height}/></a></li>
		    <li><a href="https://orcid.org/0000-0001-9924-8206" target="blank"><img src={ORCID} alt="ORCID logo" height={contact_height}/></a></li>
		</ul>
		<p>Mathematics-driven Innovation Centre{"\n"}School of Mathematical and Computer Sciences{"\n"}Heriot-Watt University{"\n"}Edinburgh{"\n"}EH14 4AS{"\n"}United Kingdom</p>
	    </div>
        );
    }
}

export default ContactInfo;
