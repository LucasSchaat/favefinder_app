import React from 'react'
import {Switch, Route} from 'react-router-dom'
import AddFave from './Components/AddFave'
import Dashboard from './Components/Dashboard'
import Highlight from './Components/Highlight'
import LoginRegister from './Components/LoginRegister'
import AllFaves from './Components/AllFaves'
import MyFaves from './Components/MyFaves'

export default (
	<Switch>
		<Route exact path="/" component={LoginRegister} />
		<Route path="/main" component={Dashboard} />
		<Route path="/add-fave" component={AddFave} />
		<Route path="/all-faves" component={AllFaves} />
		<Route path="/my-faves" component={MyFaves} />
		<Route path="/fave/:id" component={Highlight} />
	</Switch>
);