import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
	render() {
		return(
			<div>
				<b>The Fruit Exchange is a marketplace for homegrown fruits and produce from your backyard.</b>
				<br />
				<Link to="/signup/">No Account? Sign Up</Link>
			</div>)
	}
})