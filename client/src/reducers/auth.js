// import our action types
import {
	LOGIN_SUCCESS,
	LOGIN_FAIL,
	REGISTER_SUCCESS,
	REGISTER_FAIL,
	USER_LOADED,
	AUTH_ERROR,
	LOGOUT,
	// CLEAR_PROFILE,
	ACCOUNT_DELETED
} from '../actions/types';

// setup initialState
const initialState = {
	token: localStorage.getItem('token'),
	isAuthenticated: null,
	loading: true, // true by default; once we get response we set to false
	user: null
};

// export function passing (state,action) and switch off action types to return objects containing updated state, payload, etc.
export default function (state = initialState, action) {
	const { type, payload } = action;

	switch (type) {
		case USER_LOADED:
			return {
				...state,
				user: payload,
				isAuthenticated: true,
				loading: false
			};
		case LOGIN_SUCCESS:
		case REGISTER_SUCCESS:
			localStorage.setItem('token', payload.token);
			return {
				...state,
				...payload,
				isAuthenticated: true,
				loading: false
			};
		case LOGOUT:
		case AUTH_ERROR:
		case LOGIN_FAIL:
		case REGISTER_FAIL:
		case ACCOUNT_DELETED:
			localStorage.removeItem('token');
			return {
				...state,
				token: null,
				isAuthenticated: false,
				loading: false
			};
		default:
			return state;
	}
}
