const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// project, story

const ProjectSchema = new Schema({
	name: {
		type: String,
		required: true
	},
	description: String,
	// project creator / admin
	user: {
		type: Schema.Types.ObjectId,
		ref: 'User'
	},
	team: {
		type: Schema.Types.ObjectId,
		ref: 'Team'
	},

	// should we add tasks within projects, or only access tasks via /api/tasks and return based on project?
	tasks: [
		{
			type: Schema.Types.ObjectId,
			ref: 'Task'
		}
	],

	date: {
		type: Date,
		default: Date.now()
	}
});

module.exports = Project = mongoose.model('Project', ProjectSchema);
