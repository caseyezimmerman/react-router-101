import React from 'react';
import { Link, Route } from 'react-router-dom';
import Topic from './Topic'

function Topics(){
	return(
		<div>
			<h1>Topics Page</h1>
			<ul>
				<li><Link to='/topics/rendering'>Rendering with react</Link></li>
				<li><Link to='/topics/components'>Components</Link></li>
				<li><Link to='/topics/state'>State in react</Link></li>
			</ul>

			<Route path='/topics/:topicName' component={Topic} />
		</div>
	)
}

export default Topics