import React from 'react'
import Router from 'react-router'
import FullItem from './fullItem'
import Buy from './buy'
const postUrl = '/profile/modify_item/'

var FullInventory = React.createClass({
	getInitialState: function(){
		return{
			nowShowing: marketItems,
			editing: null,
			buying: null,
			newItem: ''
		}
	},
	//save a 'buy' transaction
	save: function (trans, text) {
		//append new text to the trans object and save it
		console.log('text:', text);
		trans['action'] = 'buy';
		$.post(postUrl, trans, function(){
			console.log("buy success!")
		})
	},
	edit: function (item) {
		this.setState({editing: item.id})
	},
	buy: function (item){
		this.setState({buying: item.id})
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
							street = {item.street}
							state = {item.state}
							onBuy={this.buy.bind(this, item)}
							editing={this.state.editing === item.id}
						/>
						<Buy
							name={item.name}
							buying={this.state.buying === item.id}
							onSave={this.save.bind(this, item)}
						/>					
					</div>
					)
			}, this)}
			</div>
			)
	}
})

module.exports = FullInventory
