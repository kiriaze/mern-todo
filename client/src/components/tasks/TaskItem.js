import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Moment from 'react-moment';
import { deleteTask } from '../../actions/task';
import { getProfileById } from '../../actions/profile';
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';

// which is better? more sustainable? cleaner? simpler? more effecient? quicker to proto? better maintained in larger teams?
// // import './taskItem.scss';
import styled from 'styled-components';

const StyledItem = styled.div`
	margin: 0 0 1rem;
	padding: 2rem 3rem;
	background-color: #fff;
	border: 0.1rem solid #eee;
`;
//

const TaskItem = ({
	auth,
	task: {
		_id,
		title,
		description,
		user,
		assignedTo,
		likes,
		comments,
		dueDate,
		date
	},
	deleteTask,
	showActions,
	getProfileById
}) => {
	return (
		<StyledItem className="task-item">
			<h4>
				<Link to={`/tasks/${_id}`}>{title}</Link>
			</h4>
			<p>Issued by: {user.name}</p>
			<p>
				Issued on: <Moment format="MM/DD/YYYY">{date}</Moment>
			</p>
			<p>
				Due on: <Moment format="MM/DD/YYYY">{dueDate}</Moment>
			</p>
			{assignedTo && <p>Assigned to: {assignedTo.name}</p>}
			<p>{description}</p>
			{showActions && (
				<Fragment>
					{!auth.loading && user === auth.user._id && (
						<Button
							variant="danger"
							onClick={e => {
								if (window.confirm('Are you sure?')) {
									deleteTask(_id);
								}
							}}
						>
							Delete Task
						</Button>
					)}
				</Fragment>
			)}
		</StyledItem>
	);
};
// <div className="task-item"></div>

TaskItem.defaultProps = {
	showActions: true
};

TaskItem.propTypes = {
	task: PropTypes.object.isRequired,
	auth: PropTypes.object.isRequired,
	deleteTask: PropTypes.func.isRequired,
	getProfileById: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
	auth: state.auth
});

export default connect(mapStateToProps, {
	deleteTask,
	getProfileById
})(TaskItem);
