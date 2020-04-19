import React from 'react';
import './style.scss';

const table = () => {
	return (
		<table className="table table-align-middle">
			<thead>
				<tr>
					<th>
						<h6>Role</h6>
					</th>
					<th>
						<h6>Team</h6>
					</th>
					<th>
						<h6>Location</h6>
					</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>
						<a href="#!">
							<h5>Senior UX Designer</h5>
							<p>Responsible for design systems and brand management.</p>
						</a>
					</td>
					<td>
						<a href="#!">
							<p>Consumer</p>
						</a>
					</td>
					<td>
						<a href="#!">
							<p>Los Angeles</p>
						</a>
					</td>
				</tr>
				<tr>
					<td>
						<a href="#!">
							<h5>Motion Designer</h5>
							<p>Responsible for creating life in our apps.</p>
						</a>
					</td>
					<td>
						<a href="#!">
							<p>Product</p>
						</a>
					</td>
					<td>
						<a href="#!">
							<p>San Francisco, CA</p>
						</a>
					</td>
				</tr>
				<tr>
					<td>
						<a href="#!">
							<h5>Design Researcher</h5>
							<p>
								Help us make the best decisions with qualitative experiments.
							</p>
						</a>
					</td>
					<td>
						<a href="#!">
							<p>Consulting</p>
						</a>
					</td>
					<td>
						<a href="#!">
							<p>London</p>
						</a>
					</td>
				</tr>
				<tr>
					<td>
						<a href="#!">
							<h5>Production Designer</h5>
							<p>Create, collect, and distribute beautiful assets.</p>
						</a>
					</td>
					<td>
						<a href="#!">
							<p>Consulting</p>
						</a>
					</td>
					<td>
						<a href="#!">
							<p>Paris</p>
						</a>
					</td>
				</tr>
			</tbody>
		</table>
	);
};

export default table;
