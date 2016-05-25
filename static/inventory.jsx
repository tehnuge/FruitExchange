var React = require('react')

var Inventory = React.createClass({
	render: function(){
		return(
			<div>
				<h3>Inventory:</h3>
			{mapObject(inventory, function (key, value) {
			  return <div key={key}>item: {key} Amount: {value}</div>;
			})}
			</div>
			)
	}
})

module.exports = Inventory