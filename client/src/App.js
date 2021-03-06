import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Landing from './components/layout/Landing';
import Routes from './components/routing/Routes';

// Redux
// this is what connects the two, by wrapping the App with Provider, that way all our components can access app level state
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';

// should these live within the root index.js instead and wrapped around <App />?
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from './theme';
//

import './App.scss';

// check if token, set in global header
if (localStorage.token) {
	setAuthToken(localStorage.token);
}

const App = () => {
	useEffect(() => {
		store.dispatch(loadUser());
	}, []);

	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<Provider store={store}>
				<Router>
					<Fragment>
						<Navbar />
						<Switch>
							<Route exact path="/" component={Landing} />
							<Route component={Routes} />
						</Switch>
						<Footer />
					</Fragment>
				</Router>
			</Provider>
		</ThemeProvider>
	);
};

export default App;
