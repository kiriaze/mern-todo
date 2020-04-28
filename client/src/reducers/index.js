import { combineReducers } from 'redux';
import auth from './auth';
import alert from './alert';
import task from './task';
import profile from './profile';

export default combineReducers({
	auth,
	alert,
	task,
	profile
});
