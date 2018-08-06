import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { subscribe } from 'react-contextual';
import store from './../../../resources/store/store.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AuthService from './../../../resources/services/AuthService.js';
import constants from './../../../resources/services/constants.js';
import Dropdown from './../../../Dropdown/Dropdown.jsx';
import AccountSettingsModal from './AccountSettingsModal/AccountSettingsModal.jsx';
import Avatar from './../../../Common/Avatar/Avatar.jsx';
import css from './Menu.sass';

@subscribe(store)
class Menu extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			showSubMenu: false,
			showAccountSettingsModal: false
		};
	}

	toggleSubMenu() {
		this.setState({ showSubMenu: !this.state.showSubMenu });
	}

	toggleAccountSettingsModal() {
		this.setState({
			showAccountSettingsModal: !this.state.showAccountSettingsModal
		});
	}
	render() {
		const menuHeader = (
			<div styleName="menu-header">
				<Avatar src={this.props.currentUser.avatar_url} size="lg" />
				<button
					styleName="menu-btn"
					onClick={() => this.props.onClose()}
				>
					<FontAwesomeIcon icon="times" size="2x" fixedWidth />
				</button>
			</div>
		);

		const profileLink = (
			<Link
				to={'/profile/' + this.props.currentUser.id}
				onClick={() => this.props.onClose()}
				styleName="menu-item"
			>
				<FontAwesomeIcon
					icon="user"
					styleName="menu-item_icon"
					size="lg"
					fixedWidth
				/>
				My Profile
			</Link>
		);

		const settingsMenu = (
			<React.Fragment>
				<button
					styleName="menu-item"
					onClick={() => this.toggleSubMenu()}
				>
					<FontAwesomeIcon
						icon="wrench"
						styleName="menu-item_icon"
						size="lg"
						fixedWidth
					/>
					Settings
					<FontAwesomeIcon
						icon="caret-right"
						styleName={`caret ${
							this.state.showSubMenu ? 'toggled' : ''
						}`}
						size="lg"
						fixedWidth
					/>
				</button>
				{this.state.showSubMenu ? (
					<div styleName="submenu">
						<div styleName="submenu_item">
							<h3>Language</h3>
							<Dropdown>
								<Dropdown.Header />
								{constants.SUPPORTED_LANGUAGES.map(lang => (
									<Dropdown.Item
										key={'lang-' + lang.label}
										text={lang.label}
									/>
								))}
							</Dropdown>
						</div>
						<div styleName="submenu_item">
							<h3>Theme</h3>
							<ul>
								{constants.THEMES.map(theme => (
									<button key={'theme-' + theme}>
										{theme}
									</button>
								))}
							</ul>
						</div>
						<div styleName="submenu_item">
							<h3
								onClick={() =>
									this.toggleAccountSettingsModal()
								}
							>
								Account Settings
							</h3>
						</div>
					</div>
				) : null}
			</React.Fragment>
		);

		const logoutButton = (
			<button styleName="menu-item" onClick={AuthService.logout}>
				<FontAwesomeIcon
					icon="power-off"
					styleName="menu-item_icon"
					size="lg"
					fixedWidth
				/>
				Logout
			</button>
		);

		return (
			<React.Fragment>
				{this.state.showAccountSettingsModal ? (
					<AccountSettingsModal
						onClose={() => this.toggleAccountSettingsModal()}
					/>
				) : null}
				<div styleName="menu-wrapper">
					<aside styleName="menu">
						{menuHeader}
						{profileLink}
						{settingsMenu}
						{logoutButton}
					</aside>
				</div>
			</React.Fragment>
		);
	}
}

export default Menu;
