var React = require('react')
import { Link } from 'react-router'

var Login = React.createClass({
	render: function(){
		return(
			<div>
				<form method="post" action="/login">
				<input type="hidden" name="csrfmiddlewaretoken" value={cookie} />
				<b>Account Name </b>
				<input id="username" name="username" type="text"
				       placeholder="Your account name"
				       autoComplete="off" />
				<br />
		       <b>Password </b>
		       <input id="password" name="password" type="password"
		              placeholder="Your password"
		              autoComplete="off" />
		              <input type="submit" class="button" value="Log In" />
		        <br />
		        <Link to="/signup/">No Account? Sign Up</Link>
		       </form>
			</div>
		)
	}
})

module.exports = Login