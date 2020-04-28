import React, { Fragment, useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createProfile, getCurrentProfile } from '../../actions/profile';

import Heading from '../ui/heading';
import { Button } from '../ui/button';

// defaults
const initialState = {
	company: '',
	location: '',
	bio: ''
};

const EditProfile = ({
	profile: { profile, loading },
	createProfile,
	getCurrentProfile,
	history
}) => {
	const [formData, setFormData] = useState(initialState);

	useEffect(() => {
		if (!profile) getCurrentProfile();
		if (!loading) {
			const profileData = { ...initialState };
			for (const key in profile) {
				if (key in profileData) {
					if (Array.isArray(profileData[key])) {
						profile[key].join(',');
					} else {
						profileData[key] = profile[key];
					}
				}
			}
			setFormData(profileData);
		}
	}, [loading, getCurrentProfile, profile]);

	const { company, location, bio } = formData;

	const onChange = e =>
		setFormData({
			...formData,
			[e.target.name]: e.target.value
		});

	const onSubmit = e => {
		e.preventDefault();
		createProfile(formData, history, true);
	};

	return (
		<Fragment>
			<div className="form-wrapper">
				<Heading level="3">Edit Your Profile</Heading>
				<p className="lead">
					Let's get some information to make your profile stand out
				</p>
				<form className="form" onSubmit={e => onSubmit(e)}>
					<div className="form-group">
						<input
							type="text"
							placeholder="Company"
							name="company"
							value={company}
							onChange={e => onChange(e)}
						/>
						<small className="form-text">
							Could be your own company or one you work for
						</small>
					</div>

					<div className="form-group">
						<input
							type="text"
							placeholder="Location"
							name="location"
							value={location}
							onChange={e => onChange(e)}
						/>
						<small className="form-text">
							City & state suggested (eg. Boston, MA)
						</small>
					</div>

					<div className="form-group">
						<textarea
							placeholder="A short bio of yourself"
							name="bio"
							value={bio}
							onChange={e => onChange(e)}
						></textarea>
						<small className="form-text">Tell us a little about yourself</small>
					</div>

					<Button variant="primary">Update Profile</Button>
				</form>
				<p className="form-footer">
					<Link to="/dashboard">Go Back</Link>
				</p>
			</div>
		</Fragment>
	);
};

EditProfile.propTypes = {
	createProfile: PropTypes.func.isRequired,
	getCurrentProfile: PropTypes.func.isRequired,
	profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
	profile: state.profile
});

// withRouter allows access to props.history
export default connect(mapStateToProps, { createProfile, getCurrentProfile })(
	withRouter(EditProfile)
);
