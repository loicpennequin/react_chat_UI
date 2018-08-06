import React, { Component } from 'react';
import { subscribe } from 'react-contextual';
import store from './../resources/store/store.js';

@subscribe(store)
class Dashboard extends Component {
	render() {
		return <div>Hello, {this.props.currentUser.username} !</div>;
	}
}

export default Dashboard;
