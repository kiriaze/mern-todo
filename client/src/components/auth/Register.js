import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { setAlert } from '../../actions/alert';
import { register } from '../../actions/auth';

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
			<h1 className="">Sign Up</h1>
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
				<input type="submit" className="btn" value="Register" />
			</form>
			<p className="">
				Already have an account? <Link to="/login">Sign In</Link>
			</p>
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
