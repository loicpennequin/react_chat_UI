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

	static async update(id, formData){
		try {
			return await api.w
				.url('/users/' + id)
				.auth(`Bearer ${localStorage.getItem('token')}`)
				.body(formData)
				.put()
		} catch (err) {
			return err;
		}
	}
}

export default UserService;
