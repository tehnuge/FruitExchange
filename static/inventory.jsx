var React = require('react')
var Router = require('react-router')
var Item = require('./item')

var Inventory = React.createClass({
	getInitialState: function(){
		return{
			nowShowing: inventory,
			editing: null,
			newItem: ''
		}
	},
	save: function (itemToSave, text) {
		var postUrl = '/profile/modify_item/'
		itemToSave["newText"] = text
		$.post(postUrl, itemToSave)
		console.log("id is: ", itemToSave.id, "text: ", text)
		this.setState({editing: null});
	},
	edit: function (item) {
		this.setState({editing: item.id});
	},
	render: function(){		
		return(
			<div>
				<h3>Inventory:</h3>
			{inventory.map(function(item){
				var address = "/profile/"+item.name
				console.log(item.id)
				return(
					<div key={item.id}>
						<Item 
							name={item.name} 
							amount={item.amount}
							onEdit={this.edit.bind(this, item)}
							onSave={this.save.bind(this, item)}
							editing={this.state.editing === item.id}
						/>
						<Router.Link to={address}>
							Advanced editing
						</Router.Link>
						
					</div>
					)
			}, this)}
			</div>
			)
	}
})

module.exports = Inventory
