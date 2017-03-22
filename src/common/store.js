import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import createLogger from 'redux-logger';
import reducers from './rootReducer.js';

const logger = createLogger();

const createStoreWithMiddleware = applyMiddleware(
    reduxThunk
    ,logger 
)(createStore);

const store = createStoreWithMiddleware(reducers);
export default store;