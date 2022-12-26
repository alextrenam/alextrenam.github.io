import React, { Component } from 'react';
import Interests from "./Interests.js";
import Papers from "./Papers.js";

class Research extends Component {
	render() {
            return (
		<div id="research" class="content-wrapper">
		    <h2>Research</h2>
		    <div class="flex-wrapper">
			<Interests/>
			<Papers/>
		    </div>
		</div>
	    );
  	}
}

export default Research;
