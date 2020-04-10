import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { setAlert } from '../../actions/alert';
import { register } from '../../actions/auth';

import Heading from '../ui/Heading';
import { Button } from '../ui/Button';

const Register = ({ setAlert, register, isAuthenticated }) => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		password: '',
		password2: ''
	});

	const { name, email, password, password2 } = formData;

	const onChange = e => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value
		});
	};

	const onSubmit = async e => {
		e.preventDefault();
		if (password !== password2) {
			setAlert('Passwords do not match', 'danger');
		} else {
			register({ name, email, password });
		}
	};

	if (isAuthenticated) {
		return <Redirect to="/dashboard" />;
	}

	return (
		<Fragment>
			<div className="form-wrapper">
				<Heading level="1">Sign Up</Heading>
				<p className="lead">Create your account</p>
				<form className="" onSubmit={e => onSubmit(e)}>
					<div className="form-group">
						<input
							type="text"
							placeholder="Frank Reynolds"
							name="name"
							value={name}
							onChange={e => onChange(e)}
						/>
					</div>
					<div className="form-group">
						<input
							type="email"
							placeholder="frank@reynolds.com"
							name="email"
							value={email}
							onChange={e => onChange(e)}
						/>
					</div>
					<div className="form-group">
						<input
							type="password"
							placeholder="*******"
							name="password"
							value={password}
							onChange={e => onChange(e)}
						/>
					</div>
					<div className="form-group">
						<input
							type="password2"
							placeholder="*******"
							name="password2"
							value={password2}
							onChange={e => onChange(e)}
						/>
					</div>
					{/*<input type="submit" className="btn" value="Register" />*/}
					<Button type="submit" variant="primary">
						Register
					</Button>
				</form>
				<p className="form-footer">
					Already have an account? <Link to="/login">Sign In</Link>
				</p>
			</div>
		</Fragment>
	);
};

Register.propTypes = {
	register: PropTypes.func.isRequired,
	isAuthenticated: PropTypes.bool,
	setAlert: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
	isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { setAlert, register })(Register);
