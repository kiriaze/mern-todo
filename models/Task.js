const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// tasks, todos, items
const TaskSchema = new Schema({
	// owner of task; owner/taskOwner/reporter
	user: {
		type: Schema.Types.ObjectId,
		ref: 'User'
	},
	title: {
		type: String,
		required: true
	},
	description: {
		type: String
	},
	// @todo - Revisit whether we should allow a task to be assigned to multiple users
	assignedTo: {
		type: Schema.Types.ObjectId,
		ref: 'User'
	},
	project: {
		type: Schema.Types.ObjectId,
		ref: 'Project'
	},
	// submitted
	date: {
		type: Date,
		default: Date.now()
	},
	dueDate: {
		type: Date
	},
	tags: [
		{
			type: String
			// if we want to add a color ref to the tag, make this a model and ref it
		}
	],
	// some have this as a custom field instead
	status: {
		type: String,
		required: true,
		// open, not-scheduled, not-started, on-hold, in-progress, in-review/qa, done/shipped (allow for custom by not having enum nor default or even requried?)
		enum: ['open', 'on-hold', 'in-progress', 'in-review', 'completed'],
		default: 'open'
	},
	priority: {
		type: String,
		enum: ['low', 'med', 'high']
	},
	comments: [
		{
			user: {
				type: Schema.Types.ObjectId,
				ref: 'User'
			},
			text: {
				type: String,
				require: true
			},
			// name: {
			// 	type: String
			// },
			// avatar: {
			// 	type: String
			// },
			date: {
				type: Date,
				default: Date.now
			}
		}
	],

	// @todo - possible additions

	// section/grouping in order to organize tasks - we only use this to organize on the frontend, doesnt really need relationship/hierarchy in model/db
	section: String

	// // custom fields; e.g. Stage, Priority, Status..although these are already currently part of the model, if we want the users to be able to create custom key/value props, a custom fields model would be required
	// customField: [
	// 	{
	// 		type: Schema.Types.ObjectId,
	// 		ref: 'CustomField'
	// 	}
	// ],

	// // subtasks? fuuhhhkuh! inception? does this even work, referencing itself within itself?
	// subtasks: [
	// 	{
	// 		type: Schema.Types.ObjectId,
	// 		ref: 'Task'
	// 	}
	// ],

	// // likes? unnecessary? just cuz?
	// likes: [
	// 	{
	// 		user: {
	// 			type: Schema.Types.ObjectId,
	// 			ref: 'User'
	// 		}
	// 	}
	// ],

	// // emojis? unnecessary? just cuz? likes makes more sense, simpler..
	// emojis: [
	// 	{
	// 		user: {
	// 			type: Schema.Types.ObjectId,
	// 			ref: 'User'
	// 		}
	// 	}
	// ],
});

// model name should be singular and capitilized; e.g. Task
module.exports = Task = mongoose.model('Task', TaskSchema);
