import React, { Component } from 'react';
import { subscribe } from 'react-contextual';
import store from './../resources/store/store.js';
import AuthService from './../resources/services/AuthService.js';
import AppRoutes from './AppRoutes/AppRoutes.jsx';
import Navbar from './Navbar/Navbar.jsx';
import './Layout.sass';

@subscribe(store)
class Layout extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: true
		};
	}

	async componentDidMount() {
		try {
			await AuthService.verifyAuth();
		} catch (err) {
			console.log('something went wrong');
		}
		this.setState({
			loading: false
		});
	}

	render() {
		const UI = (
			<React.Fragment>
				{this.props.authenticated ? <Navbar /> : null}
				<AppRoutes />
			</React.Fragment>
		);
		return (
			<div
				styleName={`layout ${
					this.props.authenticated ? 'with-navbar' : ''
				}`}
				className={'theme-' + this.props.selectedTheme}
			>
				{this.state.loading ? null : UI}
			</div>
		);
	}
}

export default Layout;
