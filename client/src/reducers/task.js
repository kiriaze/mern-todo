import {
	GET_TASKS,
	GET_TASK,
	TASK_ERROR,
	UPDATE_LIKES,
	DELETE_TASK,
	ADD_TASK,
	ADD_COMMENT,
	DELETE_COMMENT
} from '../actions/types';

const initialState = {
	tasks: [],
	task: null,
	loading: true,
	error: {}
};

export default function (state = initialState, action) {
	const { type, payload } = action;
	switch (type) {
		case GET_TASKS:
			return {
				...state,
				tasks: payload,
				loading: false
			};
		case GET_TASK:
			return {
				...state,
				task: payload,
				loading: false
			};
		case TASK_ERROR:
			return {
				...state,
				error: payload,
				loading: false
			};
		case ADD_TASK:
			return {
				...state,
				tasks: [payload, ...state.tasks],
				loading: false
			};
		case DELETE_TASK:
			return {
				...state,
				tasks: state.tasks.filter(task => task._id !== payload),
				loading: false
			};
		case UPDATE_LIKES:
			return {
				...state,
				tasks: state.tasks.map(task =>
					task._id === payload.id ? { ...task, likes: payload.likes } : task
				),
				loading: false
			};
		case ADD_COMMENT:
			return {
				...state,
				task: {
					...state.task,
					comments: payload
				},
				loading: false
			};
		case DELETE_COMMENT:
			return {
				...state,
				task: {
					...state.task,
					comments: state.task.comments.filter(
						comment => comment._id !== payload
					)
				},
				loading: false
			};
		default:
			return state;
	}
}
