import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../ui/spinner';
import { getTask } from '../../actions/task';
import TaskItem from '../tasks/TaskItem';
// import CommentForm from './CommentForm';
// import CommentItem from './CommentItem';

// import Heading from '../ui/heading';
import { StyledLink } from '../ui/link';

const Task = ({ getTask, task: { task, loading }, match }) => {
	useEffect(() => {
		getTask(match.params.id);
	}, [getTask, match.params.id]);
	return loading || task === null ? (
		<Spinner />
	) : (
		<Fragment>
			<div className="container">
				{/*<Heading level="1">Tasks</Heading>*/}
				{/*<p className="lead">Here's whats going on..</p>*/}
				<div className="user-actions">
					<StyledLink to="/tasks" variant="info">
						Back to tasks
					</StyledLink>
				</div>
				<TaskItem task={task} showActions={false} />
				{/*<CommentForm taskId={task._id} />*/}
				<div className="comments">
					{
						// task.comments.map(comment => (
						// <CommentItem key={comment._id} comment={comment} taskId={task._id} />
						// ))
					}
				</div>
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
