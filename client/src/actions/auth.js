import axios from 'axios';
import { USER_LOADED, AUTH_ERROR } from './types';

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
