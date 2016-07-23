import React from 'react'
import ReactDOM from 'react-dom'
import UserInventory from './userInventory'
import Submission from './submission'
import Transactions from './transactions'

var Profile = React.createClass({

	render: function(){		
		//return inventory of items
		return(
			<div>
				<h1>Your Profile</h1>
				<div className="row">
					<div className="col-md-6">
						<h3>Inventory:</h3>
						<UserInventory />
					</div>
					<div className="col-md-6">
						<Submission />
						<Transactions />
					</div>
				</div>
				{this.props.children}
			</div>
			)
	}
})

module.exports = Profile
