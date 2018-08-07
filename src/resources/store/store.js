import { createStore } from 'react-contextual';

let store = createStore({
	currentUser: {},
	setCurrentUser: user => state => ({ currentUser: user }),
	selectedTheme : "default",
	setTheme: theme => state => ({ selectedTheme : theme }),
	authenticated: false,
	login: () => state => ({ authenticated: true }),
	logout: () => state => ({ authenticated: false }),
	onlineContacts: [],
	setOnlineContacts: contacts => state => ({ onlineContacts : contacts }),
	addOnlineContact: contact => state => ({ onlineContacts : [ ...state.onlineContacts, contact]}),
	removeOnlineContact: contact => state => ({ onlineContacts : state.onlineContacts.filter(c => c != contact)})
});

export default store;
