import React from 'react'
import classNames from 'classnames'

let Buy = React.createClass({
	render: function() {
		return(
			<div className={classNames('buy',{
				buying: this.props.buying
			})}>
				<b>
					To Buy: {this.props.name}
				</b>
				<form method="post" action="/profile/modify_item">
					<input placeholder="amount" name="amount"/>
					<input type="submit" value="Submit" />
				</form>
			</div>)
	}
})

module.exports = Buy