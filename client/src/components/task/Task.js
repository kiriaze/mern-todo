import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../ui/spinner';
import { getTask } from '../../actions/task';
import TaskItem from '../tasks/TaskItem';
// import CommentForm from './CommentForm';
// import CommentItem from './CommentItem';

import Heading from '../ui/heading';
import { StyledLink } from '../ui/link';

import styled from 'styled-components'

const TopBar = styled.div`
	display: flex;
	margin: 2rem 0;
	justify-content: space-between;
`;

const UserActions = styled.div `
	> * {
		margin: 0 0 0 1rem
	}
`;

const Task = ({ getTask, task: { task, loading }, match }) => {
	useEffect(() => {
		getTask(match.params.id);
	}, [getTask, match.params.id]);
	return loading || task === null ? (
		<Spinner />
	) : (
		<Fragment>
			<div className="container">
				<TopBar>
					<Heading level="5">{task.title}</Heading>
					<UserActions>
						<StyledLink to="/tasks" variant="info">
							Back to tasks
						</StyledLink>
						<StyledLink to="" variant="success">Mark Complete</StyledLink>
						<StyledLink to="" variant="danger">Delete</StyledLink>
					</UserActions>
				</TopBar>
				<TaskItem task={task} showActions={true} />
				{/* <CommentForm taskId={task._id} /> */}
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
