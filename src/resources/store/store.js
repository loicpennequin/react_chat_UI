import { createStore } from 'react-contextual';

let store = createStore({
	//Current user
	currentUser: {},
	setCurrentUser: user => state => ({ currentUser: user }),
	//Theme
	selectedTheme : "default",
	setTheme: theme => state => ({ selectedTheme : theme }),
	//Authentication
	authenticated: false,
	login: () => state => ({ authenticated: true }),
	logout: () => state => ({ authenticated: false }),
	//Online contacts
	onlineContacts: [],
	setOnlineContacts: contacts => state => ({ onlineContacts : contacts }),
	addOnlineContact: contact => state => ({ onlineContacts : [ ...state.onlineContacts, contact]}),
	removeOnlineContact: contact => state => ({ onlineContacts : state.onlineContacts.filter(c => c != contact)}),
	//Chatrooms
	openedChatRooms: [],
	addChatRoom: room => state => ({ openedChatRooms : [ ...state.openedChatRooms, room]}),
	removeChatRoom: room => state => ({ openedChatRooms : state.openedChatRooms.filter(r => r != room)})
});

export default store;
