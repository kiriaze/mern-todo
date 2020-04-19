import axios from 'axios';
import { setAlert } from './alert';
import {
	GET_TASKS,
	GET_TASK,
	TASK_ERROR,
	UPDATE_LIKES,
	DELETE_TASK,
	ADD_TASK,
	ADD_COMMENT,
	DELETE_COMMENT
} from './types';

// Get tasks
export const getTasks = () => async dispatch => {
	try {
		const res = await axios.get('/api/tasks');
		dispatch({
			type: GET_TASKS,
			payload: res.data
		});
	} catch (err) {
		dispatch({
			type: TASK_ERROR,
			payload: {
				msg: err.response.statusText,
				status: err.response.status
			}
		});
	}
};

// Get Task
export const getTask = id => async dispatch => {
	try {
		const res = await axios.get(`/api/tasks/${id}`);
		dispatch({
			type: GET_TASK,
			payload: res.data
		});
	} catch (err) {
		dispatch({
			type: TASK_ERROR,
			payload: {
				msg: err.response.statusText,
				status: err.response.status
			}
		});
	}
};

// Add Task
export const addTask = formData => async dispatch => {
	const config = {
		headers: {
			'Content-Type': 'application/json'
		}
	};
	try {
		const res = await axios.post('/api/tasks', formData, config);
		dispatch({
			type: ADD_TASK,
			payload: res.data
		});
		dispatch(setAlert('Task created!', 'success'));
	} catch (err) {
		const errors = err.response.data.errors;
		if (errors) {
			errors.map(error => dispatch(setAlert(error.msg, 'danger')));
		}
		dispatch({
			type: TASK_ERROR,
			payload: {
				msg: err.response.statusText,
				status: err.response.status
			}
		});
	}
};

// Delete Task
export const deleteTask = id => async dispatch => {
	try {
		await axios.delete(`/api/tasks/${id}`);
		dispatch({
			type: DELETE_TASK,
			payload: id
		});
		dispatch(setAlert('Task removed', 'success'));
	} catch (err) {
		dispatch({
			type: TASK_ERROR,
			payload: {
				msg: err.response.statusText,
				status: err.response.status
			}
		});
	}
};

// Add like

// Remove like

// Add Comment

// Delete Comment
