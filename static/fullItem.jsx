import React from 'react'
import ReactDOM from 'react-dom'
//library for setting class names for DOM elements by referring it to a boolean value
import classNames from 'classnames'
import {Link} from 'react-router'


var ESCAPE_KEY = 27
var ENTER_KEY = 13

var FullItem = React.createClass({
	getInitialState: function () {
		return {editText: this.props.name};
	},
	handleEdit: function () {
		this.props.onEdit();
		//setting this setState will cause the text to revert to the previous state before refresh... need to think on this
		//this.setState({editText: this.props.name});
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
		var link = this.state.editText + '/buy'
		return(
			<li className={classNames({
				editing: this.props.editing
			})}>
				<div className="view"> 
					<label> 
					item: {this.state.editText}</label> 
					<p>amount: {this.props.amount}</p>
					<p> user: {this.props.creator}</p>
					<p> {this.props.street}, {this.props.state}</p>
					<form method="post" action="/profile/">
						<input type="hidden" name="csrfmiddlewaretoken" value={cookie} />
					</form>
					<Link to= "{link}" >Trade/Buy</Link>
				</div>
				<input
					ref="editField"
					className="edit"
					value={this.state.editText}
					onChange={this.handleChange}
					onBlur={this.handleSubmit}
					onKeyDown={this.handleKeyDown}

				/>
			</li>
			)
	}
})

module.exports = FullItem