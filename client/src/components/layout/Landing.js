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
								<Heading level="2">
									Meet merndo{' '}
									<span role="img" aria-label="hello">
										👋
									</span>
								</Heading>
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
						<div className="col">
							<Heading level="2">Toggle Views</Heading>
							<p className="lead">Select the perfect view for your project.</p>
							<ul>
								<li>List Item 1</li>
								<li>List Item 2</li>
								<li>List Item 3</li>
								<li>List Item 4</li>
							</ul>
						</div>
						<div className="col">{/* image/vid/gif */}</div>
					</div>
				</section>

				<section className="">
					<div className="container">
						<div className="col">{/* image/vid/gif */}</div>
						<div className="col">
							<Heading level="2">Collaborate Live</Heading>
							<p className="lead">
								Edit projects in real-time. Chat and video conference on the
								same page.
							</p>
						</div>
					</div>
				</section>

				<section className="">
					<div className="container">
						<div className="col">
							<Heading level="2">Team Calendar</Heading>
							<p className="lead">
								Keep track of tasks across multiple teams and workspaces.
							</p>
						</div>
						<div className="col">{/* image/vid/gif */}</div>
					</div>
				</section>

				<section className="">
					<div className="container">
						<div className="col">
							<Heading level="2">Team Roadmap</Heading>
							<p className="lead">Plan, manage, and visualize projects.</p>
						</div>
						<div className="col">{/* image/vid/gif */}</div>
					</div>
				</section>

				<section className="">
					<div className="container">
						<div className="col">{/* logo */}</div>
						<div className="col">{/* logo */}</div>
						<div className="col">{/* logo */}</div>
						<div className="col">{/* logo */}</div>
						<div className="col">{/* logo */}</div>
						<div className="col">{/* logo */}</div>
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
