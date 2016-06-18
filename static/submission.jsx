var React = require('react')

var Submission = React.createClass({
	render: function() {
		var createFruit = function(fruit) {

			
		}
		return(
			<div>
			<form method="post" action="/profile/">
				<input type="hidden" name="csrfmiddlewaretoken" value={cookie} />
					<label>Item: </label>
						<input id="item" name="item" type="text" />
					<label>Qty: </label>
						<input id="qty" name="qty"/>
						<input type="hidden" name="action" value="new" />
					<input type="submit" class="button"/>
				</form>
			</div>
			);
 	}
});

module.exports = Submission;