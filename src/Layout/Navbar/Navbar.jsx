import React, { Component } from 'react';
import { debounce } from 'lodash';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CSSTransition } from 'react-transition-group';
import UserService from './../../resources/services/UserService.js';
import Searchbar from './Searchbar/Searchbar.jsx';
import Menu from './Menu/Menu.jsx';

import css from './Navbar.sass';

class Navbar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showMenu: false,
			isSearching: false,
			searchResults: [],
			searchbarFocused: false
		};
		this._searchResults = debounce(this._searchResults, 300);
		this.handleSearchbarFocus = this.handleSearchbarFocus.bind(this);
	}

	handleSearchbarFocus(value) {
		setTimeout(() => {
			this.setState({
				searchbarFocused: value
			});
		});
	}

	toggleMenu() {
		this.setState({
			showMenu: !this.state.showMenu
		});
	}

	searchResults(e) {
		e.persist();
		this._searchResults(e);
	}

	async _searchResults(e) {
		if (e.target.value !== '') {
			await this.setState({ isSearching: true });
			const { users } = await UserService.fetchAll(e.target.value);

			this.setState({ searchResults: users, isSearching: false });
		} else {
			this.setState({ searchResults: [], isSearching: false });
		}
	}

	render() {
		return (
			<div styleName="navbar">
				<button styleName="menu-btn" onClick={() => this.toggleMenu()}>
					<FontAwesomeIcon icon="bars" size="3x" fixedWidth />
				</button>
				<Searchbar
					onChange={e => this.searchResults(e)}
					searchResults={this.state.searchResults}
					isSearching={this.state.isSearching}
					toggle={this.handleSearchbarFocus}
					focused={this.state.searchbarFocused}
				/>
				<CSSTransition
					in={this.state.showMenu}
					timeout={500}
					classNames={{
						enter: css['menu-enter'],
						enterActive: css['menu-enter-active'],
						exit: css['menu-exit'],
						exitActive: css['menu-exit-active']
					}}
					unmountOnExit
				>
					<Menu onClose={() => this.toggleMenu()} />
				</CSSTransition>
			</div>
		);
	}
}

export default Navbar;
