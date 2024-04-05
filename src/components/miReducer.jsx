import { types } from './Types';

const miReducer = (state, action) => {
  switch (action.type) {
    case types.login:
      return { ...state, logeado: true };
    case types.logout:
      return { ...state, logeado: false };
    default:
      return state;
  }
};

export default miReducer;