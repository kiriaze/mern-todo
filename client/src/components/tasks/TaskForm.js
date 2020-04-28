import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addTask } from '../../actions/task';

import './taskForm.scss';

import { Button } from '../ui/button';

//
import 'react-modern-calendar-datepicker/lib/DatePicker.css';
import DatePicker from 'react-modern-calendar-datepicker';
import { utils } from 'react-modern-calendar-datepicker';
//

// @todo - replace with an external form component or add styles, etc..

const initialState = {
	title: '',
	description: '',
	assignedTo: undefined,
	project: undefined,
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

	// datepicker
	const [selectedDay, setSelectedDay] = useState(null);
	const formatInputValue = selectedDay => {
		if (!selectedDay) return '';
		let monthPrefix = selectedDay.month < 10 ? '0' : '';
		return `${monthPrefix}${selectedDay.month}/${selectedDay.day}/${selectedDay.year}`;
	};
	// custom rendered input
	const renderCustomInput = ({ ref }) => (
		<input
			name="dueDate"
			readOnly
			ref={ref} // necessary
			placeholder="Select a date"
			value={formatInputValue(selectedDay)}
			style={{
				textAlign: 'left',
				outline: 'none'
			}}
			onBlur={ref => onDateChange(ref)}
			className="my-custom-input-class" // a styling class
		/>
	);
	const onDateChange = async e => {
		// console.log(e);
		setFormData({
			...formData,
			['dueDate']: e.target.value
		});
	};
	//

	const onSubmit = async e => {
		e.preventDefault();
		// console.log(formData);
		// return;
		addTask({ ...formData });
		setFormData(initialState); // clear form
		setSelectedDay();
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

				<div className="form-group">
					<textarea
						name="description"
						rows="5"
						placeholder="Comment on this post"
						value={description}
						onChange={e => onChange(e)}
					></textarea>
				</div>

				<div className="form-group">
					<input
						type="text"
						placeholder="Assigned To"
						name="assignedTo"
						value={assignedTo || ''}
						onChange={e => onChange(e)}
					/>
				</div>

				<div className="form-group">
					<input
						type="text"
						placeholder="Project ID"
						name="project"
						value={project || ''}
						onChange={e => onChange(e)}
					/>
				</div>

				<div className="form-group">
					{/*<input
						type="text"
						placeholder="Due Date (MM/DD/YYYY)"
						name="dueDate"
						value={dueDate}
						onChange={e => onChange(e)}
					/>*/}
					<DatePicker
						value={selectedDay}
						onChange={setSelectedDay}
						minimumDate={utils().getToday()}
						inputPlaceholder="Select a day"
						shouldHighlightWeekends
						renderInput={renderCustomInput}
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
				<Button type="submit">Submit</Button>
			</form>
		</div>
	);
};

TaskForm.propTypes = {
	addTask: PropTypes.func.isRequired
};

export default connect(null, { addTask })(TaskForm);
