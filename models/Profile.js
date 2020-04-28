const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProfileSchema = new mongoose.Schema({
	// create ref to the user model
	user: {
		type: Schema.Types.ObjectId,
		ref: 'User'
	},
	company: {
		type: String
	},
	location: {
		type: String
	},
	bio: {
		type: String
	},
	date: {
		type: Date,
		default: Date.now
	}
});

module.exports = Profile = mongoose.model('Profile', ProfileSchema);
