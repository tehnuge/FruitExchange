import React from 'react'
import classNames from 'classnames'

let Buy = React.createClass({
	render: function() {
		return(
			<div className={classNames('buy', {
				buying: this.props.buying
			})}>
				<b>
					To Buy: {this.props.name}
				</b>
				<form method="post">
					<input type="hidden" name="csrfmiddlewaretoken" value={cookie} />
					<input placeholder="amount" name="amount"/>
					<input type="submit" value="Submit" onClick={this.props.onSave} />
				</form>
			</div>)
	}
})

module.exports = Buy