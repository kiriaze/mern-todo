import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { login } from '../../actions/auth';

import Heading from '../ui/Heading';
import { Button } from '../ui/Button';

const Login = ({ login, isAuthenticated }) => {
	const [formData, setFormData] = useState({
		email: '',
		password: ''
	});

	const { email, password } = formData;

	const onChange = e => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value
		});
	};

	const onSubmit = e => {
		e.preventDefault();
		login({ email, password });
	};

	if (isAuthenticated) {
		return <Redirect to="/dashboard" />;
	}

	return (
		<Fragment>
			<div className="form-wrapper">
				<Heading level="1">Log In</Heading>
				<p className="lead">Log into your account</p>
				<form className="" onSubmit={e => onSubmit(e)}>
					<div className="form-group">
						<input
							type="email"
							name="email"
							placeholder="Email Address"
							value={email}
							onChange={e => onChange(e)}
						/>
					</div>
					<div className="form-group">
						<input
							type="password"
							name="password"
							placeholder="Password"
							minLength="6"
							value={password}
							onChange={e => onChange(e)}
						/>
					</div>
					{/*<input type="submit" className="btn" value="Submit" />*/}
					<Button type="submit" variant="success">
						Login
					</Button>
				</form>
				<p className="form-footer">
					Don't have an account? <Link to="/register">Register</Link>
				</p>
			</div>
		</Fragment>
	);
};

Login.propTypes = {
	isAuthenticated: PropTypes.bool,
	login: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
	isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { login })(Login);
