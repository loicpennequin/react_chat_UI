import React from 'react';
import { Switch } from 'react-router-dom';
import PrivateRoute from './PrivateRoute/PrivateRoute.jsx';
import LoggedOutRoute from './LoggedOutRoute/LoggedOutRoute.jsx';

import Home from './../../Home/Home.jsx';
import Dashboard from './../../Dashboard/Dashboard.jsx';

const AppRoutes = props => (
	<Switch>
		<LoggedOutRoute exact path="/" component={Home} />
		<PrivateRoute exact path="/dashboard" component={Dashboard} />
	</Switch>
);

export default AppRoutes;
