import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Profile from './profile'
import Main from './main'
import Login from './login'

module.exports = (
<div>
  <Route path="/" component={Main} />
	  <Route path="/profile" component={Profile} />
	<Route path="/login" component={Login} />
</div>
)