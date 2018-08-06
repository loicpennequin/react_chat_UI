import { createStore } from 'react-contextual';

let store = createStore({
	authenticated: false,
	currentUser: {},
	setCurrentUser: user => state => ({ currentUser: user }),
	login: () => state => ({ authenticated: true }),
	logout: () => state => ({ authenticated: false })
});

export default store;
