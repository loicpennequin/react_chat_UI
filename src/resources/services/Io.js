import io from 'socket.io-client';
import constants from './constants.js';

const socket = io(constants.API_URL, {transports: ['websocket']});

socket.on('contact logged in', ({id}) => {
    console.log('user ' + id + ' logged in');
})

socket.on('contact logged out', ({id}) => {
    console.log('user ' + id + ' logged out');
})
export default socket
