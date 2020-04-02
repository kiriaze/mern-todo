// abstract all routes into this file for cleanliness
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Register from '../auth/Register';
import Login from '../auth/Login';
import Dashboard from '../dashboard/Dashboard';
import Tasks from '../tasks/Tasks';
import Task from '../task/Task';
import TaskForm from '../tasks/TaskForm';
import Alert from '../layout/Alert';
import NotFound from '../layout/NotFound';
import PrivateRoute from '../routing/PrivateRoute';

const Routes = () => {
	return (
		<div className="">
			<Alert />
			<Switch>
				<Route exact path="/register" component={Register} />
				<Route exact path="/login" component={Login} />
				<PrivateRoute exact path="/dashboard" component={Dashboard} />
				<PrivateRoute exact path="/tasks" component={Tasks} />
				<PrivateRoute exact path="/tasks/:id" component={Task} />
				<PrivateRoute exact path="/add-task" component={TaskForm} />
				<Route component={NotFound} />
			</Switch>
		</div>
	);
};

export default Routes;
