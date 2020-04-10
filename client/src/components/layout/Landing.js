import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { StyledLink } from '../ui/link';

const Landing = ({ isAuthenticated }) => {
	if (isAuthenticated) {
		return <Redirect to="/dashboard" />;
	} else {
		return (
			<div className="root-inner landing">
				<section className="hero">
					<div className="container">
						<h2>Meet merndo 👋</h2>
						<h1 className="">
							A smart little project <br />
							management tool
						</h1>
						<div className="user-actions">
							<StyledLink to="/register" variant="success" className="">
								Get Started!
							</StyledLink>
							<StyledLink to="/login" variant="primary" className="">
								Sign in
							</StyledLink>
						</div>
					</div>
				</section>
				<section className="">
					<div className="container">
						<h2>Hello, world.</h2>
					</div>
				</section>
			</div>
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
