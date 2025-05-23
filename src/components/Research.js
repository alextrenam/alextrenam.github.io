import React, { Component } from 'react';
import Interests from "./Interests.js";
import Outputs from "./Outputs.js";

class Research extends Component {
	render() {
            return (
		<div id="research" class="content-wrapper">
		    <h2>Research</h2>
		    <div class="flex-wrapper">
			<Outputs/>
			<Interests/>
		    </div>
		</div>
	    );
  	}
}

export default Research;
