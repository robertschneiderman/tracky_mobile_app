import { combineReducers } from 'redux';
import authReducer from '../pages/auth/redux/reducer';
import { reducer as form } from 'redux-form';
import todayReducer from '../pages/today/redux/reducer';

const rootReducer = combineReducers({
  auth: authReducer,
  form,
  today: todayReducer,
});

export default rootReducer;
