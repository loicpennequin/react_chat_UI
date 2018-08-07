import io from 'socket.io-client';
import constants from './constants.js';
import store from './../store/store.js';

const socket = io(constants.API_URL, {transports: ['websocket']});

socket.on('contact logged in', ({id}) => {
    store.state.addOnlineContact(id);
})

socket.on('contact logged out', ({id}) => {
    store.state.removeOnlineContact(id);
})

socket.on('get online contacts', ids => {
    store.state.setOnlineContacts(ids);
})
export default socket
