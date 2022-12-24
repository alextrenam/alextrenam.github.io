import React, { Component } from 'react';
import Current from "./Current.js";
import Previous from "./Previous.js";

class Teaching extends Component {
	render() {
            return (
		<div id="teaching" class="content-wrapper">
		    <h3>Teaching & Other Roles</h3>
		    <div id="teaching-flex-wrapper">
			<Current/>
			<Previous/>
		    </div>
		</div>
	    );
  	}
}

export default Teaching;
