import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { login } from '../../actions/auth';

const Login = props => {
	return <div>Log into your account</div>;
};

Login.propTypes = {};

export default Login;
