import React, { Component } from 'react';
import Form from './../../Common/Form/Form.jsx';
import AuthService from './../../resources/services/AuthService.js';
import './LoginForm.sass';

class LoginForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			fields: [
				{ name: 'username', type: 'text', errors: [] },
				{ name: 'password', type: 'password', errors: [] }
			]
		};
	}

	async login(values) {
		await AuthService.login(values);
	}

	render() {
		return (
			<div styleName="login-form">
				<h1 styleName="title">Login</h1>
				<Form
					fields={this.state.fields}
					submitMessage="SIGN IN"
					onSubmit={values => this.login(values)}
				/>
				<button styleName="forgot-password">
					Forgot your password?
				</button>
			</div>
		);
	}
}

export default LoginForm;
