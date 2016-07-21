import React from 'react'
import ReactDOM from 'react-dom'
//library for setting class names for DOM elements by referring it to a boolean value
import classNames from 'classnames'


const ESCAPE_KEY = 27
const ENTER_KEY = 13

var UserItem = React.createClass({
	getInitialState: function () {
		return {editName: this.props.name,
				editAmount: this.props.amount};
	},
	handleEdit: function () {
		this.props.onEdit();
	},
	handleChange: function (event) {
		if (this.props.editing) {
			if(event.target.id === 'editNameField'){
				this.setState({editName: event.target.value});
			}
			if(event.target.id === 'editAmountField'){
				this.setState({editAmount: event.target.value});
			}
		}
	},
	handleKeyDown: function (event) {
		if (event.which === ESCAPE_KEY) {
			this.setState({editName: this.props.todo.title});
			this.props.onCancel(event);
		} else if (event.which === ENTER_KEY) {
			this.handleSubmit(event);
		}
	},
	handleSubmit: function(event){
		var name = this.state.editName.trim()
		var amount = this.state.editAmount
		if(name || amount){
			this.props.onSave(name, amount)
			this.setState({editName: name,
							editAmount: amount})
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
		return(
			<li className={classNames({
				editing: this.props.editing
			})}>
				<div className="view"> 
					<b>item: {this.state.editName}</b> 
					<p>amount: {this.state.editAmount}</p>
					<input type="button" value="edit" onClick={this.handleEdit} />
					<form method="post" action="/profile/">
						<input type="hidden" name="csrfmiddlewaretoken" value={cookie} />
							<input type="button" value="delete" onClick={this.props.onDestroy} />
					</form>
				</div>
				<input
					id="editNameField"
					className="edit"
					value={this.state.editName}
					onChange={this.handleChange}
					onBlur={this.handleSubmit}
					onKeyDown={this.handleKeyDown}

				/>
				<input
					id="editAmountField"
					className="edit"
					value={this.state.editAmount}
					onChange={this.handleChange}
					onBlur={this.handleSubmit}
					onKeyDown={this.handleKeyDown}

				/>
			</li>
			)
	}
})

module.exports = UserItem