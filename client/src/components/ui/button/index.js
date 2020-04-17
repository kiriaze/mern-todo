import styled, { css } from 'styled-components';
import { darken } from 'polished';

// Note: We could combine both (classes/scss and SC) by having all base styles along with modifier class styles in scss, and utilize the styled-components for state changes via props; e.g. loading?

// // If we're not using Styled-Components
// import React from 'react'; // if we're not using SC and exporting our own custom component
// import './style.scss'; // if no SC

// For more custom styles per variant, we can store styles in a custom var to inject within buttonStyle. e.g. below
const variantStyles = props => {
	switch (props.variant) {
		case 'custom-1':
			return css`
				background-color: purple;
				&:hover {
				}
			`;
		case 'custom-2':
			return css`
				color: black;
				background-color: yellow;
				&:hover {
				}
			`;
		default:
			// defaults to using color's object keys if they exist
			return css`
				background-color: ${props.theme.colors[props.variant]};
				&:hover {
					background-color: ${props =>
						props.variant && darken(0.1, props.theme.colors[props.variant])};
				}
			`;
	}
};

export const buttonStyle = css`
	font-size: 1.5rem;
	line-height: 4rem;
	display: inline-block;
	border-radius: 0.3rem;
	padding: 0 2rem;
	// margin: 0.5rem 1rem;
	cursor: pointer;
	transition: background-color 0.35s ease-in-out, color 0.35s ease-in-out;

	// defaults
	color: white;
	background: ${props => props.theme.colors.baseDark};
	// background: var(--theme-colors-danger); // works as well
	&:hover {
		background-color: rgb(98, 58, 162);
	}
	// /defaults

	${variantStyles}
`;

// styled-component
export const Button = styled.button`
	${buttonStyle}
`;

// // non styled-component, using rel style.scss
// export const Button = ({ variant, ...rest }) => {
// 	return <button className={`btn btn--${variant}`} {...rest} />;
// };
