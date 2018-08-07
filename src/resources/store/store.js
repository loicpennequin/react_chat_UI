import { createStore } from 'react-contextual';

let store = createStore({
	currentUser: {},
	setCurrentUser: user => state => ({ currentUser: user }),
	selectedTheme : "default",
	setTheme: theme => state => ({ selectedTheme : theme }),
	authenticated: false,
	login: () => state => ({ authenticated: true }),
	logout: () => state => ({ authenticated: false })
});

export default store;
