import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AuthService from './../../../resources/services/AuthService.js';

import './Menu.sass';

class Menu extends React.Component {
	constructor(props) {
		super(props);
	}

	toggleSettingsModal() {
		this.setState({ showSettingsModal: !this.state.showSettingsModal });
	}
	render() {
		return (
			<React.Fragment>
				<div styleName="menu-wrapper">
					<aside styleName="menu">
						<button
							styleName="menu-btn"
							onClick={() => this.props.onClose()}
						>
							<FontAwesomeIcon icon="bars" size="3x" fixedWidth />
						</button>
						<p styleName="menu-item">
							<FontAwesomeIcon
								icon="user"
								styleName="menu-item_icon"
								size="lg"
								fixedWidth
							/>
							Status
						</p>
						<button
							styleName="menu-item"
							onClick={() => this.toggleSettingsModal()}
						>
							<FontAwesomeIcon
								icon="wrench"
								styleName="menu-item_icon"
								size="lg"
								fixedWidth
							/>
							Settings
						</button>
						<button
							styleName="menu-item"
							onClick={AuthService.logout}
						>
							<FontAwesomeIcon
								icon="power-off"
								styleName="menu-item_icon"
								size="lg"
								fixedWidth
							/>
							Logout
						</button>
					</aside>
				</div>
			</React.Fragment>
		);
	}
}

export default Menu;
