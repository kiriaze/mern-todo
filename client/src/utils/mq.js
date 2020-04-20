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
let mq = (size, type = 'min', orientation) => `
		@media (${type}-width: ${theme.breakpoints[size]}) ${
	orientation ? `and (orientation: ${orientation})` : ''
}
	`;
//

export default mq;
