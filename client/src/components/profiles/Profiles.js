import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Spinner from '../ui/spinner';
import ProfileItem from './ProfileItem';
import { getProfiles } from '../../actions/profile';

import styled, { css } from 'styled-components';

import Heading from '../ui/heading';

const ProfilesList = styled.div`
	display: flex;
	justify-content: space-between;
`;

const Profiles = ({ getProfiles, profile: { profiles, loading } }) => {
	useEffect(() => {
		getProfiles();
	}, [getProfiles]);

	return (
		<Fragment>
			{loading ? (
				<Spinner />
			) : (
				<Fragment>
					<div className="container">
						<Heading level="1">Users</Heading>
						<p className="lead">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus
							dolore voluptates neque alias. Labore ipsum reprehenderit quos
							culpa porro quaerat excepturi atque nemo. Ullam pariatur amet
							reiciendis nulla. Reprehenderit, harum.
						</p>
						<ProfilesList>
							{profiles.length > 0 ? (
								profiles.map(profile => (
									<ProfileItem key={profile._id} profile={profile} />
								))
							) : (
								<h4>No profiles found</h4>
							)}
						</ProfilesList>
					</div>
				</Fragment>
			)}
		</Fragment>
	);
};

Profiles.propTypes = {
	getProfiles: PropTypes.func.isRequired,
	profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
	profile: state.profile
});

export default connect(mapStateToProps, { getProfiles })(Profiles);
