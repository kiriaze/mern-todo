import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './style.scss';

// custom toasters
import toaster from 'toasted-notes';
import 'toasted-notes/src/styles.css';
//

// @todo
// - either add styling within component and position fixed within an outer wrapper, or an offset from the previous alert, or incorporate an external component like toasters/alerts/dialogs/notifcations (prob better)
// https://medium.com/javascript-in-plain-english/react-custom-toast-notification-component-from-scratch-adccd1c452b8
// https://github.com/jossmac/react-toast-notifications
// https://github.com/teodosii/react-notifications-component
// - move to ui

// const Alert = ({ alerts }) =>
// 	alerts !== null &&
// 	alerts.length > 0 &&
// 	alerts.map(alert => (
// 		<div key={alert.id} className={`alert alert--${alert.alertType}`}>
// 			{alert.msg}
// 		</div>
// 	));

//
const Alert = ({ alerts }) =>
	alerts !== null &&
	alerts.length > 0 &&
	alerts.map(alert => {
		// using a render callback
		toaster.notify(
			({ onClose }) => (
				<div
					style={{
						fontSize: '1.3rem',
						fontWeight: '600',
						padding: '1.25rem 1.5rem',
						backgroundColor: 'white',
						borderLeft: '0.5rem solid royalblue',
						boxShadow:
							'rgba(67, 90, 111, 0.3) 0px 0px 1px, rgba(67, 90, 111, 0.47) 0px 8px 10px -4px',

						color: 'white',
						// // backgroundColor: '#31aa51',
						// // borderLeftColor: 'rgb(34, 138, 62)'

						backgroundColor: 'rgb(243, 54, 39)',
						borderLeftColor: 'rgb(167, 34, 24)'
					}}
				>
					<span>{alert.msg}</span>
					{/*<button
							onClick={onClose}
							style={{
								color: 'rgb(170, 170, 170)',
								// color: '#fff',
								cursor: 'pointer',
								marginLeft: '1rem',
								paddingLeft: '1rem',
								borderLeft: '.1rem solid #eee',
								backgroundColor: 'transparent'
							}}
						>
							x
						</button>*/}
				</div>
			),
			{
				position: 'bottom-left'
				// duration: null // if close button
			}
		);
	});

Alert.propTypes = {
	alerts: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
	alerts: state.alert
});

export default connect(mapStateToProps)(Alert);
