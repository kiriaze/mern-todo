import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addTask } from '../../actions/task';

const initialState = {
	title: '',
	description: '',
	assignedTo: null,
	project: null,
	dueDate: '',
	tags: [],
	status: 'open',
	priority: 'low',
	section: ''
};

const TaskForm = ({ addTask }) => {
	const [formData, setFormData] = useState(initialState);

	const {
		title,
		description,
		assignedTo,
		project,
		dueDate,
		tags,
		status,
		priority,
		section
	} = formData;

	const onChange = e => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value
		});
	};

	const onSubmit = e => {
		e.preventDefault();
		addTask({ ...formData });
		setFormData(initialState); // clear form
	};
	return (
		<div className="post-form">
			<div className="">
				<h3>Add a task</h3>
			</div>
			<form className="form" onSubmit={e => onSubmit(e)}>
				<div className="form-group">
					<input
						type="text"
						placeholder="Task title"
						name="title"
						value={title}
						onChange={e => onChange(e)}
					/>
				</div>

				<textarea
					name="description"
					cols="30"
					rows="5"
					placeholder="Comment on this post"
					required
					value={description}
					onChange={e => onChange(e)}
				></textarea>

				<div className="form-group">
					<input
						type="text"
						placeholder="Assigned To"
						name="assignedTo"
						value={assignedTo}
						onChange={e => onChange(e)}
					/>
				</div>

				<div className="form-group">
					<input
						type="text"
						placeholder="Project ID"
						name="project"
						value={project}
						onChange={e => onChange(e)}
					/>
				</div>

				<div className="form-group">
					<input
						type="text"
						placeholder="Due Date (MM/DD/YYYY)"
						name="dueDate"
						value={dueDate}
						onChange={e => onChange(e)}
					/>
				</div>

				<div className="form-group">
					<input
						type="text"
						placeholder="Tags"
						name="tags"
						value={tags}
						onChange={e => onChange(e)}
					/>
				</div>

				<div className="form-group">
					<input
						type="text"
						placeholder="Status"
						name="status"
						value={status}
						onChange={e => onChange(e)}
					/>
				</div>

				<div className="form-group">
					<input
						type="text"
						placeholder="Priority"
						name="priority"
						value={priority}
						onChange={e => onChange(e)}
					/>
				</div>

				<div className="form-group">
					<input
						type="text"
						placeholder="Section"
						name="section"
						value={section}
						onChange={e => onChange(e)}
					/>
				</div>

				<input type="submit" className="btn" value="Submit" />
			</form>
		</div>
	);
};

TaskForm.propTypes = {
	addTask: PropTypes.func.isRequired
};

export default connect(null, { addTask })(TaskForm);
