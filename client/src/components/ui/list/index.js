import React from 'react';

const List = ({ type = 'ul', ...rest }) => {
	const Type = type;
	return <Type {...rest} />;
};

export default List;
