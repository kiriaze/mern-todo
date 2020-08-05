import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Spinner from '../ui/spinner';
import PropTypes from 'prop-types';
import { getProfileById } from '../../actions/profile';

const Profile = ({
	getProfileById,
	profile: { profile, loading },
	auth,
	match
}) => {
	useEffect(() => {
		getProfileById(match.params.id); // get id from url
	}, [getProfileById, match.params.id]);

	return (
		<Fragment>
			{profile === null || loading ? (
				<Spinner />
			) : (
				<Fragment>
					<div className="container">
						<Link to="/profiles" className="btn btn-light">
							Back to profiles
						</Link>
						{auth.isAuthenticated &&
							!auth.loading &&
							auth.user._id === profile.user._id && (
								<Link to="/edit-profile" className="btn btn-dark">
									Edit Profile
								</Link>
							)}
						<img className="round-img my-1" src={profile.user.avatar} alt="" />
						<h1 className="large">{profile.user.name}</h1>
						<p className="lead">at {profile.company}</p>
						<p>{profile.location}</p>
						{profile.bio && (
							<Fragment>
								<h2 className="text-primary">
									{profile.user.name.split(' ')[0]}'s Bio
								</h2>
								<p>{profile.bio}</p>
								<div className="line"></div>
							</Fragment>
						)}
					</div>
				</Fragment>
			)}
		</Fragment>
	);
};

Profile.propTypes = {
	getProfileById: PropTypes.func.isRequired,
	profile: PropTypes.object.isRequired,
	auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
	profile: state.profile,
	auth: state.auth
});

export default connect(mapStateToProps, { getProfileById })(Profile);
