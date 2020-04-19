import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getTasks } from '../../actions/task';
import Spinner from '../ui/spinner';
import TaskItem from './TaskItem';
import TaskForm from './TaskForm';

import Heading from '..//ui/heading';

const Tasks = ({ getTasks, task: { tasks, loading } }) => {
	useEffect(() => {
		getTasks();
	}, [getTasks]);
	return loading ? (
		<Spinner />
	) : (
		<Fragment>
			<div className="container">
				<Heading level="1">Tasks</Heading>
				<p className="lead">Here's whats going on..</p>
				<div className="tasks">
					{tasks &&
						tasks.length > 0 &&
						tasks.map(task => <TaskItem key={task._id} task={task} />)}
				</div>
			</div>
		</Fragment>
	);
};

Tasks.propTypes = {
	getTasks: PropTypes.func.isRequired,
	task: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
	task: state.task
});

export default connect(mapStateToProps, { getTasks })(Tasks);
