import React, { Component } from 'react';
import LoginForm from './LoginForm/LoginForm.jsx';
import RegisterForm from './RegisterForm/RegisterForm.jsx';
import './Home.sass';

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			activeForm: 'SIGNIN'
		};
	}

	toggle() {
		this.setState({
			activeForm: this.state.activeForm === 'SIGNIN' ? 'SIGNUP' : 'SIGNIN'
		});
	}
	render() {
		return (
			<div styleName="home">
				{this.state.activeForm === 'SIGNIN' ? (
					<LoginForm />
				) : (
					<RegisterForm />
				)}
				<button styleName="toggle" onClick={() => this.toggle()}>
					{this.state.activeForm === 'SIGNIN'
						? 'No account ? Sign up !'
						: 'I already have an account !'}
				</button>
			</div>
		);
	}
}

export default Home;
