import styled, { css } from 'styled-components';
import { darken } from 'polished';

// Despite both Link and Button currently sharing the same styles, they could and most likely will have their own unique styles, thus they're housed separately from the get-go. 'a'(nchor) tags would most likely live within ../Link.

// // For more custom styles per variant, we can store styles in a custom var to inject within buttonStyle. e.g. below
// const variantStyles = props => {
// 	switch (props.variant) {
// 		case 'primary':
// 			return css`
// 				background-color: ${props.theme.colors.primary};
// 				&:hover {
// 				}
// 			`;
// 		case 'danger':
// 			return css`
// 				background-color: ${props.theme.colors.danger};
// 				&:hover {
// 				}
// 			`;
// 		default:
// 			return css`
// 				background-color: ${props.theme.colors.baseDark};
// 			`;
// 	}
// };

export const buttonStyle = css`
	display: inline-block;
	border-radius: 0.3rem;
	padding: 0.8rem 2rem;
	margin: 0.5rem 1rem;
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

	// custom; e.g. variantStyles

	// catch-all
	${props =>
		css`
			background-color: ${props.theme.colors[props.variant]};
			&:hover {
				background-color: ${props =>
					props.variant && darken(0.1, props.theme.colors[props.variant])};
			}
		`}
`;

// // e.g. to override any specific button, add this after the rule above - albeit, the ${variantStyles} method is cleaner
// ${props =>
// 	props.variant === 'warning' &&
// 	css`
// 		color: black;
// 		background-color: yellow;
// 		&:hover {
// 			background-color: ${darken(0.05, 'yellow')};
// 		}
// 	`}

export const Button = styled.button`
	${buttonStyle}
`;
