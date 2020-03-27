const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const auth = require('../../middleware/auth');
const User = require('../../models/User');
const jwt = require('jsonwebtoken');
const config = require('config'); // package for access to config/ dir
const { check, validationResult } = require('express-validator');

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

module.exports = auth;
