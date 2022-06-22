import api from './http';

const registration = (data) => {
	return api.post('/auth/register', data);
};

const login = (data) => {
	return api.post('/auth/login', data);
};

const AuthService = {
	registration,
	login,
};

export default AuthService;
