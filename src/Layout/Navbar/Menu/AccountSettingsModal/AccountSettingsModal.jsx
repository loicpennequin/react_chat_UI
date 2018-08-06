import React, { Component } from 'react';
import { subscribe } from 'react-contextual';
import store from './../../../../resources/store/store.js';
import UserService from './../../../../resources/services/UserService.js';
import Modal from './../../../../Common/Modal/Modal.jsx';
import FormField from './../../../../Common/Form/FormField/FormField.jsx';
import css from './AccountSettingsModal.sass';

@subscribe(store)
class AccountSettingsModal extends Component {
	constructor(props) {
		super(props);
		this.state = {
			fields: [
				{
					name: 'email',
					type: 'email',
					defaultValue: this.props.currentUser.email,
					errors: []
				},
				{ name: 'avatar', type: 'file', errors: [] },
				{ name: 'password', type: 'password', errors: [] },
				{ name: 'password confirm', type: 'password', errors: [] }
			]
		};

		this.form = React.createRef();
	}

	async applyChanges() {
		const formData = new FormData(this.form.current);
		for (let value of formData.entries()) {
			if (
				(value[0] === 'password' || value[0] === 'password') &&
				value[1] === ''
			) {
				formData.delete(value[0]);
			}
		}

		await this.props.setCurrentUser(
			await UserService.update(this.props.currentUser.id, formData)
		);

		this.props.onClose();
	}

	render() {
		return (
			<Modal onClose={() => this.props.onClose()} className={css.wrapper}>
				<Modal.Header>
					<h2>Account Settings</h2>
				</Modal.Header>
				<Modal.Content>
					<form ref={this.form}>
						{this.state.fields.map(f => (
							<FormField
								key={'acountsettingsmodal-' + f.name}
								{...f}
							/>
						))}
					</form>
				</Modal.Content>
				<Modal.Footer>
					<button onClick={() => this.props.onClose()}>Cancel</button>
					<button onClick={() => this.applyChanges()}>Apply</button>
				</Modal.Footer>
			</Modal>
		);
	}
}

export default AccountSettingsModal;
