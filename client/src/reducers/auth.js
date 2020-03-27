// import our action types
import { USER_LOADED, AUTH_ERROR } from '../actions/types';

// setup initialState
const initialState = {
	token: localStorage.getItem('token'),
	isAuthenticated: null,
	loading: true, // true by default; once we get response we set to false
	user: null
};

// export function passing (state,action) and switch off action types to return objects containing updated state, payload, etc.
export default function (state = initialState, action) {
	const [type, payload] = action;
}
