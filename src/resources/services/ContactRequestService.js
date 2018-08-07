import store from './../store/store.js';
import api from './RESTService.js';
import socket from './Io.js';

class ContactRequestService {
	static async sendRequest(body) {
		try {
			return await api.post('/requests/', body);
		} catch (err) {
			return err;
		}
	}

	static async acceptRequest(id) {
		try {
			await api.get(`/requests/${id}/accept`);
			socket.emit('accepted contact request');
		} catch (err) {
			return err;
		}
	}

	static async denyRequest(id) {
		try {
			return await api.get(`/requests/${id}/deny`);
		} catch (err) {
			return err;
		}
	}
}

export default ContactRequestService;
