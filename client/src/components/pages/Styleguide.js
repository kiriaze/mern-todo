import React, { Fragment } from 'react';
// import { Link } from 'react-router-dom';

import styled from 'styled-components';

import Heading from '../ui/heading';
import { Button } from '../ui/button';
import { StyledLink } from '../ui/link';
import Table from '../ui/table';
import List from '../ui/list';
import ListItem from '../ui/listItem';
import Text from '../ui/text';

const StyleguideSection = styled.div`
	margin: 4rem 0;
	padding-bottom: 4rem;
	border-bottom: 0.1rem solid #eee;
	&:last-of-type {
		border-bottom: 0;
	}
`;

const Styleguide = () => {
	return (
		<Fragment>
			<div className="container">
				<StyleguideSection>
					<Heading level="5" variant="sg-heading">
						Headings
					</Heading>

					<Heading level="1">Heading 1</Heading>
					<Heading level="2">Heading 2</Heading>
					<Heading level="3">Heading 3</Heading>
					<Heading level="4">Heading 4</Heading>
					<Heading level="5">Heading 5</Heading>
					<Heading level="6">Heading 6</Heading>
				</StyleguideSection>

				<StyleguideSection>
					<Heading level="5" variant="sg-heading">
						Paragraphs
					</Heading>

					<p className="lead">
						This is a paragraph lead statement, so nice and prominent.
					</p>

					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt
						quaerat eos quia dolor voluptatem similique, voluptates, possimus
						placeat consectetur iusto, optio esse. Provident, voluptatem
						quibusdam inventore dolores quod ea reiciendis.
					</p>

					<Text>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident
						alias libero perferendis quo tenetur dignissimos voluptas quibusdam
						non nulla atque! Aliquam tempore praesentium nobis voluptatum
						impedit minima mollitia, repellendus laboriosam?
					</Text>

					<Text
						as="span"
						fontWeight="bold"
						fontSize={['1rem', '2.4rem', null, '4rem', '10rem']}
						color="red"
					>
						a span tag
					</Text>
				</StyleguideSection>

				<StyleguideSection>
					<Heading level="5" variant="sg-heading">
						Lists
					</Heading>
					<div className="row">
						<div className="col">
							<List>
								<ListItem>List Item 1</ListItem>
								<ListItem>List Item 2</ListItem>
								<ListItem>List Item 3</ListItem>
							</List>
						</div>
						<div className="col">
							<List type="ol">
								<ListItem>List Item 1</ListItem>
								<ListItem>List Item 2</ListItem>
								<ListItem>List Item 3</ListItem>
							</List>
						</div>
					</div>
				</StyleguideSection>

				<StyleguideSection>
					<Heading level="5" variant="sg-heading">
						Buttons
					</Heading>
					<div className="user-actions">
						<Button>Default Button</Button>

						<StyledLink to="/tasks" variant="info">
							View tasks
						</StyledLink>

						<StyledLink to="/add-task" variant="primary">
							Add Task
						</StyledLink>

						<Button variant="custom-1">Custom Button Style 1</Button>
						<Button variant="custom-2">Custom Button Style 2</Button>
					</div>
				</StyleguideSection>

				<StyleguideSection>
					<Heading level="5" variant="sg-heading">
						Tables
					</Heading>
					<Table />
				</StyleguideSection>
			</div>
		</Fragment>
	);
};

export default Styleguide;
