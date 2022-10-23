import React, { Component } from 'react';
import ActivityItem from './ActivityItem.js'
import ActivityFeedContent from '../ActivityFeedContent.json';

class ActivityFeed extends Component {
	render() {
            return (
		<div id="activity-feed" class="content-wrapper">
		    <h3>Latest Activities</h3>
		    {ActivityFeedContent.map(item => (
			<ActivityItem type={item.type}
				      title={item.title}
				      date={item.date}
				      content={item.content}
				      link={item.link}/>
		    ))}
		</div>
	    );
  	}
}

export default ActivityFeed;
