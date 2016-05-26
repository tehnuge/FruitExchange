var React = require('react')

var Submission = React.createClass({
	render: function() {
		var createFruit = function(fruit) {

			
		}
		return(
			<div>
				<label>Fruits: </label>
					<input id="fruits"/>
				<label>Quantity: </label>
					<input id="qty"/>
				<button>submit</button>
			</div>
			);
 	}
});

module.exports = Submission;