var React = require('react')
var ReactDOM = require('react-dom')
//console.log(window.title)
var App = React.createClass({

	render: function(){
		console.log(title)
		var title1 = title.title
		return(
			<div>
			{title1}
			</div>)
	}
})

document.addEventListener("DOMContentLoaded", function(){
	ReactDOM.render(<App />, document.getElementById('root'))
	
})
