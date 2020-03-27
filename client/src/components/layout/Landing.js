import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Landing = ({ isAuthenticated }) => {
	if (isAuthenticated) {
		return <Redirect to="/dashboard" />;
	} else {
		return (
			<section className="landing">
				<h1 className="">Welcome to MernDo!</h1>
				<Link to="/register" className="">
					Sign Up
				</Link>
				<Link to="/login" className="">
					Login
				</Link>
			</section>
		);
	}
};

Landing.propTypes = {
	isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
	isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Landing);
