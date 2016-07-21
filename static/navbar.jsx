var React = require('react')
var Navlink = require('./navlink')

var Navbar = React.createClass({
	render: function() {
		return (
				<div>
					<h1>The Fruit Exchange </h1>
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