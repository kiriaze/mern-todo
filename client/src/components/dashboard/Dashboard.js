import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteAccount } from '../../actions/auth';
// import TaskForm from '../tasks/TaskForm';

/////////////////////////////////////////////////////
// Notes:
// - Styled-components might be the way to go, with a lightweight framework as the foundation; think utility helpers and base styles - and then build upon with SC, could also import components when needed from other libraries/sources instead of writing from scratch. e.g. modals

// tailwind + styled-components (best custom)
// bulma - quick prototype css classes (bootsrapish)
// chakra - quick prototype + react

// components needed: calendar, drag/drop, toasters, alerts, notifications, tags, badges, search dropdown filters, tables, corner dialogs,

// style types: Evergreen, ChakraUi(toasts)
/////////////////////////////////////////////////////

import { Button } from '../ui/button';

const Dashboard = ({ auth: { user }, deleteAccount }) => {
	return (
		<Fragment>
			<h1 className="">Dashboard</h1>
			<p className="lead">Welcome {user && user.name} </p>
			<Link to="/tasks">View Tasks</Link>
			<Link to="/add-task">Add Task</Link>
			<button onClick={() => deleteAccount()} className="btn btn-danger">
				Delete my account
			</button>

			<button className="btn btn-blue">Button</button>

			{/* styled components */}
			<Button>Normal Button</Button>
			<Button danger>Danger Button</Button>
			<Button info>Info Button</Button>
			<Button success>Success Button</Button>
			{/* /styled components */}
		</Fragment>
	);
};

Dashboard.propTypes = {
	auth: PropTypes.object.isRequired,
	deleteAccount: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
	auth: state.auth
});

export default connect(mapStateToProps, {
	deleteAccount
})(Dashboard);
