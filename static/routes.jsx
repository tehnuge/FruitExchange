import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Navbar from './navbar'
import Profile from './profile'
import Main from './main'
import Login from './login'
import Item from './item'

module.exports = (
<div>
  <Route path="/" component={Navbar}>
  	<IndexRoute component={Main} />
	  <Route path="/profile" component={Profile}>
	  	<Route path="/profile/:itemName" component={Item}/>
	  </Route>
	<Route path="/login" component={Login} />
	</Route>
</div>
)