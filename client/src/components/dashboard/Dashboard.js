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
				<p className="lead">Welcome back, {user && user.name.split(' ')[0]}!</p>
				<div className="user-actions">
					<StyledLink to="/tasks" variant="info">
						View tasks
					</StyledLink>
					<StyledLink to="/add-task" variant="primary">
						Add Task
					</StyledLink>
					<Button variant="danger" onClick={() => deleteAccount()}>
						Delete my account
					</Button>
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
