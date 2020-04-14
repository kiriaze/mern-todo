import axios from 'axios';
import { setAlert } from './alert';
import {
	LOGIN_SUCCESS,
	LOGIN_FAIL,
	REGISTER_SUCCESS,
	REGISTER_FAIL,
	USER_LOADED,
	AUTH_ERROR,
	LOGOUT,
	ACCOUNT_DELETED,
	CLEAR_PROFILE
} from './types';

// Load User
export const loadUser = () => async dispatch => {
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
			errors.map(error => dispatch(setAlert(error.msg, 'danger')));
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
			errors.map(error => dispatch(setAlert(error.msg, 'danger')));
		}
		dispatch({
			type: LOGIN_FAIL
		});
	}
};

// Logout User / Clear Profile
export const logout = () => async dispatch => {
	dispatch({
		type: CLEAR_PROFILE
	});
	dispatch({
		type: LOGOUT
	});
};

// Delete user acount
export const deleteAccount = () => async dispatch => {
	if (window.confirm('Are you sure? This can NOT be undone!')) {
		try {
			await axios.delete('/api/users');

			// should we remove the users data? e.g. tasks, comments, etc.

			dispatch({
				type: ACCOUNT_DELETED
			});
			dispatch(setAlert('Your account has been permanently deleted.'));
		} catch (err) {
			dispatch(setAlert(err.response.statusText));
			// dispatch({
			// 	type: PROFILE_ERROR,
			// 	payload: {
			// 		msg: err.response.statusText,
			// 		status: err.response.status
			// 	}
			// });
		}
	}
};
