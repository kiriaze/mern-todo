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
			<Heading level="1">Dashboard</Heading>
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
