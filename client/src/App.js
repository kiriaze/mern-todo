import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Routes from './components/routing/Routes';

// Redux
// this is what connects the two, by wrapping the App with Provider, that way all our components can access app level state
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';

import './App.css';

/////////////////////////////////////////////////////
// Notes:
// - Styled-components might be the way to go, with a lightweight framework as the foundation; think utility helpers and base styles - and then build upon with SC, could also import components when needed from other libraries/sources instead of writing from scratch. e.g. modals

// tailwind + styled-components (best custom; requires the npm package for the best experience instead of cdn css version)
// rebassjs - react components for layout with props (interesting)
// basscss - atomic lass based css library + styled components (simple)
// bulma - quick prototype css classes (bootsrapish)
// chakra - quick prototype + react

// components needed (can import standalone): calendar, drag/drop, toasters, alerts, notifications, tags, badges, search dropdown filters, tables, corner dialogs,

// style types: Evergreen, ChakraUi(toasts)
/////////////////////////////////////////////////////

// check if token, set in global header
if (localStorage.token) {
	setAuthToken(localStorage.token);
}

const App = () => {
	useEffect(() => {
		store.dispatch(loadUser());
	}, []);

	return (
		<Provider store={store}>
			<Router>
				<Fragment>
					<Navbar />
					<Switch>
						<Route exact path="/" component={Landing} />
						<Route component={Routes} />
					</Switch>
				</Fragment>
			</Router>
		</Provider>
	);
};

export default App;
