import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { darken } from 'polished';

// @todo - rename component directory to link, since we can house all the different types in one file with multiple exports (e.g. below)?

// instead of defining theme here, pull into a config/vars global
const theme = {
	text: {
		default: ''
	},
	bg: {},
	colors: {
		primary: 'royalblue',
		secondary: 'rgb(249, 119, 148)',
		success: '#25bd25',
		info: 'dodgerblue',
		warning: 'burlywood',
		danger: 'red'
	}
};

const buttonStyle = css`
	display: inline-block;
	border-radius: 0.3rem;
	padding: 0.8rem 2rem;
	margin: 0.5rem 1rem;
	cursor: pointer;
	color: white;
	background: black;
	transition: background-color 0.35s ease-in-out, color 0.35s ease-in-out;
	&:hover {
		background-color: rgb(98, 58, 162);
	}

	${props =>
		css`
			background-color: ${theme.colors[props.color]};
			&:hover {
				background-color: ${props =>
					props.color && darken(0.1, theme.colors[props.color])};
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
