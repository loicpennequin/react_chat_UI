import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Form from './../../Common/Form/Form.jsx';
import AuthService from './../../resources/services/AuthService.js';
import './RegisterForm.sass';

class RegisterForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			fields: [
				{ name: 'username', type: 'text', errors: [] },
				{ name: 'password', type: 'password', errors: [] },
				{ name: 'password confirm', type: 'password', errors: [] },
				{ name: 'email', type: 'email' }
			],
			showSuccessMessage: false,
			errors: []
		};
	}

	async register(values) {
		const { errors } = await AuthService.register(values);
		if (errors) {
			await this.setState({
				fields: this.state.fields.map(field =>
					Object.assign(field, { errors: [] })
				)
			});

			await this.setState(state => {
				errors.map(err => {
					state.fields
						.find(f => f.name === err.param)
						.errors.push(err.msg);
				});
				return state;
			});
		} else {
			this.setState({
				showSuccessMessage: true,
				fields: this.state.fields.map(field =>
					Object.assign(field, { errors: [] })
				)
			});
		}
	}

	validate(values) {
		return values.password === values['password confirm'];
	}

	render() {
		return (
			<div styleName="register-form">
				<h1 styleName="title">Join Us</h1>
				{!this.state.showSuccessMessage ? (
					<Form
						fields={this.state.fields}
						submitMessage="SIGN UP"
						onSubmit={values => this.register(values)}
						validateFn={this.validate}
					/>
				) : (
					<div styleName="success-message">
						<FontAwesomeIcon
							icon={['far', 'check-circle']}
							styleName="icon"
							size="3x"
							fixedWidth
						/>
						<p>Registration successful !</p>
					</div>
				)}
			</div>
		);
	}
}

export default RegisterForm;
