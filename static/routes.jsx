import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './app'
import Main from './main'

module.exports = (
<div>
  <Route path="/" component={Main} />
	  <Route path="/profile" component={App} />
	{/*</Route> */} 
</div>
)