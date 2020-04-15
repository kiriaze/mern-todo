import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { StyledLink } from '../ui/link';
import Heading from '../ui/heading';

const Landing = ({ isAuthenticated }) => {
	if (isAuthenticated) {
		return <Redirect to="/dashboard" />;
	} else {
		return (
			<div className="root-inner landing">
				<section className="hero">
					<div className="container">
						<div className="row">
							<div className="col">
								<Heading level="2">Meet merndo 👋</Heading>
								<Heading level="1" variant="fancy">
									The Unified Workspace
								</Heading>
								<p className="lead">
									A smart little project <br />
									management tool
								</p>
								<div className="user-actions">
									<StyledLink to="/register" variant="success" className="">
										Get Started!
									</StyledLink>
									<StyledLink to="/login" variant="primary" className="">
										Sign in
									</StyledLink>
								</div>
							</div>
							<div className="col">
								<Heading level="4">Something</Heading>
							</div>
						</div>
					</div>
				</section>
				<section className="">
					<div className="container">
						<div className="row">
							<div className="col col--25" style={{ backgroundColor: 'teal' }}>
								<Heading level="3">Hello</Heading>
							</div>
							<div className="col col--2" style={{ backgroundColor: 'green' }}>
								<Heading level="3">Hello</Heading>
							</div>
							<div className="col col--55" style={{ backgroundColor: 'red' }}>
								<Heading level="3">Hello</Heading>
							</div>
						</div>
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
