var React = require('react')

var Inventory = React.createClass({
	render: function(){
		return(
			<div>
				<h3>Inventory:</h3>
			{inventory.map(function(single){
				return(
					<div key={single.name}>
						Item: {single.name} Amount: {single.amount}
					</div>
					)
			})}
			</div>
			)
	}
})

module.exports = Inventory
