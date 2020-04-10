import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Moment from 'react-moment';
import { deleteTask } from '../../actions/task';
import { Link } from 'react-router-dom';
import { Button } from '../ui/Button';

// which is better? more sustainable? cleaner? simpler? more effecient? quicker to proto? better maintained in larger teams?
// // import './taskItem.scss';
import styled from 'styled-components';

const StyledItem = styled.div`
	margin: 1rem auto 0;
	max-width: 40rem;
	padding: 2rem 3rem;
	background-color: #f5f5f5;
	&:first-child {
		margin-top: 0;
	}
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
	showActions
}) => {
	return (
		<StyledItem className="task-item">
			<h4>
				<Link to={`/tasks/${_id}`}>{title}</Link>
			</h4>
			<span>
				Issued on: <Moment format="MM/DD/YYYY">{date}</Moment>
			</span>
			<br />
			<span>
				Due on: <Moment format="MM/DD/YYYY">{dueDate}</Moment>
			</span>
			<br />
			<span>Assigned to: {assignedTo}</span>
			{/*5e7e8339fc348f1e19a6fd16*/}
			<br />
			<p>{description}</p>
			{showActions && (
				<Fragment>
					{!auth.loading && user === auth.user._id && (
						// <button
						// 	onClick={e => deleteTask(_id)}
						// 	type="button"
						// 	className="btn btn-danger"
						// >
						// 	Delete Task
						// </button>
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
	deleteTask: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
	auth: state.auth
});

export default connect(mapStateToProps, {
	deleteTask
})(TaskItem);
