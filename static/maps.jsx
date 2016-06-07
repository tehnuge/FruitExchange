var React = require('react')

var Maps = React.createClass({
	render: function(){
		//returns a json with the distance between origin/destination
		var url = 'https://maps.googleapis.com/maps/api/distancematrix/json?origins='+ origin+'&destinations='+destination
	}
})

module.exports = Maps