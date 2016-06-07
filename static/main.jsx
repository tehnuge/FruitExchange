 var React = require('react')
var ReactDOM = require('react-dom')
var FullInventory = require('./fullInventory')

var Main = React.createClass({

	render: function(){
		$.get('/')
		console.log(marketItems)
		
		//return inventory of items
		return(
			<div>
				<h1>The Market</h1>
				<FullInventory />
			</div>
			)
	}
})

module.exports = Main