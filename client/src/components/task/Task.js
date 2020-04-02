import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Spinner from '../layout/Spinner';
import { getTask } from '../../actions/task';
import TaskItem from '../tasks/TaskItem';
// import CommentForm from './CommentForm';
// import CommentItem from './CommentItem';

const Task = ({ getTask, task: { task, loading }, match }) => {
	useEffect(() => {
		getTask(match.params.id);
	}, [getTask, match.params.id]);
	return loading || task === null ? (
		<Spinner />
	) : (
		<Fragment>
			<Link to="/tasks" className="btn">
				Back to tasks
			</Link>
			<TaskItem task={task} showActions={false} />
			{/*<CommentForm taskId={task._id} />*/}
			<div className="comments">
				{
					// task.comments.map(comment => (
					// <CommentItem key={comment._id} comment={comment} taskId={task._id} />
					// ))
				}
			</div>
		</Fragment>
	);
};

Task.propTypes = {
	getTask: PropTypes.func.isRequired,
	task: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
	task: state.task
});

export default connect(mapStateToProps, { getTask })(Task);
