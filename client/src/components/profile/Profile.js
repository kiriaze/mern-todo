import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Spinner from '../ui/spinner';
import PropTypes from 'prop-types';
import { getProfileById } from '../../actions/profile';

import { StyledLink } from '../ui/link'
import Heading from '../ui/heading'
import styled from 'styled-components'
import './profile.scss'

const UserActions = styled.div`
	margin: 2rem 0;
	> a:last-child {
		margin-left: 1rem;
	}
`;

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
						<UserActions>
							<StyledLink to="/profiles" variant="secondary">
								Back to profiles
							</StyledLink>
							{auth.isAuthenticated &&
								!auth.loading &&
								auth.user._id === profile.user._id && (
									<StyledLink to="/edit-profile" variant="info">
										Edit Profile
									</StyledLink>
								)}
						</UserActions>
						<div className="profile-wrapper">
							<img className="round-img" src={profile.user.avatar} alt="" />
							<Heading level="4">{profile.user.name}</Heading>
							<p className="lead">Works at: {profile.company}</p>
							<p>Based in: {profile.location}</p>
							{profile.bio && (
								<Fragment>
									<Heading level="6">{profile.user.name.split(' ')[0]}'s Bio</Heading>
									{profile.bio && <p>{profile.bio}</p>}
								</Fragment>
							)}
						</div>
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
