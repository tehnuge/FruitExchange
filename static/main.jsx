var React = require('react')
var ReactDOM = require('react-dom')
var Inventory = require('./inventory')

var Main = React.createClass({

	render: function(){
		console.log(inventory)
		
		//return inventory of items
		return(
			<div>
				<h1>All Produce</h1>
				<Inventory />
			</div>
			)
	}
})

module.exports = Main