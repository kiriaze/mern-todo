import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { login } from '../../actions/auth';

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
			<h1 className="">Log In</h1>
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
				<input type="submit" className="btn" value="Submit" />
			</form>
			<p className="">
				Don't have an account? <Link to="/register">Register</Link>
			</p>
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
