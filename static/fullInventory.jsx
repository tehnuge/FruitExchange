var React = require('react')
var Router = require('react-router')
var Item = require('./item')
var postUrl = '/profile/modify_item/'

var FullInventory = React.createClass({
	getInitialState: function(){
		return{
			nowShowing: marketItems,
			editing: null,
			newItem: ''
		}
	},
	save: function (itemToSave, text) {
		//append new text to the itemToSave object and save it
		itemToSave["newText"] = text;
		itemToSave['action'] = 'save';
		$.post(postUrl, itemToSave, function(){
			//dont need this lodash crap
			//_.find(inventory, {'id': itemToSave.id}).name = text
			console.log("save sucess!")
		})
		this.setState({editing: null})
	},
	edit: function (item) {
		this.setState({editing: item.id})
	},
	render: function(){		
		return(
			<div>
				<h3>Inventory:</h3>
			{marketItems.map(function(item){
				var address = "/profile/"+item.name
				return(
					<div key={item.id}>
						<Item 
							name={item.name} 
							amount={item.amount}
							onEdit={this.edit.bind(this, item)}
							onSave={this.save.bind(this, item)}
							editing={this.state.editing === item.id}
						/>
						<Router.Link 
						name={item.name}
						to={address}>
							Advanced editing
						</Router.Link>
						
					</div>
					)
			}, this)}
			</div>
			)
	}
})

module.exports = FullInventory
