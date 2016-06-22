var React = require('react')
import { Link } from 'react-router'

var Login = React.createClass({
	render: function(){
		return(
			<div>
				<form method="post" action="/login">
				<input type="hidden" name="csrfmiddlewaretoken" value={cookie} />
				<label for="username"><h3>Account Name</h3></label>
				<input id="username" name="username" type="text"
				       placeholder="Your account name"
				       autocomplete="off" />
		       <label for="password"><h3>Password</h3></label>
		       <input id="password" name="password" type="password"
		              placeholder="Your password"
		              autocomplete="off" />
		              <input type="submit" class="button" />
		        <Link to="/signup/">No Account? Sign Up</Link>
		       </form>
			</div>
		)
	}
})

module.exports = Login