var React = require('react')
var Router = require('react-router')

var Navlink = React.createClass({
	render: function() {
		return(
				<Router.Link {...this.props} activeClassName="active" />
			)
	}
})

module.exports= Navlink