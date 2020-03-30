const express = require('express');
const connectDB = require('./config/db');
const path = require('path');

const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

// Define Routes
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/users', require('./routes/api/users'));
app.use('/api/tasks', require('./routes/api/tasks'));
app.use('/api/projects', require('./routes/api/projects'));
app.use('/api/teams', require('./routes/api/teams'));

// Server static assets in production
if (process.env.NODE_ENV === 'production') {
	// set static folder
	app.use(express.static('client/build'));

	// any request other than the routes defined above will point to the client build output
	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
	});
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
