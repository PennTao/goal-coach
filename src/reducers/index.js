import { combineReducers } from 'redux';
import user from './userReducer';
import goals from './goalReducer';
import completeGoals from './completeGoalReducer';

export default combineReducers({
  user,
  goals,
  completeGoals,
})
