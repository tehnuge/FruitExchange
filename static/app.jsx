var React = require('react')
var ReactDOM = require('react-dom')
//console.log(window.title)
var App = React.createClass({
	render: function(){
		return(
			<div>{title}</div>)
	}
})

document.addEventListener("DOMContentLoaded", function(){
	ReactDOM.render(<App />, document.getElementById('root'))
	
})
