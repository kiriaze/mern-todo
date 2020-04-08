import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteAccount } from '../../actions/auth';
// import TaskForm from '../tasks/TaskForm';

import Heading from '../ui/Heading';
import { Button } from '../ui/Button';
import { StyledLink } from '../ui/Link';

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

			{/* styled-components */}
			<Button variant="danger" onClick={() => deleteAccount()}>
				Delete my account
			</Button>

			<Heading>Heading 1</Heading>
			<Heading level="2">Heading 2</Heading>
			<Heading level="3">Heading 3</Heading>
			<Heading level="4">Heading 4</Heading>
			<Heading level="5">Heading 5</Heading>
			<Heading level="6">Heading 6</Heading>

			<StyledLink to="/tasks" variant="primary">
				Testing custom Link Tasks
			</StyledLink>

			{/* styled components */}
			<div className="">
				<Button>Normal Button</Button>
				<Button variant="primary">Primary Button</Button>
				<Button variant="secondary">Secondary Button</Button>
				<Button variant="info">Info Button</Button>
				<Button variant="warning">Warning Button</Button>
				<Button variant="success">Success Button</Button>
				<Button variant="danger">Danger Button</Button>
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
