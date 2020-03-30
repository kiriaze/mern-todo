const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator');

const User = require('../../models/User');
const Task = require('../../models/Task');

// @route    GET api/tasks
// @desc     Get all tasks; Although, not useful unless debugging. Ideally, we'd return all of a users tasks, and have separate routes for all tasks pertaining to a project or team.
// @access   Private
router.get('/', auth, async (req, res) => {
	try {
		const tasks = await Task.find().sort({
			date: -1 // most recent first; inverse for oldest first
		});
		// @todo - Filter through tasks that match logged in user's ID with task author
		// only return tasks that the user has access to;
		// tasks created by the user
		// tasks that pertain to a team that the user is a part of
		// tasks that pertain to a project that a user is a part of
		res.json(tasks);
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server Error');
	}
});

// @todo - Route for returning all tasks pertaining to a project

// @todo - Route for returning all tasks pertaining to a team

////////////////////////////////////////////////////////////////////////////
// @route    GET api/tasks/project/:id
// @desc     Get tasks pertaining to a Project - should this live in routes/api/projects.js? api/projects/:id/tasks?
// @access   Private
////////////////////////////////////////////////////////////////////////////

// @route    GET api/tasks/:id
// @desc     Get task by ID
// @access   Private
router.get('/:id', auth, async (req, res) => {
	try {
		const task = await Task.findById(req.params.id);

		if (!task) {
			return res.status(404).json({
				msg: 'Task not found'
			});
		}

		res.json(task);
	} catch (err) {
		console.error(err.message);
		// if not a valid object id is passed into request
		if (err.kind === 'ObjectId') {
			return res.status(404).json({
				msg: 'Task not found'
			});
		}
		res.status(500).send('Server Error');
	}
});

// @route    POST api/task
// @desc     Create a task
// @access   Private
router.post(
	'/',
	[auth, [check('title', 'A title is required').not().isEmpty()]],
	async (req, res) => {
		const errors = validationResult(req);

		if (!errors.isEmpty()) {
			return res.status(400).json({
				errors: errors.array()
			});
		}

		try {
			const user = await User.findById(req.user.id).select('-password');

			const newTask = new Task({
				title: req.body.title,
				user: req.user.id,
				description: req.body.description,
				assignedTo: req.body.assignedTo, // null
				project: req.body.project, // null
				dueDate: req.body.dueDate,
				tags: req.body.tags,
				status: req.body.status, // required
				priority: req.body.priority,
				comments: req.body.comments,
				section: req.body.section,

				avatar: user.avatar // from user model above
			});

			const task = await newTask.save();
			res.json(task);
		} catch (err) {
			console.error(err.message);
			res.status(500).send('Server Error');
		}
	}
);

// @route    DELETE api/tasks/:id
// @desc     Delete task by ID
// @access   Private
router.delete('/:id', auth, async (req, res) => {
	try {
		const task = await Task.findById(req.params.id);

		if (!task) {
			res.status(404).json({
				msg: 'Task not found'
			});
		}

		// check user
		// convert to string to compare with req.param
		if (task.user.toString() !== req.user.id) {
			return res.status(401).json({
				msg: 'User not authorized'
			});
		}

		await task.remove();

		res.json({
			msg: 'Task removed'
		});
	} catch (err) {
		console.error(err.message);
		// if not a valid object id is passed into request
		if (err.kind === 'ObjectId') {
			return res.status(404).json({
				msg: 'Task not found'
			});
		}
		res.status(500).send('Server Error');
	}
});

module.exports = router;
