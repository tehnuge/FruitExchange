var React = require('react')
var Navlink = require('./navlink')

var Navbar = React.createClass({
	render: function() {
		return (
				<div>
					<h1>The Fruit Exchange </h1>
					<ul role='nav'>
						<li><Navlink to='/' onlyActiveOnIndex={true}>Home </Navlink></li>
						<li><Navlink to='/profile'>Profile</Navlink></li>
						<li><Navlink to='/login'>Login</Navlink></li>
					</ul>
					{this.props.children}
				</div>
			)
	}
})

module.exports = Navbar