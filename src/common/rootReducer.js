import { combineReducers } from 'redux';
import authReducer from '../pages/auth/redux/reducer';
import { reducer as form } from 'redux-form';
// import newTaskReducer from '../pages/newTask/redux/reducer';
import taskReducer from '../data/task/reducer';
import historyReducer from '../data/history/reducer';
import todayReducer from '../pages/today/redux/reducer';
import userReducer from '../data/user/reducer';
import goalReducer from '../data/goal/reducer';
import timestampReducer from '../data/timestamp/reducer';
// import calendarReducer from '../pages/calendar/redux/reducer';
// import timestampEditorReducer from '../pages/timestampEditor/redux/reducer';


const rootReducer = combineReducers({
  auth: authReducer,
  form,  
  // newTask: newTaskReducer,
  task: taskReducer,
  history: historyReducer,
  today: todayReducer,
  user: userReducer,
  goal: goalReducer,
  timestamp: timestampReducer,
  // calendar: calendarReducer,
  // timestampEditor: timestampEditorReducer,
});

export default rootReducer;
