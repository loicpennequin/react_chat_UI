import store from './../store/store.js';
import api from './RESTService.js';

class UserService {
	static async fetch(id) {
		try {
			return await api.get('/users/' + id);
		} catch (err) {
			return err;
		}
	}

	static async fetchAll(like) {
		try {
			return await api.get('/users', { like });
		} catch (err) {
			return err;
		}
	}
}

export default UserService;
