import React, { Component } from 'react';

class Current extends Component {
	render() {
            return (
		<div class="flex-column">
		    <h3>Current</h3>
		    <h4>Committee Membership</h4>
		    <ul>
			<li><a href="https://bath-siam-ima.github.io/" target="blank">Bath SIAM-IMA Student Chapter</a></li>
		    </ul>
		    <h4>Teaching</h4>
		    <ul>
			<li><a href="https://www.bath.ac.uk/catalogues/2022-2023/ma/MA10275.html" target="blank">MA10275</a> Programming and data science </li>
			<li><a href="https://www.bath.ac.uk/catalogues/2022-2023/ma/MA20222.html" target="blank">MA20222</a> Numerical analysis </li>
		    </ul>
		</div>
	    );
  	}
}

export default Current;
