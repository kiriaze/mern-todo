// testing idea of headings as a component
import React from 'react';
// should we style headings here, or via css as base styles?
import styled, { css } from 'styled-components';

// h1-h6 general styling
const sharedStyling = css`
	display: block;
	font-weight: 700;
	font-family: ${props => props.theme.fonts.heading};
	// example
	&.logo {
		text-decoration: underline;
	}
`;

///////////////////////////////////////////////////////////////////////////////
// Below is a bit better than having conditional styles depicted in prop comparisons,
// albeit similar, this seems a bit cleaner - and allows for more logic/js if needed
// Note: leaning on this version over the other as this allows for a possible variant with their own respective methods for styling.
///////////////////////////////////////////////////////////////////////////////

// handleLevel styles heirarchy of h1-h6
const handleLevel = props => {
	switch (props.level) {
		case '1':
			return css`
				// font-size: 4rem;
				color: forestgreen;
				font-size: 2.5rem;
				@media (min-width: ${props.theme.breakpoints.small}) {
					font-size: 4rem;
				}
				@media (min-width: ${props.theme.breakpoints.medium}) {
					font-size: 5rem;
				}
				@media (min-width: ${props.theme.breakpoints.large}) {
					font-size: 6rem;
				}
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
		case 'fancy':
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
