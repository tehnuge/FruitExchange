import React from 'react'
import classNames from 'classnames'

const ESCAPE_KEY = 27
const ENTER_KEY = 13

function isInt(value) {
  if (isNaN(value)) {
    return false;
  }
  var x = parseFloat(value);
  return (x | 0) === x;
}

let Buy = React.createClass({
	getInitialState: function(){
		return{buyAmount: null}
	},
	handleChange: function(e) {
		if (isInt(e.target.value)){
			this.setState({buyAmount: e.target.value})
		}else{
			console.log('Not a number')
		}
	},
	handleSubmit: function(e) {
		var val = this.state.buyAmount.trim()
		this.props.onSave(val)
	},
	render: function() {
		return(
			<div className={classNames('buy', {
				buying: this.props.buying
			})}>
				<b>
					To Buy: {this.props.name}
				</b>
				<form method="post" action = "/profile/modify_item/">
					<input type="hidden" name="csrfmiddlewaretoken" value={cookie} />
					<input placeholder="amount" name="buyAmount" onChange={this.handleChange} />
					<input type="submit" value="Submit" onClick={this.handleSubmit} />
				</form>
			</div>)
	}
})

module.exports = Buy