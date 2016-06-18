var React = require('react')
var ReactDOM = require('react-dom')
var UserInventory = require('./userInventory')
var Submission = require('./submission')

var Profile = React.createClass({

	render: function(){
/*		$.get('/profile/update_items/', function(data){
			inventory = data
			console.log('Profile.jsx success!!', data)
		})*/
		console.log(inventory)
		
		//return inventory of items
		return(
			<div>
				<h1>Your Profile</h1>
				<UserInventory />
				<Submission />
				{this.props.children}
			</div>
			)
	}
})

module.exports = Profile
