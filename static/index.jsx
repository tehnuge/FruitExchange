import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import routes from './routes'
import _ from 'lodash'
import classNames from 'classnames'





document.addEventListener("DOMContentLoaded", function(){
	ReactDOM.render(<Router routes={routes} history={browserHistory} />, document.getElementById('root'))
	
})
