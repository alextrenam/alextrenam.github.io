import React, { Component } from 'react';

class Outputs extends Component {
	render() {
            return (
		<div class="flex-column">
		    <h3>Research outputs</h3>
		    <h4>Conference Talks</h4>
		    <ul>
			<li><a href="https://numericalanalysisconference.org.uk/" target="blank">The 29th Biennial Numerical Analysis Conference</a> (27th-30th June 2023) - Structure-preserving discontinuous Galerkin methods for the Poisson-Nernst-Planck system</li>
			<li><a href="https://bail2024.udc.es/" target="blank">The International Conference on Boundary and Interior Layers (BAIL) 2024</a> (10th-14th June 2024) - Structure-preserving discretisations for electrolyte continuum models</li>
		    </ul>

		    <h4>Publications</h4>
		    <ul>
			<li><b>A. Trenam</b>, C. Aza, C. Jones, <i>et al.</i>, "An Analytical Model for Wrinkle-free Forming of Composite Laminates", <i>Composites Part A: Applied Science and Manufacturing</i>, vol. 186, p. 108386, 2024. DOI: <a href="https://doi.org/10.1016/j.compositesa.2024.108386" target="blank">10.1016/j.compositesa.2024.108386</a>.</li>
		    </ul>
		</div>
	    );
  	}
}

export default Outputs;
