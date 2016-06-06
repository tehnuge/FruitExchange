import React from 'react'
var ReactDOM = require('react-dom')
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import routes from './routes'
var _ = require('lodash')
import classNames from 'classnames'





document.addEventListener("DOMContentLoaded", function(){
	ReactDOM.render(<Router routes={routes} history={browserHistory}/>, document.getElementById('root'))
	
})
