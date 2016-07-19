import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Navbar from './navbar'
import Profile from './profile'
import Main from './main'
import Login from './login'
import UserItem from './userItem'
import SignUp from './signup'
import Buy from './buy'
import Home from './home'

module.exports = (
<div>
  <Route path="/" component={Navbar}>
  	<IndexRoute component={Home} />
  	<Route path="/main" component={Main}>
  		<Route path="/main/:itemName" component={Buy} />
  	</Route>
	  <Route path="/profile" component={Profile}>
	  	<Route path="/profile/:itemName" component={UserItem}/>
	  </Route>
	<Route path="/login" component={Login} />
	<Route path="/signup" component={SignUp} />
	</Route>
</div>
)