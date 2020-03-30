import { combineReducers } from 'redux';
import auth from './auth';
import alert from './alert';
import task from './task';

export default combineReducers({
	auth,
	alert,
	task
});
