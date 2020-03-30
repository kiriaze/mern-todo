import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getTasks } from '../../actions/task';
import Spinner from '../layout/Spinner';
import TaskItem from './TaskItem';
import TaskForm from './TaskForm';

const Tasks = ({ getTasks, task: { tasks, loading } }) => {
	useEffect(() => {
		getTasks();
	}, [getTasks]);
	return loading ? (
		<Spinner />
	) : (
		<Fragment>
			<h1 className="">Tasks</h1>
			<div className="tasks">
				{tasks.map(task => (
					<TaskItem key={task._id} task={task} />
				))}
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
