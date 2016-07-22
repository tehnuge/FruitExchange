import React from 'react'

let Transactions = React.createClass({
	render: function(){
		return(
			<div>
			<h3>Transactions</h3>
			<h4>Your requests: </h4>
				{buying.map(function(trans){
					return(
						<div key={trans.id}>
						item: {trans.item}
						seller: {trans.seller}
						amount: {trans.amount}	
						</div>
						)
						})

				}
				{selling.map(function(trans){
					return(
						<div key={trans.id}>
						item: {trans.item}
						buyer: {trans.buyer}
						amount: {trans.amount}	
						</div>
						)
						})

				}
				
			</div>)
	}
})

module.exports = Transactions