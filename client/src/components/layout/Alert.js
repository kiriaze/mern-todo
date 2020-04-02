import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// @todo
// - either add styling, or incorporate an external component like toasters/alerts/dialogs/notifcations
// - move to ui

const Alert = ({ alerts }) =>
	alerts !== null &&
	alerts.length > 0 &&
	alerts.map(alert => (
		<div key={alert.id} className={`alert alert-${alert.alertType}`}>
			{alert.msg}
		</div>
	));

Alert.propTypes = {
	alerts: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
	alerts: state.alert
});

export default connect(mapStateToProps)(Alert);
