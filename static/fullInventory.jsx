import React from 'react'
import Router from 'react-router'
import FullItem from './fullItem'
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
						<FullItem 
							name={item.name} 
							amount={item.amount}
							creator = {item.creator}
							onEdit={this.edit.bind(this, item)}
							onSave={this.save.bind(this, item)}
							editing={this.state.editing === item.id}
						/>					
					</div>
					)
			}, this)}
			</div>
			)
	}
})

module.exports = FullInventory
