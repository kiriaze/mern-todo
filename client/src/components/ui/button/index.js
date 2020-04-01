// styled-components
import styled, { css } from 'styled-components';

// import { Link } from 'react-router-dom';

export const Button = styled.a`
	/* This renders the buttons above... Edit me! */
	display: inline-block;
	border-radius: 0.3rem;
	padding: 0.8rem 2rem;
	margin: 0.5rem 1rem;
	cursor: pointer;
	color: white;
	background: rgb(249, 119, 148);
	transition: background-color 0.35s ease-in-out, color 0.35s ease-in-out;
	&:hover {
		background-color: rgb(98, 58, 162);
	}

	/* edit this to target it specifically! */
	${props =>
		props.danger &&
		css`
			background: red;
		`}
	${props =>
		props.success &&
		css`
			background: forestgreen;
		`}
	${props =>
		props.info &&
		css`
			background: skyblue;
		`}
`;
//

// export const A = styled.a`
//   display: flex;
//   align-items: center;
//   flex: none;
// `;

// export const StyledLink = styled(Link)`
//   display: flex;
//   flex: none;
//   align-items: center;
// `;

// export const StyledButton = styled.button`
//   font-size: ${props => (props.size === 'small' ? '15px' : '16px')};
//   font-weight: 600;
//   color: ${theme.text.default};
//   border-radius: 32px;
//   padding: ${props => (props.size === 'small' ? '6px 12px' : '10px 16px')};
//   background: ${theme.bg.wash};
//   display: flex;
//   flex: none;
//   align-items: center;
//   justify-content: center;
//   cursor: pointer;
//   -webkit-display: none;
//   opacity: ${props => (props.disabled ? '0.6' : '1')};
//   line-height: 1.2;
//   transition: box-shadow 0.2s ease-in-out;
//   .icon:not(:first-child):not(:last-child) {
//     margin-right: 4px;
//   }
//   &:hover {
//     background: ${theme.bg.border};
//   }
//   &:focus {
//     box-shadow: 0 0 0 2px ${theme.bg.default}, 0 0 0 4px ${theme.bg.border};
//     transition: box-shadow 0.2s ease-in-out;
//   }
//   &:active {
//     box-shadow: 0 0 0 2px ${theme.bg.default},
//       0 0 0 4px ${tint(theme.bg.border, -24)};
//     transition: box-shadow 0.2s ease-in-out;
//   }
// `;

// .button {
//     display: inline-flex;
//     font-family: Frank Ruhl Libre,serif;
//     font-size: 16px;
//     letter-spacing: -.1px;
//     font-weight: 700;
//     line-height: 16px;
//     text-decoration: none!important;
//     background-color: #fff;
//     color: #0081f6!important;
//     border: none;
//     border-radius: 4px;
//     cursor: pointer;
//     justify-content: center;
//     padding: 16px 32px;
//     height: 48px;
//     text-align: center;
//     white-space: nowrap
// }

// .button:active {
//     outline: 0
// }

// .button:before {
//     border-radius: 4px
// }

// .button-shadow {
//     position: relative
// }

// .button-shadow:before {
//     content: "";
//     position: absolute;
//     top: 0;
//     right: 0;
//     bottom: 0;
//     left: 0;
//     box-shadow: 0 8px 16px rgba(29,43,76,.12);
//     mix-blend-mode: multiply;
//     transition: box-shadow .15s ease
// }

// .button-shadow:hover:before {
//     box-shadow: 0 8px 16px rgba(29,43,76,.25)
// }

// .button-primary,.button-secondary,.button-tertiary {
//     color: #fff!important;
//     transition: background .15s ease
// }

// .button-primary {
//     background: #ff678c;
//     background: linear-gradient(65deg,#ff4d79,#ff809f)
// }

// .button-primary:hover {
//     background: #ff6c90;
//     background: linear-gradient(65deg,#ff527d,#ff85a3)
// }

// .button-primary.button-shadow:before {
//     box-shadow: 0 8px 16px rgba(255,77,121,.25)
// }

// .button-primary.button-shadow:hover:before {
//     box-shadow: 0 8px 16px rgba(255,77,121,.4)
// }

// .button-secondary {
//     background: #2294fb;
//     background: linear-gradient(65deg,#0081f6,#44a6ff)
// }

// .button-secondary:hover {
//     background: #2796fb;
//     background: linear-gradient(65deg,#0084fb,#49a8ff)
// }

// .button-secondary.button-shadow:before {
//     box-shadow: 0 8px 16px rgba(0,129,246,.25);
// }

// .button-secondary.button-shadow:hover:before {
//     box-shadow: 0 8px 16px rgba(0,129,246,.4)
// }

// .button-tertiary {
//     border-radius: 9999px;
//     background: #84fbdb;
//     background: linear-gradient(65deg,#5ffad0,#a9fce6)
// }

// .button-tertiary:hover {
//     background: #89fbdc;
//     background: linear-gradient(65deg,#64fad1,#aefce7)
// }

// .button-tertiary.button-shadow:before {
//     border-radius: 9999px;
//     box-shadow: 0 8px 16px rgba(95,250,208,.25)
// }

// .button-tertiary.button-shadow:hover:before {
//     border-radius: 9999px;
//     box-shadow: 0 8px 16px rgba(95,250,208,.4)
// }

// .button-block {
//     display: flex
// }
