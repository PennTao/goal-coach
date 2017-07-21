import { SIGN_IN, SET_GOALS, SET_COMPLETE_GOALS } from '../constants';

export const logUser = (email) => {
  const action = {
    type: SIGN_IN,
    email
  }
  return action;
}

export const setGoals = (goals) => {
  const action = {
    type: SET_GOALS,
    goals
  }
  return action;
}

export const setCompleteGoals = (completeGoals) => {
  const action = {
    type: SET_COMPLETE_GOALS,
    completeGoals
  }
  return action;
}
