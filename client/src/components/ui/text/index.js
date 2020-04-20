// consider https://styled-system.com/

// we keep headings and list/listItems separate from Text component
// this component is for these types of elements: p, span, blockquote, strong, sub, sup, small, q, cite, pre
// @todo - automate the iterator for mq, as its specific to each prop for now..
// <Text
// 	as="p"
// 	fontSize={[ 3, 4, null, 7 ]}
// 	fontWeight='bold'
// 	color='black'
// 	marginLeft='3rem'
//  etc...>
// 	Text
// </Text>

import React from 'react';
import styled, { css } from 'styled-components';
import mq from '../../../utils/mq';

const StyledText = styled.p`
	${props =>
		Array.isArray(props.fontSize)
			? props.fontSize.map(
					(fs, index) => css`
						${mq(Object.keys(props.theme.breakpoints)[index])} {
							font-size: ${fs};
						}
					`
			  )
			: props.fontSize
			? `font-size: ${props.fontSize}`
			: ''}
	${props => (props.fontWeight ? `font-weight: ${props.fontWeight}` : '')}
	${props => (props.color ? `color: ${props.color}` : '')}
	${props => (props.margin ? `margin: ${props.margin}` : '')}
	${props => (props.marginRight ? `margin-right: ${props.marginRight}` : '')}
`;

const Text = ({ ...rest }) => {
	return <StyledText {...rest} />;
};

export default Text;
