import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { subscribe } from 'react-contextual';
import store from './../../../resources/store/store.js';

const LoggedOutRoute = ({ component: Component, ...rest }) => (
	<Route
		{...rest}
		render={props =>
			!rest.authenticated ? (
				<Component {...props} />
			) : (
				<Redirect
					to={{
						pathname: '/dashboard',
						state: { from: props.location }
					}}
				/>
			)
		}
	/>
);
export default subscribe(store)(LoggedOutRoute);
