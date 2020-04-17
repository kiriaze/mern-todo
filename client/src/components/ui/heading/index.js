// testing idea of headings as a component
import React from 'react';
// should we style headings here, or via css as base styles?
import styled, { css } from 'styled-components';
import mq from '../../../utils/mq';

// h1-h6 general styling
const sharedStyling = css`
	display: block;
	font-weight: 700;
	font-family: ${props => props.theme.fonts.heading};
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
				font-size: 2.6rem;
				${mq('small')} {
					font-size: 4rem;
				}
				${mq('medium')} {
					font-size: 5rem;
				}
				${mq('large')} {
					font-size: 6rem;
				}
			`;
		case '2':
			return css`
				font-size: 2.3rem;
				${mq('small')} {
					font-size: 2.4rem;
				}
				${mq('medium')} {
					font-size: 4.2rem;
				}
				${mq('large')} {
					font-size: 4.8rem;
				}
			`;
		case '3':
			return css`
				font-size: 2.1rem;
				${mq('small')} {
					font-size: 2.4rem;
				}
				${mq('medium')} {
					font-size: 3.4rem;
				}
				${mq('large')} {
					font-size: 3.8rem;
				}
			`;
		case '4':
			return css`
				font-size: 1.9rem;
				${mq('small')} {
					font-size: 2.2rem;
				}
				${mq('medium')} {
					font-size: 2.8rem;
				}
				${mq('large')} {
					font-size: 3.2rem;
				}
			`;
		case '5':
			return css`
				font-size: 1.7rem;
				${mq('small')} {
					font-size: 2rem;
				}
				${mq('medium')} {
					font-size: 2.4rem;
				}
				${mq('large')} {
					font-size: 2.6rem;
				}
			`;
		case '6':
			return css`
				font-size: 1.5rem;
				${mq('small')} {
					font-size: 1.6rem;
				}
				${mq('medium')} {
					font-size: 1.8rem;
				}
				${mq('large')} {
					font-size: 1.9rem;
				}
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
