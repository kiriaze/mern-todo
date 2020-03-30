const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator');

const User = require('../../models/User');
const Team = require('../../models/Team');
const Project = require('../../models/Project');

// @route    GET api/projects
// @desc     Get all Projects
// @access   Private
router.get('/', async (req, res) => {
	try {
		const projects = await Project.find();
		res.json(projects);
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server Error');
	}
});

// @route    GET api/projects/:id
// @desc     Get Project by ID
// @access   Private
router.get('/:id', async (req, res) => {
	try {
		const project = await Project.findById(req.params.id);
		if (!project) {
			return res.status(404).json({
				msg: 'Project not found'
			});
		}
		res.json(project);
	} catch (err) {
		console.error(err.message);
		if (err.kind === 'ObjectId') {
			return res.status(404).json({
				msg: 'Project not found'
			});
		}
		res.status(500).send('Server Error');
	}
});

// @route    POST api/projects
// @desc     Create a project
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
			// const user = await User.findById(req.user.id).select('-password');

			const newProject = new Project({
				user: req.user.id,
				name: req.body.name,
				description: req.body.description,
				team: req.body.team,
				tasks: req.body.tasks

				// admin: user.name,
				// avatar: user.avatar // from user model above
			});

			const project = await newProject.save();

			res.json(project);
		} catch (err) {
			console.error(err.message);
			res.status(500).send('Server Error');
		}
	}
);

// @route    DELETE api/projects
// @desc     Delete a project
// @access   Private
router.delete('/:id', auth, async (req, res) => {
	try {
		const project = await Project.findById(req.params.id);

		if (!project) {
			return res.status(404).json({
				msg: 'Project not found'
			});
		}

		if (project.user.toString() !== req.user.id) {
			return res.status(401).json({
				msg: 'User not authorized'
			});
		}

		await project.remove();

		res.json('Project removed');
	} catch (err) {
		console.error(err.message);
		if (err.kind === 'ObjectId') {
			return res.status(404).json({
				msg: 'Project not found'
			});
		}
		res.status(500).send('Server Error');
	}
});

module.exports = router;
