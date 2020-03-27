import axios from 'axios';

// set global headers for user auth
// sent with every request
const setAuthToken = token => {
	if (token) {
		axios.defaults.headers.common['x-auth-token'] = token;
	} else {
		// if what we pass in is not a token, then we delete from global headers
		delete axios.defaults.headers.common['x-auth-token'];
	}
};

export default setAuthToken;
