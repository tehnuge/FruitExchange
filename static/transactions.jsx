import React from 'react'
import _ from 'lodash'

let Transactions = React.createClass({
	render: function(){
		var sellingItems = function(){
			if(_.isEmpty(selling)){
				return(
					<div>You don't have any requests yet. </div>
					)
			}
			return selling.map(function(trans){
				return(
					<div key={trans.id}>
					<b>item:</b> {trans.item}&#160;
					<b>buyer:</b> {trans.buyer}&#160;
					<b>amount:</b> {trans.amount}&#160;
					</div>
					)
					})

		}
		var buyingItems = function(){
			if(_.isEmpty(buying)){
				return(
					<div>You haven't made any requests yet. </div>
					)
			}
			return buying.map(function(trans){
				return(
					<div key={trans.id}>
					<b>item:</b> {trans.item} &#160;
					<b>seller:</b> {trans.seller}&#160;
					<b>amount:</b> {trans.amount}&#160;
					</div>
					)
					})
		}
		return(
			<div>
			<h3>Transactions</h3>
				<h4>Requests from you: </h4>
				{sellingItems()}
				<h4>Your requests: </h4>
				{buyingItems()}				
			</div>)
	}
})

module.exports = Transactions