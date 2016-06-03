var React = require('react')
var ReactDOM = require('react-dom')

var Item = React.createClass({
	getInitialState: function () {
		return {editText: this.props.name};
	},
	handleEdit: function () {
		this.props.onEdit();
		this.setState({editText: this.props.name});
	},
	handleChange: function (event) {
		if (this.props.editing) {
			this.setState({editText: event.target.value});
		}
	},
	handleSubmit: function(event){
		var val = this.state.editText.trim()
		if(val){
			this.props.onSave(val)
			this.setState({editText: val})
		}
		else{
			//do nothing for now.....
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
			<li>
				<p> 
					<label onDoubleClick={this.handleEdit}> 
					item: {this.state.editText}
					</label> amount: {this.props.amount}
				</p>
				<input
					ref="editField"
					className="edit"
					value={this.state.editText}
					onChange={this.handleChange}
					onBlur={this.handleSubmit}

				/>
			</li>
			)
	}
})

module.exports = Item