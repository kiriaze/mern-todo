import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteAccount } from '../../actions/auth';
// import TaskForm from '../tasks/TaskForm';

import Heading from '../ui/heading';
import { Button } from '../ui/button';
import { StyledLink } from '../ui/link';

const Dashboard = ({ auth: { user }, deleteAccount }) => {
	return (
		<Fragment>
			<div className="container">
				<Heading level="1">Dashboard</Heading>

				<Heading level="2">Test</Heading>

				<Heading level="3" className="logo" variant="fancy">
					Logo Heading
				</Heading>

				<p className="lead">Welcome {user && user.name}</p>
				<div className="user-actions">
					<Link className="btn btn--info" to="/tasks">
						View Tasks
					</Link>
					{/* styled-component version */}
					<StyledLink to="/tasks" variant="info">
						View tasks
					</StyledLink>
					<StyledLink to="/add-task" variant="primary">
						Add Task
					</StyledLink>
					<Button variant="danger" onClick={() => deleteAccount()}>
						Delete my account
					</Button>

					<Button variant="custom-1">Custom Button Style 1</Button>
					<Button variant="custom-2">Custom Button Style 2</Button>
					<Button>Default Button</Button>
				</div>
			</div>
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
