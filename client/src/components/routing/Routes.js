// abstract all routes into this file for cleanliness
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Alert from '../ui/alert';
import Register from '../auth/Register';
import Login from '../auth/Login';
import Dashboard from '../dashboard/Dashboard';
import Tasks from '../tasks/Tasks';
import Task from '../task/Task';
import TaskForm from '../tasks/TaskForm';

import Profiles from '../profiles/Profiles';
import Profile from '../profile/Profile';
import EditProfile from '../profile-forms/EditProfile';

import NotFound from '../layout/NotFound';
import Styleguide from '../pages/Styleguide'; // starting to map out pages instead of having these within components
import PrivateRoute from '../routing/PrivateRoute';

const Routes = () => {
	return (
		<div className="root-inner">
			<Alert />
			<Switch>
				<Route exact path="/register" component={Register} />
				<Route exact path="/login" component={Login} />
				<Route exact path="/profiles" component={Profiles} />
				<Route exact path="/profile/:id" component={Profile} />
				<Route exact path="/styleguide" component={Styleguide} />
				<PrivateRoute exact path="/dashboard" component={Dashboard} />
				<PrivateRoute exact path="/tasks" component={Tasks} />
				<PrivateRoute exact path="/tasks/:id" component={Task} />
				<PrivateRoute exact path="/add-task" component={TaskForm} />
				<PrivateRoute exact path="/edit-profile" component={EditProfile} />
				<Route component={NotFound} />
			</Switch>
		</div>
	);
};

export default Routes;
