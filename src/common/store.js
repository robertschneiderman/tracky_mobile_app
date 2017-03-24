import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import createLogger from 'redux-logger';
import reducers from './rootReducer.js';
import todayMiddleware from '../pages/today/redux/middleware';

const logger = createLogger();

const createStoreWithMiddleware = applyMiddleware(
    reduxThunk
    ,logger 
  ,todayMiddleware
)(createStore);

const store = createStoreWithMiddleware(reducers);
export default store;