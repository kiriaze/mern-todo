const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
	name: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true,
		unique: true
	},
	password: {
		type: String,
		required: true
	},
	avatar: {
		type: String
	},
	// role: {
	// 	type: String,
	// 	// should default be: default(regular user)/admin/collaborator/externalUser?
	// 	default: 'user' // should there even be a default? would the default be 'admin', if they have their own account, but if invited to a team/project, then set to colab/ext?
	// },
	tasks: [
		{
			type: Schema.Types.ObjectId,
			ref: 'Task'
		}
	],
	projects: [
		{
			type: Schema.Types.ObjectId,
			ref: 'Project'
		}
	],
	teams: [
		{
			type: Schema.Types.ObjectId,
			ref: 'Team'
		}
	],
	date: {
		type: Date,
		default: Date.now()
	}
});

// model name should be singular and capitilized; e.g. User
module.exports = User = mongoose.model('User', UserSchema);
