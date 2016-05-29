import React from 'react'
var ReactDOM = require('react-dom')
/*import App from './app'
*/import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import routes from './routes'

document.addEventListener("DOMContentLoaded", function(){
	ReactDOM.render(<Router routes={routes} history={browserHistory}/>, document.getElementById('root'))
	
})
