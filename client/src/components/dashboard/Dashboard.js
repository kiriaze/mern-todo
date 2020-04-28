import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteAccount } from '../../actions/profile';
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
					<StyledLink to="/edit-profile" variant="info">
						Edit Profile
					</StyledLink>
					<StyledLink to="/profiles">Profiles</StyledLink>
					<StyledLink to={`/profile/${user && user._id}`}>
						My Profile
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
