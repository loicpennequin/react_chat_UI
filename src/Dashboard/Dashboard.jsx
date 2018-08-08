import React, { Component } from 'react';
import { subscribe } from 'react-contextual';
import store from './../resources/store/store.js';
import ContactList from './ContactList/ContactList.jsx';

@subscribe(store)
class Dashboard extends Component {
	render() {
		return (
			<React.Fragment>
				<ContactList />
			</React.Fragment>
		)
	}
}

export default Dashboard;
