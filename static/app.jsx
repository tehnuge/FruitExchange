var React = require('react')
var ReactDOM = require('react-dom')
var Inventory = require('./inventory')

var App = React.createClass({

	render: function(){
		//helper function for iterating through object
		mapObject = function(object, callback) {
		  return Object.keys(object).map(function (key) {
		    return callback(key, object[key]);
		  });
		}
		//return inventory of items
		return(
			<div>
				<h1>Your Profile</h1>
				<Inventory />
			</div>
			)
	}
})

document.addEventListener("DOMContentLoaded", function(){
	ReactDOM.render(<App />, document.getElementById('root'))
	
})
