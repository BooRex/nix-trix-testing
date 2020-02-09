import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  user: userReducer,
  task: taskReducer,
});

export default rootReducer;
