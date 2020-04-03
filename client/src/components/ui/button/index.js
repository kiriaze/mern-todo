import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { darken } from 'polished';

// @todo - rename component directory to link, since we can house all the different types in one file with multiple exports (e.g. below)?

// using color prop for button style, which is semantic - but kinda looks weird when implemented - would variant be a better name for the prop?

const buttonStyle = css`
	display: inline-block;
	border-radius: 0.3rem;
	padding: 0.8rem 2rem;
	margin: 0.5rem 1rem;
	cursor: pointer;
	color: white;
	background: ${props => props.theme.colors.baseDark};
	// background: var(--theme-ui-colors-danger);
	transition: background-color 0.35s ease-in-out, color 0.35s ease-in-out;
	&:hover {
		background-color: rgb(98, 58, 162);
	}

	${props =>
		css`
			background-color: ${props.theme.colors[props.color]};
			&:hover {
				background-color: ${props =>
					props.color && darken(0.1, props.theme.colors[props.color])};
			}
		`}
`;

// // to override any specific button, add this after the rule above
// ${props =>
// 	props.color === 'success' &&
// 	css`
// 		background-color: yellow;
// 		&:hover {
// 			background-color: ${darken(0.05, 'yellow')};
// 		}
// 	`}

export const Button = styled.button`
	${buttonStyle}
`;

export const StyledLink = styled(Link)`
	${buttonStyle}
`;
