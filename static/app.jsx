var React = require('react')
var ReactDOM = require('react-dom')
var Inventory = require('./inventory')

var App = React.createClass({

	render: function(){
		console.log(inventory)
		
		//return inventory of items
		return(
			<div>
				<h1>Your Profile!!</h1>
				<Inventory />
			</div>
			)
	}
})

module.exports = App
/*document.addEventListener("DOMContentLoaded", function(){
	ReactDOM.render(<App />, document.getElementById('root'))
	
})
*/