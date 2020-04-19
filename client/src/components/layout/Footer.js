import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.div`
	padding: 4rem 0;
	background-color: #fff;
	border-top: 0.1rem solid #eee;
	ul {
		display: flex;
		list-style: none;
		justify-content: flex-end;
		li + li {
			margin-left: 2rem;
		}
	}
`;

const Footer = () => {
	return (
		<StyledFooter className="footer">
			<div className="container">
				<ul>
					<li>
						<a href="#!">Privacy Policy</a>
					</li>
					<li>
						<a href="#!">Terms & Conditions</a>
					</li>
				</ul>
			</div>
		</StyledFooter>
	);
};

export default Footer;
