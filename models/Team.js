const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TeamSchema = new Schema({
	name: {
		type: String,
		required: true
	},
	description: {
		type: String
	},
	users: [
		{
			type: Schema.Types.ObjectId,
			ref: 'User'
		}
	],
	projects: [
		{
			type: Schema.Types.ObjectId,
			ref: 'Project'
		}
	],

	// we might not need to house tasks within here, rather findOne team, and within, find tasks by team?
	// use case: one might want to see all tasks within a team - but tasks are typically tied to a project - so makes more sense for the project to house all tasks..leaving this here in case we want to add it
	tasks: [
		{
			type: Schema.Types.ObjectId,
			ref: 'Task'
		}
	],

	// team admin
	// defaults to the user which created the team
	admin: {
		type: Schema.Types.ObjectId,
		ref: 'User'
	},
	date: {
		type: Date,
		default: Date.now()
	}
});

module.exports = Team = mongoose.model('Team', TeamSchema);
