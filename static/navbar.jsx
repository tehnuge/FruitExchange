var React = require('react')
var Navlink = require('./navlink')
import { Link } from 'react-router'

var Navbar = React.createClass({
	handleLogout: function(){
		$.post('/logout', function(){
			console.log('logged out?')
		})
	},
	render: function() {
		return (
				<div>
					<div className="row">
						<h1>The Fruit Exchange </h1>
						<p className="text-right col-md-offset-6 col-md-6">
							Hello {username}
							<br />
							<Link to='/logout/' onClick={this.handleLogout}>Logout </Link>
						</p>

					</div>
					<ul role='nav' className="row">
						<li className="col-md-3"><Navlink to='/' onlyActiveOnIndex={true}>Home </Navlink></li>
						<li className="col-md-3"><Navlink to='/main'>Main</Navlink></li>
						<li className="col-md-3"><Navlink to='/profile'>Profile</Navlink></li>
						<li className="col-md-3"><Navlink to='/login'>Login</Navlink></li>
					</ul>
					{this.props.children}
				</div>
			)
	}
})

module.exports = Navbar