import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteAccount } from '../../actions/auth';
// import TaskForm from '../tasks/TaskForm';

import Heading from '../ui/heading';
import { Button, StyledLink } from '../ui/button';

const Dashboard = ({ auth: { user }, deleteAccount }) => {
	return (
		<Fragment>
			<h1 className="">Dashboard</h1>
			<p className="lead">Welcome {user && user.name} </p>
			<Link to="/tasks">View Tasks</Link>
			<Link to="/add-task">Add Task</Link>

			{/* classical class styling */}
			<button onClick={() => deleteAccount()} className="btn btn-danger">
				Delete my account
			</button>

			{/* style-components */}
			<Button color="danger" onClick={() => deleteAccount()}>
				Delete my account
			</Button>

			<Heading>Heading 1</Heading>
			<Heading level="2">Heading 2</Heading>
			<Heading level="3">Heading 3</Heading>
			<Heading level="4">Heading 4</Heading>
			<Heading level="5">Heading 5</Heading>
			<Heading level="6">Heading 6</Heading>

			<StyledLink to="/tasks" color="primary">
				Testing custom Link Tasks
			</StyledLink>

			{/* styled components */}
			<div className="">
				<Button>Normal Button</Button>
				<Button color="primary">Primary Button</Button>
				<Button color="secondary">Secondary Button</Button>
				<Button color="info">Info Button</Button>
				<Button color="warning">Warning Button</Button>
				<Button color="success">Success Button</Button>
				<Button color="danger">Danger Button</Button>
			</div>
			{/* /styled components */}
		</Fragment>
	);
};

Dashboard.propTypes = {
	auth: PropTypes.object.isRequired,
	deleteAccount: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
	auth: state.auth
});

export default connect(mapStateToProps, {
	deleteAccount
})(Dashboard);
