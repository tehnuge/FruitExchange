import React from 'react'
import Router from 'react-router'
import UserItem from './userItem'
var postUrl = '/profile/modify_item/'

var UserInventory = React.createClass({
	getInitialState: function(){
		return{
			nowShowing: inventory,
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
			console.log("save success!")
		})
		this.setState({editing: null})
	},
	edit: function (item) {
		this.setState({editing: item.id})
	},
	destroy: function(item){
		item['action'] = 'destroy';
		$.post(postUrl, item, function(){
			console.log('destroy success!');
		});
	},
	render: function(){	
		return(
			<div>
				<h3>Inventory:</h3>
			{inventory.map(function(item){
				var address = "/profile/"+item.name
				return(
					<div key={item.id}>
						<UserItem 
							name={item.name} 
							amount={item.amount}
							onEdit={this.edit.bind(this, item)}
							onSave={this.save.bind(this, item)}
							editing={this.state.editing === item.id}
							onDestroy={this.destroy.bind(this, item)}
						/>
						
					</div>
					)
			}, this)}
			</div>
			)
	}
})

module.exports = UserInventory
