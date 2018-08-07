import React from 'react';
import { Switch } from 'react-router-dom';
import Loadable from 'react-loadable';
import PrivateRoute from './PrivateRoute/PrivateRoute.jsx';
import LoggedOutRoute from './LoggedOutRoute/LoggedOutRoute.jsx';

const Loading = () => <div>Loading...</div>;

const Home = Loadable({
	loader: () => import(/*prefetch: true */ './../../Home/Home.jsx'),
	loading: Loading
});

const Dashboard = Loadable({
	loader: () => import(/*prefetch: true */ './../../Dashboard/Dashboard.jsx'),
	loading: Loading
});

const Profile = Loadable({
	loader: () => import(/*prefetch: true */ './../../Profile/Profile.jsx'),
	loading: Loading
});

const AppRoutes = props => (
	<Switch>
		<LoggedOutRoute exact path="/" component={Home} />
		<PrivateRoute exact path="/dashboard" component={Dashboard} />
		<PrivateRoute path="/profile/:id" component={Profile} />
	</Switch>
);

export default AppRoutes;
