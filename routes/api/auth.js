const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const auth = require('../../middleware/auth');
const jwt = require('jsonwebtoken');
const config = require('config'); // package for access to config/ dir
const { check, validationResult } = require('express-validator');

const User = require('../../models/User');

// @route    GET api/auth
// @desc     Auth route
// @access   Public
router.get('/', auth, async (req, res) => {
	try {
		// bring in User model, returning user object without password
		const user = await User.findById(req.user.id).select('-password');
		res.json(user);
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server Error');
	}
});

// @route    POST api/auth
// @desc     Authenticate user & get token
// @access   Public
router.post(
	'/',
	[
		check('email', 'Please provide a valid email').isEmail(),
		check('password', 'Password is required').exists()
	],
	async (req, res) => {
		const errors = validationResult(req);

		if (!errors.isEmpty()) {
			return res.status(400).json({
				errors: errors.array()
			});
		}

		const { email, password } = req.body;

		try {
			// see if user exists
			let user = await User.findOne({ email });

			if (!user) {
				return res.status(400).json({
					// matching formatting to other error responses
					errors: [
						{
							msg: 'Invalid Credentials'
						}
					]
				});
			}

			// compare plain text pw with db user pw
			const isMatch = await bcrypt.compare(password, user.password);

			if (!isMatch) {
				return res.status(400).json({
					errors: [
						{
							msg: 'Invalid Credentials'
						}
					]
				});
			}

			const payload = {
				user: {
					id: user.id
				}
			};

			// return json web token / sign it
			jwt.sign(
				payload,
				config.get('jwtSecret'),
				{
					expiresIn: 360000 // large num for dev; change to 3600/1hr for prod
				},
				(err, token) => {
					if (err) throw err;
					res.json({ token });
				}
			);
		} catch (err) {
			console.error(err.message);
			res.status(500).send('Server Error');
		}
	}
);

module.exports = router;
