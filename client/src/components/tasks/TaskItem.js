import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Moment from 'react-moment';
import { deleteTask } from '../../actions/task';

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
	deleteTask
}) => {
	return (
		<div>
			<h4>{title}</h4>
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
			{!auth.loading && user === auth.user._id && (
				<button
					onClick={e => deleteTask(_id)}
					type="button"
					className="btn btn-danger"
				>
					Delete Task
				</button>
			)}
		</div>
	);
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
