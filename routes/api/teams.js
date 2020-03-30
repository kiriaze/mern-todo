const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator');

const Team = require('../../models/Team');

// @route    GET api/teams
// @desc     Get all Teams
// @access   Private
router.get('/', async (req, res) => {
	try {
		const teams = await Team.find();
		res.json(teams);
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server Error');
	}
});

// @route    GET api/teams/:id
// @desc     Get Team by ID
// @access   Private
router.get('/:id', async (req, res) => {
	try {
		const team = await Team.findById(req.params.id);
		if (!team) {
			return res.status(404).json({
				msg: 'Team not found'
			});
		}
		res.json(team);
	} catch (err) {
		console.error(err.message);
		if (error.kind === 'ObjectId') {
			return res.status(404).json({
				msg: 'Team not found'
			});
		}
		res.status(500).send('Server Error');
	}
});

// @route    POST api/teams
// @desc     Create a Team
// @access   Private
router.post(
	'/',
	[auth, [check('name', 'Name is required').not().isEmpty()]],
	async (req, res) => {
		const errors = validationResult(req);

		if (!errors.isEmpty()) {
			return res.status(400).json({
				errors: errors.array()
			});
		}

		try {
			const newTeam = new Team({
				admin: req.user.id, // might change this back to user in Team model
				name: req.body.name,
				description: req.body.description,
				users: req.body.users,
				projects: req.body.projects,
				tasks: req.body.tasks
			});

			const team = await newTeam.save();

			res.json(team);
		} catch (err) {
			console.error(err.message);
			res.status(500).send('Server Error');
		}
	}
);

// @route    DELETE api/teams/:id
// @desc     Delete a Team by ID
// @access   Private
router.delete('/:id', auth, async (req, res) => {
	try {
		const team = await Team.findById(req.params.id);
		if (!team) {
			return res.status(404).json({
				msg: 'Team not found'
			});
		}

		// user or admin? make sure model matches prop
		if (team.admin.toString() !== req.user.id) {
			return res.status(401).json({
				msg: 'User not authorized'
			});
		}

		await team.remove();

		res.json('Team removed');
	} catch (err) {
		console.error(err.message);
		if (err.kind === 'ObjectId') {
			return res.status(404).json({
				msg: 'Team not found'
			});
		}
		res.status(500).send('Server Error');
	}
});

module.exports = router;
