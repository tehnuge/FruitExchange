import React from 'react'
//library for setting class names for DOM elements by referring it to a boolean value
import classNames from 'classnames'
import {Link} from 'react-router'
import Navlink from './navlink'


var ESCAPE_KEY = 27
var ENTER_KEY = 13

var FullItem = React.createClass({
	getInitialState: function () {
		return {editText: this.props.name};
	},
	handleBuy: function () {
		this.props.onBuy();
	},
	handleChange: function (event) {
		if (this.props.editing) {
			this.setState({editText: event.target.value});
		}
	},
	handleKeyDown: function (event) {
		if (event.which === ESCAPE_KEY) {
			this.setState({editText: this.props.todo.title});
			this.props.onCancel(event);
		} else if (event.which === ENTER_KEY) {
			this.handleSubmit(event);
		}
	},
	handleSubmit: function(event){
		var val = this.state.editText.trim()
		if(val){
			this.props.onSave(val)
			this.setState({editText: val})
		}
		else{
			//this.props.onDestroy()
		}
	},
	componentDidUpdate: function (prevProps) {
		if (!prevProps.editing && this.props.editing) {
			var node = ReactDOM.findDOMNode(this.refs.editField);
			node.focus();
			node.setSelectionRange(node.value.length, node.value.length);
		}
	},
	render: function(){
		var link = '/main/'+ this.props.name
		return(
				<div className="view"> 
					<b>item: {this.state.editText}</b> 
					<p>amount: {this.props.amount}</p>
					<p> user: {this.props.creator}</p>
					<p> {this.props.street}, {this.props.state}</p>
					<input type="button" value="Trade/Buy" onClick={this.handleBuy} />
				</div>
			)
	}
})

module.exports = FullItem