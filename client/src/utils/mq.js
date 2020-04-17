// abstract into a mq/breakpoint utility function?
import { theme } from '../theme.js';

// Breakpoint mixin
// Usage:
// ${mq('medium')} {
// 	background: red;
// }
// ${mq('large', 'max', 'portrait')} {
// }
// note: should 'type' be 'all, print, screen, speech' instead of 'min/max'?
// @media screen and (min-width: 30em) and (orientation: landscape)
let mq = (size, type = 'min', orientation = 'landscape') => `
		@media (${type}-width: ${theme.breakpoints[size]}) and (orientation: ${orientation})
	`;
//

export default mq;
