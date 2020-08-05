import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import styled, { css } from 'styled-components';

const ProfileCard = styled.div`
	width: 100%;
	max-width: 25%;
	padding: 2rem;
	margin: 0 1rem;
	text-align: center;
	border-radius: 0.5rem;
	background-color: white;
	p {
		margin: 0;
	}
	img {
		width: 6rem;
		height: 6rem;
		border-radius: 50%;
	}
`;

const ProfileItem = ({
	profile: {
		user: { _id, name, avatar },
		role,
		company,
		location
	}
}) => {
	return (
		<ProfileCard>
			<img src={avatar} alt={name} />
			<div>
				<h2>{name}</h2>
				<p>@username</p>
				<p>
					{role || 'Engineer'} {company && <span> at {company}</span>}
				</p>
				<p>{location && <span>{location}</span>}</p>
				<p>4 open tasks</p>
				<Link to={`/profile/${_id}`} className="btn btn-primary">
					View Profile
				</Link>
				<a href="#!">View Projects</a>
			</div>
		</ProfileCard>
	);
};

ProfileItem.propTypes = {
	profile: PropTypes.object.isRequired
};

export default ProfileItem;
