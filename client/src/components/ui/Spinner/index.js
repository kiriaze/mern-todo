import React, { Fragment } from 'react';
import './style.css';

// @todo - incorporate/replace with external component?
// @todo - styled-component over an imported stylesheet?

export default () => {
	const size = '60'; // multiples of 30
	return (
		<Fragment>
			<div className="icon spinner">
				<svg
					width={size}
					height={size}
					viewBox="0 0 30 30"
					xmlns="http://www.w3.org/2000/svg"
					data-svg="spinner"
				>
					<circle fill="none" stroke="#000" cx="15" cy="15" r="14"></circle>
				</svg>
			</div>
		</Fragment>
	);
};
