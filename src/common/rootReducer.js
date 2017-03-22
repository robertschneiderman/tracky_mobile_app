import { combineReducers } from 'redux';
import authReducer from '../pages/auth/redux/reducer';
// import { reducer as form } from 'redux-form';

const rootReducer = combineReducers({
  auth: authReducer,
});

export default rootReducer;
