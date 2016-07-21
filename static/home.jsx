import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
	render() {
		return(
			<div>
				<h2>Don't let your fruit and produce go to waste.</h2>
				<b>The Fruit Exchange is a marketplace for homegrown fruits 
				and produce from your backyard.</b>
				<br />
				<Link to="/signup/">No Account? Sign Up</Link>
			</div>)
	}
})