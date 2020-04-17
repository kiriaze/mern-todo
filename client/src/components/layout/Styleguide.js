import React, { Fragment } from 'react';

import { Link } from 'react-router-dom';
// consider a ui/typography that houses heading, but what else would it house, a mouse? =P
import Heading from '../ui/heading';
import { Button } from '../ui/button';
import { StyledLink } from '../ui/link';

const Styleguide = () => {
	return (
		<Fragment>
			<div className="container">
				<Heading level="1">Heading 1</Heading>
				<Heading level="2">Heading 2</Heading>
				<Heading level="3">Heading 3</Heading>
				<Heading level="4">Heading 4</Heading>
				<Heading level="5">Heading 5</Heading>
				<Heading level="6">Heading 6</Heading>

				<p className="lead">
					This is a paragraph lead statement, so nice and prominent.
				</p>

				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt
					quaerat eos quia dolor voluptatem similique, voluptates, possimus
					placeat consectetur iusto, optio esse. Provident, voluptatem quibusdam
					inventore dolores quod ea reiciendis.
				</p>

				<div className="user-actions">
					<Link className="btn btn--info" to="/tasks">
						Tasks Link w/ classes
					</Link>

					{/* styled-component version */}
					<StyledLink to="/tasks" variant="info">
						View tasks
					</StyledLink>

					<StyledLink to="/add-task" variant="primary">
						Add Task
					</StyledLink>

					<Button variant="custom-1">Custom Button Style 1</Button>
					<Button variant="custom-2">Custom Button Style 2</Button>
					<Button>Default Button</Button>
				</div>
			</div>
		</Fragment>
	);
};

export default Styleguide;
