import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from './../reducers/root_reducer';

const middlewares = [thunk];

// if (process.env.NODE_ENV !== 'production') {
  // must use 'require' (import only allowed at top of file)
  // const {createLogger} = require('redux-logger');
  // middlewares.push(createLogger());
// }

const configureStore = (preloadedState = {}) => (
  createStore(
    rootReducer,
    preloadedState,
    // applyMiddleware(...middlewares)
    applyMiddleware(thunk, logger)
  )
);

export default configureStore;
