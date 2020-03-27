import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'; // middleware
import rootReducer from './reducers';

const initialState = {};

const middleware = [thunk];

// creates global store containing reducers, state abd middleware (wrapped with devtools to be accessible in inspector)
const store = createStore(
	rootReducer,
	initialState,
	composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
