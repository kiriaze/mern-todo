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
	&.logo {
		text-decoration: underline;
	}
`;

///////////////////////////////////////////////

// note: i still don't really agree with global typography styles being scoped to a component, rather than say a config of some kind with theme defaults...e.g. ThemeProvider from root of app

///////////////////////////////////////////////////////////////////////////////
// Below is a bit better than having conditional styles depicted in prop comparisons,
// albeit similar, this seems a bit cleaner - and allows for more logic/js if needed
///////////////////////////////////////////////////////////////////////////////

// handleLevel styles heirarchy of h1-h6
const handleLevel = props => {
	switch (props.level) {
		case '1':
			return css`
				font-size: 4rem;
				color: forestgreen;
			`;
		case '2':
			return css`
				color: ${props.theme.colors.primary};
				// font-size: 3.6rem;

				//
				font-size: 2rem;
				@media (min-width: ${props.theme.breakpoints.small}) {
					font-size: 2.4rem;
					color: ${props.theme.colors.secondary};
				}
				@media (min-width: ${props.theme.breakpoints.medium}) {
					font-size: 3rem;
					color: ${props.theme.colors.warning};
				}
				@media (min-width: ${props.theme.breakpoints.large}) {
					font-size: 3.6rem;
					color: ${props.theme.colors.danger};
				}
			`;
		case '3':
			return css`
				color: orange;
				font-size: 3.2rem;
			`;
		case '4':
			return css`
				font-size: 2.8rem;
				letter-spacing: 1rem;
			`;
		case '5':
			return css`
				font-size: 2.4rem;
				text-transform: uppercase;
			`;
		case '6':
			return css`
				font-size: 1.8rem;
				font-weight: 100;
			`;
		default:
			return '';
	}
};

// handleVariant styles unique instances of headings
const handleVariant = props => {
	switch (props.variant) {
		case 'poop':
			return css`
				color: purple;
			`;
		default:
			return '';
	}
};

const StyledHeading = styled.h1`
	${sharedStyling}
	${props => handleLevel(props)}
	${props => handleVariant(props)}
`;

const Heading = ({ level, variant, ...rest }) => {
	return (
		<StyledHeading level={level} as={`h${level}`} variant={variant} {...rest} />
	);
};

Heading.defaultProps = {
	level: '1'
};

export default Heading;
//

//

// ///////////////////////////////////////////////////////
// // Below gives albeit seemingly redundant,
// // affords better readability as things are scoped separately
// // and could have them be separate imports (over abstraction, but possible)
// //////////////////////////////////////////////////////

// const H1 = styled.h1`
// 	${sharedStyling}
// 	font-size: 4rem;
// 	color: red;
// `;

// const H2 = styled.h2`
// 	${sharedStyling}
// 	font-size: 3.6rem;
// 	color: blue;
// `;

// const H3 = styled.h3`
// 	${sharedStyling}
// 	font-size: 3.2rem;
// 	color: orange;
// `;

// const H4 = styled.h4`
// 	${sharedStyling}
// 	font-size: 2.8rem;
// 	color: green;
// `;

// const H5 = styled.h5`
// 	${sharedStyling}
// 	font-size: 2.4rem;
// 	color: wheat;
// `;

// const H6 = styled.h6`
// 	${sharedStyling}
// 	font-size: 1.8rem;
// 	color: grey;
// `;

// // or use 'variant' instead of level,
// // and have cases for each 'variant'; e.g.
// // h1, h2, ..., subtitle, mono, script, etc.
// const Heading = ({ level, ...rest }) => {
// 	switch (level) {
// 		case '1':
// 			return <H1 {...rest} />;
// 		case '2':
// 			return <H2 {...rest} />;
// 		case '3':
// 			return <H3 {...rest} />;
// 		case '4':
// 			return <H4 {...rest} />;
// 		case '5':
// 			return <H5 {...rest} />;
// 		case '6':
// 			return <H6 {...rest} />;
// 		default:
// 			return <H1 {...rest} />;
// 	}
// };

// Heading.defaultProps = {
// 	level: 1
// };

// export default Heading;

// //
