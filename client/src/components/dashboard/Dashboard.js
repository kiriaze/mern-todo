import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteAccount } from '../../actions/auth';
import TaskForm from '../tasks/TaskForm';

const Dashboard = ({ auth: { user }, deleteAccount }) => {
	return (
		<Fragment>
			<h1 className="">Dashboard</h1>
			<p className="lead">Welcome {user && user.name} </p>
			<Link to="/tasks">View Tasks</Link>
			{/*<Tasks tasks={tasks} />*/}
			{/* tasks */}
			<TaskForm />
			{/* projects */}
			{/* teams */}
			<button onClick={() => deleteAccount()} className="btn btn-danger">
				Delete my account
			</button>
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
