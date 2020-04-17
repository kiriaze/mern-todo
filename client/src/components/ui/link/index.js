import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { buttonStyle } from '../button';

// add 'a'(nchor) tag styled here if needed (if custom), or we just use Link

export const StyledLink = styled(Link)`
	${buttonStyle}
`;
