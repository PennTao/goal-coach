import { SIGN_IN } from '../constants';

export const logUser = (email) => {
  const action = {
    type: SIGN_IN,
    email
  }
  return action;
}
