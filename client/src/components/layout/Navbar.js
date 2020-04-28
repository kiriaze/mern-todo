import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
	const sharedLinks = (
		<li>
			<Link to="/styleguide">Styleguide</Link>
		</li>
	);

	const authLinks = (
		<ul>
			{sharedLinks}
			<li>
				<Link to="/tasks">Tasks</Link>
			</li>
			<li>
				<Link to="">Dashboard</Link>
			</li>
			<li>
				<Link to="/add-task">Add task</Link>
			</li>
			<li>
				<a href="#!" onClick={logout}>
					Logout
				</a>
			</li>
		</ul>
	);

	const guestLinks = (
		<ul>
			{sharedLinks}
			<li>
				<Link to="/register">Sign Up</Link>
			</li>
			<li>
				<Link to="/login">Log in</Link>
			</li>
		</ul>
	);

	return (
		<nav className="navbar">
			<div className="container">
				<Link to="/" className="logo">
					MernDo
				</Link>
				{!loading && (
					<Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
				)}
			</div>
		</nav>
	);
};

Navbar.propTypes = {
	logout: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired
};

const mapStatetoProps = state => ({
	auth: state.auth
});

export default connect(mapStatetoProps, { logout })(Navbar);
