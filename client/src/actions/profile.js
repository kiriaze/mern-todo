import axios from 'axios';
import { setAlert } from './alert';
import {
	GET_PROFILE,
	GET_PROFILES,
	PROFILE_ERROR,
	// UPDATE_PROFILE,
	CLEAR_PROFILE,
	ACCOUNT_DELETED
} from './types';

// Get current user's profile
export const getCurrentProfile = () => async dispatch => {
	try {
		const res = await axios.get('/api/profile/me');

		dispatch({
			type: GET_PROFILE,
			payload: res.data
		});
	} catch (err) {
		dispatch({
			type: CLEAR_PROFILE // reset
		});
		dispatch({
			type: PROFILE_ERROR,
			// since our initialState has an error object
			payload: {
				msg: err.response.statusText,
				status: err.response.status // http status; 400, etc.
			}
		});
	}
};

// Get all profiles
export const getProfiles = () => async dispatch => {
	// prevent flashing of the past users profile
	// since we store in state
	dispatch({
		type: CLEAR_PROFILE
	});
	try {
		const res = await axios.get('/api/profile');
		dispatch({
			type: GET_PROFILES,
			payload: res.data
		});
	} catch (err) {
		dispatch({
			type: PROFILE_ERROR,
			payload: {
				msg: err.response.statusText,
				status: err.response.status
			}
		});
	}
};

// Get profile by ID
export const getProfileById = userId => async dispatch => {
	try {
		const res = await axios.get(`/api/profile/user/${userId}`);
		dispatch({
			type: GET_PROFILE,
			payload: res.data
		});
	} catch (err) {
		dispatch({
			type: PROFILE_ERROR,
			payload: {
				msg: err.response.statusText,
				status: err.response.status
			}
		});
	}
};

// Create or update user profile
export const createProfile = (
	formData,
	history,
	edit = false
) => async dispatch => {
	try {
		const config = {
			headers: {
				'Content-Type': 'application/json'
			}
		};

		const res = await axios.post('/api/profile', formData, config);

		dispatch({
			type: GET_PROFILE,
			payload: res.data
		});

		dispatch(setAlert(edit ? 'Profile Updated' : 'Profile Created', 'success'));

		if (!edit) {
			history.push('/dashboard');
		}
	} catch (err) {
		const errors = err.response.data.errors;

		if (errors) {
			errors.map(error => dispatch(setAlert(error.msg, 'danger')));
		}

		dispatch({
			type: PROFILE_ERROR,
			payload: {
				msg: err.response.statusText,
				status: err.response.status // http status; 400, etc.
			}
		});
	}
};

// Delete user acount
export const deleteAccount = () => async dispatch => {
	if (window.confirm('Are you sure? This can NOT be undone!')) {
		try {
			await axios.delete('/api/users');

			// should we remove the users data? e.g. tasks, comments, etc.
			dispatch({
				type: CLEAR_PROFILE
			});

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
