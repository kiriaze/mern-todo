const express = require('express');
const router = express.Router();
const config = require('config');
const request = require('request');
const auth = require('../../middleware/auth');

const { check, validationResult } = require('express-validator');

const Profile = require('../../models/Profile');
const User = require('../../models/User');
const Task = require('../../models/Task');

// @route    POST api/profile
// @desc     Create/Update user profile
// @access   Private
router.post(
	'/',
	[
		// auth and validation middleware in array
		auth,
		check('bio', 'Bio is required').not().isEmpty()
	],
	async (req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({
				errors: errors.array()
			});
		}

		const { company, location, bio } = req.body;

		// Build profile object
		const profileFields = {
			user: req.user.id,
			company,
			location,
			bio
		};

		// Update/insert data
		try {
			let profile = await Profile.findOne({
				user: req.user.id
			});
			if (profile) {
				// update
				profile = await Profile.findOneAndUpdate(
					{
						user: req.user.id
					},
					{
						$set: profileFields // sets the values
					},
					{
						new: true
					}
				);

				return res.json(profile);
			}

			// Create
			profile = new Profile(profileFields);
			await profile.save();
			res.json(profile);
		} catch (err) {
			console.error(err.message);
			res.status(500).send('Server Error');
		}
	}
);

// @route    GET api/profile/me
// @desc     Get current users profile
// @access   Private
router.get('/me', auth, async (req, res) => {
	try {
		const profile = await Profile.findOne({
			// pertains to the Profile model user field, the objectId of the user
			user: req.user.id
		}).populate('user', ['name', 'avatar']); // bring in fields from user

		if (!profile) {
			return res.status(400).json({
				msg: 'There is no profile for this user'
			});
		}

		res.json(profile);
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server Error');
	}
});

// @route    GET api/profile
// @desc     Get all profiles
// @access   Public
router.get('/', async (req, res) => {
	try {
		const profiles = await Profile.find().populate('user', ['name', 'avatar']);
		res.json(profiles);
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server Error');
	}
});

// @route    GET api/profile/user/:user_id
// @desc     Get profile by user ID
// @access   Public
router.get('/user/:user_id', async (req, res) => {
	try {
		const profile = await Profile.findOne({
			user: req.params.user_id // access from url by using: req.params
		}).populate('user', ['name', 'avatar']);
		if (!profile)
			return res.status(400).json({
				msg: 'Profile not found'
			});
		res.json(profile);
	} catch (err) {
		console.error(err.message);
		if (err.kind == 'ObjectId') {
			return res.status(400).json({
				msg: 'Profile not found'
			});
		}
		res.status(500).send('Server Error');
	}
});

// @route    DELETE api/profile
// @desc     Delete profile, user & posts
// @access   Private
router.delete('/', auth, async (req, res) => {
	try {
		// Remove users posts
		await Task.deleteMany({
			user: req.user.id
		});

		// Remove profile
		await Profile.findOneAndRemove({
			user: req.user.id
		});

		// Remove User
		await User.findOneAndRemove({
			_id: req.user.id
		});

		res.json({
			msg: 'User deleted'
		});
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server Error');
	}
});

module.exports = router;
