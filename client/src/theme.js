import { css } from 'styled-components';
import { createGlobalStyle } from 'styled-components';

export const theme = {
	breakpoints: {
		tiny: '32rem',
		small: '48rem',
		medium: '76.8rem',
		large: '102.4rem',
		xlarge: '128rem',
		xxlarge: '144rem',
		xxxlarge: '192rem'
	},

	// fontSizes: [10, 12, 14, 16, 20, 24, 32, 48, 64],
	fontSizes: {
		base: '10px',
		body: '1.6rem'
		// h1: '4rem', // idk, maybe set within globalStyles, or within component?
		// h2: {
		// 	tiny: '2rem',
		// 	medium: '3rem'
		// }
	},

	// space: [0, 4, 8, 16, 32, 64, 128, 256], // idk...

	fonts: {
		body: 'Open Sans, sans-serif',
		heading: 'Frank Ruhl Libre, serif',
		monospace: 'Menlo, monospace'
	},

	fontWeights: {
		body: 400,
		heading: 700,
		bold: 700
	},

	lineHeights: {
		body: 1.5,
		heading: 1.25
	},

	// which is better
	colors: {
		primary: 'royalblue', // #33e
		secondary: 'rgb(249, 119, 148)',
		success: '#25bd25',
		info: 'dodgerblue',
		warning: 'burlywood',
		danger: 'red',

		//
		selectionBgColor: 'rgba(210, 180, 140, .99)',
		selectionTextColor: 'rgba(255, 255, 255, .99)',

		baseWhite: '#fff',
		baseLight: '#CEDDE2',
		baseMedium: '#8C9FA5',
		baseDark: '#131316',
		baseBlack: '#000000',

		brandOffwhite: '#f5f5f5',
		brandPrimary: '#f06459',
		brandSecondary: '#d2b48c',
		brandCharcoal: '#1a2322',

		brandText: '#1f1f1f',
		brandDivider: '#1f1f1f',

		stateSuccess: '#31aa51',
		stateError: '#F06459',

		socialFacebook: '#3b5998',
		socialInstagram: '#405de6',
		socialLinkedin: '#0077b5',
		socialPinterest: '#bd081c',
		socialTwitter: '#1da1f2'
	}
	// // vs say this
	// colors: {
	// 	selection: {
	// 		bgColor: rgba(210, 180, 140, .99),
	// 		textColor: rgba(255, 255, 255, .99),
	// 	},
	// 	base: {
	// 		white: #fff,
	// 		light: #CEDDE2,
	// 		medium: #8C9FA5,
	// 		dark: #131316,
	// 		black: #000000,
	// 	},
	// 	brand: {
	// 		primary: #f06459,
	// 		secondary: #d2b48c,
	// 		charcoal: #1a2322,
	// 		offwhite: #f5f5f5,
	// 	},
	// 	text: {
	// 		brand: #1f1f1f
	// 	},
	// 	divider: {
	// 		brand: #1f1f1f
	// 	}
	// 	state: {
	// 		success: #31aa51,
	// 		error: #F06459,
	// 		info: 'dodgerblue',
	// 		warning: 'burlywood',
	// 		danger: 'red'
	// 	},
	// 	social: {
	// 		facebook: #3b5998,
	// 		instagram: #405de6,
	// 		linkedin: #0077b5,
	// 		pinterest: #bd081c,
	// 		twitter: #1da1f2
	// 	},
	// },
};

// testing css vars; testing naming convention and matching theme defined styles above
const cssVars = css`
	--theme-ui-colors-text: ${theme.colors.brandText};
	--theme-ui-colors-background: ${theme.colors.brandOffwhite};
	--theme-ui-colors-primary: ${theme.colors.primary};
	--theme-ui-colors-secondary: ${theme.colors.secondary};
	--theme-ui-colors-success: ${theme.colors.success};
	--theme-ui-colors-info: ${theme.colors.info};
	--theme-ui-colors-warning: ${theme.colors.warning};
	--theme-ui-colors-danger: ${theme.colors.danger};
`;

export const GlobalStyle = createGlobalStyle`
	// resets (if we're not using tailwind or any other system)
	html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed,  figure, figcaption, footer, header, hgroup,  menu, nav, output, ruby, section, summary, time, mark, audio, video, button {  
	   margin: 0;  
	   padding: 0;  
	   border: 0;  
	   font-size: 100%;  
	   font: inherit;  
	   vertical-align: baseline; 
	}
	a {
		text-decoration: none;
	}
	button {
		outline: 0;
	}
	//
	:root {
		// testing css vars
		${cssVars}
	}
	*,
	*:before,
	*:after {
		box-sizing: inherit;
	}
	* {
		margin: 0;
		padding: 0;
	}
	html {
		font-size: 10px;
		box-sizing: border-box;
	}
	body {
		color: var(--theme-ui-colors-text, #000); // defaults if no var
		background-color: var(--theme-ui-colors-background, #444);
		//

		line-height: 1.5;
		font-size: 1.6rem;
	}
	// should this also contain other base/typography styles; e.g. headings?
	h1 {
		font-size: 2.5rem;
		@media (min-width: ${theme.breakpoints.small}) {
			font-size: 4rem;
		}
		@media (min-width: ${theme.breakpoints.medium}) {
			font-size: 5rem;
		}
		@media (min-width: ${theme.breakpoints.large}) {
			font-size: 6rem;
		}
	}
`;
