import React, { Component } from 'react';
import Current from "./Current.js";
import Previous from "./Previous.js";

class Teaching extends Component {
	render() {
            return (
		<div id="teaching" class="content-wrapper">
		    <h2>Teaching & Other Roles</h2>
		    <div class="flex-wrapper">
			<Current/>
			<Previous/>
		    </div>
		</div>
	    );
  	}
}

export default Teaching;
