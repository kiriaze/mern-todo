import axios from 'axios';
import {
	LOGIN_SUCCESS,
	LOGIN_FAIL,
	REGISTER_SUCCESS,
	REGISTER_FAIL,
	USER_LOADED,
	AUTH_ERROR,
	LOGOUT,
	CLEAR_PROFILE
} from './types';

import setAuthToken from '../utils/setAuthToken';

// dispatch from redux

// Load User
export const loadUser = () => async dispatch => {
	// this will only checks the first time that the user loads, so we copy/past this in app.js as well
	if (localStorage.token) {
		setAuthToken(localStorage.token);
	}
	try {
		const res = await axios.get('/api/auth');
		dispatch({
			type: USER_LOADED,
			payload: res.data
		});
	} catch (err) {
		dispatch({
			type: AUTH_ERROR
		});
	}
};

// Register User
export const register = ({ name, email, password }) => async dispatch => {
	try {
		const config = {
			headers: {
				'Content-Type': 'application/json'
			}
		};

		const body = JSON.stringify({
			name,
			email,
			password
		});

		const res = await axios.post('/api/users', body, config);

		dispatch({
			type: REGISTER_SUCCESS,
			payload: res.data
		});

		dispatch(loadUser());
	} catch (err) {
		const errors = err.response.data.errors;
		if (errors) {
			errors.map(error =>
				// trying something different here, rather than passing in setAlert func with message, see if we can dispatch an object with only msg...
				dispatch({
					msg: error.msg
				})
			);
		}
		dispatch({
			type: REGISTER_FAIL
		});
	}
};

// Login User
export const login = ({ email, password }) => async dispatch => {
	try {
		const config = {
			headers: {
				'Content-Type': 'application/json'
			}
		};

		const body = JSON.stringify({
			email,
			password
		});

		const res = await axios.post('/api/auth', body, config);

		dispatch({
			type: LOGIN_SUCCESS,
			payload: res.data
		});

		dispatch(loadUser());
	} catch (err) {
		const errors = err.response.data.errors;
		if (errors) {
			errors.map(error =>
				dispatch({
					msg: error.message
				})
			);
		}
		dispatch({
			type: LOGIN_FAIL
		});
	}
};

// Logout User
export const logout = () => async dispatch => {
	dispatch({
		type: CLEAR_PROFILE
	});
	dispatch({
		type: LOGOUT
	});
};
