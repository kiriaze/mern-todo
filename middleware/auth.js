const config = require('config');
const jwt = require('jsonwebtoken');

// a middlewware function is basically just a function that has access to the request and response objects
// next is a callback that we have to run when once we're done so that it moves on to the next piece of middleware
module.exports = (req, res, next) => {
	// Get token from header; when we send request to protected route we need to send token within header
	const token = req.header('x-auth-token');

	// Check if no token
	if (!token) {
		// 401 not authorized
		return res.status(401).json({
			msg: 'No token provided, authorization denied'
		});
	}

	// Verify token
	try {
		// decode token
		const decoded = jwt.verify(token, config.get('jwtSecret'));

		req.user = decoded.user;

		next(); // cb; like we would do in any middleware
	} catch (err) {
		res.status(401).json({
			msg: 'Token is not valid'
		});
	}
};
