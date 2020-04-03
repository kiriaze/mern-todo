// testing idea of headings as a component
import React from 'react';
// should we style headings here, or via css as base styles?
import styled, { css } from 'styled-components';

const sharedStyling = css`
	display: block;
	font-weight: 700;
	font-family: ${props => props.theme.fonts.heading};
	// font-family: 'Open Sans', sans-serif;
	// font-family: 'Frank Ruhl Libre', serif;
`;

///////////////////////////////////////////////

// // note: i still don't really agree with global typography styles being scoped to a component, rather than say a config of some kind with theme defaults...e.g. ThemeProvider from root of app

// although this way is more concise,
// could be harder to read if each level has lots of styles
const StyledHeading = styled.h1`
	
	${sharedStyling}
	
	${props =>
		// for the prop default 1 passed in
		(props.level === 1 || props.level === '1') &&
		css`
			color: forestgreen;
			// font-size: 4rem;
		`}
	
	${props =>
		props.level === '2' &&
		css`
			color: ${props.theme.colors.primary};
			font-size: 3.6rem;
		`}
	
	${props =>
		props.level === '3' &&
		css`
			color: orange;
			font-size: 3.2rem;
		`}
	
	${props =>
		props.level === '4' &&
		css`
			font-size: 2.8rem;
			letter-spacing: 1rem;
		`}
	
	${props =>
		props.level === '5' &&
		css`
			font-size: 2.4rem;
			text-transform: uppercase;
		`}

	${props =>
		props.level === '6' &&
		css`
			font-size: 1.8rem;
			font-weight: 100;
		`}

`;

const Heading = ({ level, ...rest }) => {
	return <StyledHeading level={level} as={`h${level}`} {...rest} />;
};

///////////////////////////////////////////////////////
// Below gives albeit seemingly redundant,
// affords better readability as things are scoped separately
//////////////////////////////////////////////////////

// const H1 = styled.h1`
// 	${sharedStyling}
// 	font-size: 4rem;
// `;

// const H2 = styled.h2`
// 	${sharedStyling}
// 	font-size: 3.6rem;
// `;

// const H3 = styled.h3`
// 	${sharedStyling}
// 	font-size: 3.2rem;
// `;

// const H4 = styled.h4`
// 	${sharedStyling}
// 	font-size: 2.8rem;
// `;

// const H5 = styled.h5`
// 	${sharedStyling}
// 	font-size: 2.4rem;
// `;

// const H6 = styled.h6`
// 	${sharedStyling}
// 	font-size: 1.8rem;
// `;

// const Heading = ({ level, ...rest }) => {
// 	switch (level) {
// 		case '1':
// 			return <H1 as={`h${level}`} {...rest} />;
// 		case '2':
// 			return <H2 as={`h${level}`} {...rest} />;
// 		case '3':
// 			return <H3 as={`h${level}`} {...rest} />;
// 		case '4':
// 			return <H4 as={`h${level}`} {...rest} />;
// 		case '5':
// 			return <H5 as={`h${level}`} {...rest} />;
// 		case '6':
// 			return <H6 as={`h${level}`} {...rest} />;
// 		default:
// 			return <H1 as={`h${level}`} {...rest} />;
// 	}
// };

Heading.defaultProps = {
	level: 1
};

export default Heading;
