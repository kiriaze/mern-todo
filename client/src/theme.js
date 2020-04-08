import { createGlobalStyle } from 'styled-components';

export const theme = {
	// note: or consider a utility like https://github.com/mg901/styled-breakpoints
	// or different naming convention; e.g. tablet, desktop..
	breakpoints: {
		tiny: '32rem',
		small: '48rem',
		medium: '76.8rem',
		large: '102.4rem',
		xlarge: '128rem',
		xxlarge: '144rem',
		xxxlarge: '192rem'
	},
	fontSizes: {
		base: '10px',
		body: '1.6rem'
		// only list base font sizes rather than all typography (e.g. h1-h6, ul, etc.)
		// keep those within their respective components, or in globalStyles?
		// h1: '4rem',
		// h2: {
		// 	tiny: '2rem',
		// 	medium: '3rem'
		// }
	},

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

// css vars; naming convention and matching theme defined styles above
const renderCssVars = theme => {
	let rootVars = '';

	const iterate = (obj, prefix = null) => {
		Object.keys(obj).forEach(key => {
			if (typeof obj[key] === 'object') {
				// console.log(`key: ${key}, value: ${obj[key]}`);
				let concatPre = !prefix ? `${key}-` : prefix + `${key}-`;
				iterate(obj[key], concatPre);
			} else {
				// console.log(`key: ${key}, value: ${obj[key]}`);
				rootVars += `--theme-${prefix}${key}: ${obj[key]};`;
			}
		});
	};

	iterate(theme);

	return rootVars;
};

export const GlobalStyle = createGlobalStyle`
	// resets (if we're not using tailwind or any other system)
	html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed,  figure, figcaption, footer, header, hgroup,  menu, nav, output, ruby, section, summary, time, mark, audio, video {  
		margin: 0;  
		padding: 0;  
		border: 0;  
		font-size: 100%;  
		font: inherit;  
		vertical-align: baseline; 
	}
	
	button, input, optgroup, select, textarea {
		font-family: inherit;
		font-size: 100%;
	}
	
	[type=button], [type=reset], [type=submit], button {
		appearance: none;
		border-width: 0;
	}
	
	a {
		text-decoration: none;
	}
	
	button {
		outline: 0;
	}
	// end resets
	
	:root {
		// - why are duplicate styles being rendered in inspector?
		${renderCssVars(theme)}
	}
	
	*,
	*:before,
	*:after {
		box-sizing: inherit;
		border-width: 0; // tailwind reset
	}
	
	* {
		margin: 0;
		padding: 0;
	}
	
	html {
		font-size: ${theme.fontSizes.base};
		box-sizing: border-box;
	}
	
	body {
		color: var(--theme-colors-text, #000); // defaults if no var
		// background-color: var(--theme-colors-baseDark);
		//

		line-height: 1.5;
		font-family: ${theme.fonts.body};
		font-size: ${theme.fontSizes.body};
	}





	// should this also contain other base/typography styles; e.g. headings?
	// if we're including them here, at what point, if any, do we have styles within component?
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
