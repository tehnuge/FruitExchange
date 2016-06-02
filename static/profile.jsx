var React = require('react')
var ReactDOM = require('react-dom')
var Inventory = require('./inventory')
var Submission = require('./submission')

var Profile = React.createClass({

	render: function(){
		console.log(inventory)
		
		//return inventory of items
		return(
			<div>
				<h1>Your Profile!!</h1>
				<Inventory />
				<Submission />
				{this.props.children}
			</div>
			)
	}
})

module.exports = Profile
