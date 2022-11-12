import React, { Component } from 'react';

class ActivityItem extends Component {
    render() {
	if (this.props.link != null) {
            return (
		<div class={"activity-item ".concat(this.props.type)}>
		    <h4> {this.props.date} - {this.props.title} </h4>
		    <p>{this.props.content}{"\n\n"}Link: <a href={this.props.link} target="blank">click here</a>.</p>
		</div>
	    );
  	} else {
	    return (
		<div class={"activity-item ".concat(this.props.type)}>
		    <h4> {this.props.date} - {this.props.title} </h4>
		    {this.props.content}
		</div>
	    );
	}
    }
}

export default ActivityItem;
