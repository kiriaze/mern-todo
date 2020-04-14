import {
	LOGIN_SUCCESS,
	// LOGIN_FAIL,
	REGISTER_SUCCESS,
	// REGISTER_FAIL,
	USER_LOADED,
	AUTH_ERROR,
	LOGOUT,
	// CLEAR_PROFILE,
	ACCOUNT_DELETED
} from '../actions/types';

const initialState = {
	token: localStorage.getItem('token'),
	isAuthenticated: null,
	loading: true,
	user: null
};

export default function (state = initialState, action) {
	const { type, payload } = action;

	switch (type) {
		case USER_LOADED:
			return {
				...state,
				isAuthenticated: true,
				loading: false,
				user: payload
			};
		case REGISTER_SUCCESS:
			return {
				...state,
				...payload,
				isAuthenticated: true,
				loading: false,
				user: payload
			};
		case LOGIN_SUCCESS:
			return {
				...state,
				...payload,
				isAuthenticated: true,
				loading: false
			};
		case ACCOUNT_DELETED:
		case AUTH_ERROR:
		case LOGOUT:
			return {
				...state,
				token: null,
				isAuthenticated: false,
				loading: false,
				user: null
			};
		default:
			return state;
	}
}
