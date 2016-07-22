import React from 'react'

var Submission = React.createClass({
	render: function() {
		return(
			<div>
			<h3> Submit new Item: </h3>
			<form method="post" action="/profile/">
				<input type="hidden" name="csrfmiddlewaretoken" value={cookie} />
					<label>Item: </label>
						<input id="item" name="item" type="text" />
					<label>Qty: </label>
						<input id="qty" name="qty"/>
						<input type="hidden" name="action" value="new" />
					<input type="submit" className="button" value = "Submit"/>
				</form>
			</div>
			);
 	}
});

module.exports = Submission;