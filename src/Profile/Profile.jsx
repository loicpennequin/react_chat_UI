import React, { Component } from 'react';
import { subscribe } from 'react-contextual';
import store from './../resources/store/store.js';

@subscribe(store)
class Profile extends Component {
	render() {
		return <div>Profile Page</div>;
	}
}

export default Profile;
