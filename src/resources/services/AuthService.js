import store from './../store/store.js';
import api from './RESTService.js';
import UserService from './UserService.js';

class AuthService {
	static async register(body) {
		try {
			let response = await api.post('/register', body);
			return response;
		} catch (err) {
			return err;
		}
	}

	static async verifyAuth() {
		let { authenticated } = await api.get('/isloggedin');
		if (authenticated) {
			await store.state.login();
			const uid = localStorage.getItem('uid');
			const user = await UserService.fetch(uid);
			store.state.setCurrentUser(user);
		}
	}

	static async login(body) {
		let response = await api.post('/login', body);
		if (response.userId) {
			await store.state.login();
			const user = await UserService.fetch(response.userId);
			store.state.setCurrentUser(user);
		}
	}

	static async logout() {
		localStorage.removeItem('token');
		localStorage.removeItem('uid');
		store.state.logout();
	}
}

export default AuthService;
