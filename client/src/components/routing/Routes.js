// abstract all routes into this file for cleanliness
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Register from '../auth/Register';
import Login from '../auth/Login';
import Dashboard from '../dashboard/Dashboard';
import NotFound from '../layout/NotFound';
import PrivateRoute from '../routing/PrivateRoute';

const Routes = () => {
	return (
		<div className="">
			<Switch>
				<Route exact path="/register" component={Register} />
				<Route exact path="/login" component={Login} />
				<PrivateRoute exact path="/dashboard" component={Dashboard} />
				<Route component={NotFound} />
			</Switch>
		</div>
	);
};

export default Routes;
