import { SIGN_IN } from '../constants';

let user = {
  emial: null
}

export default (state = user, action) => {
  switch (action.type) {
    case SIGN_IN:
      console.log(action)
      const {email} = action;
      user = {
        email
      }
      return user;
    default:
    return state;
  }
}
