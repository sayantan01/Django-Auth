import {
  LOGIN_USER,
  LOGOUT_USER,
  RECEIVE_ERROR,
  RESET_ERROR,
} from "../actions/actionUtils";

const initialState = {
  token: null,
  userName: "",
  email: "",
  msg: "",
};

function reducer(state = initialState, action) {
  Object.freeze(state);
  switch (action.type) {
    case LOGIN_USER:
      const obj = {
        ...state,
        token: action.token,
        userName: action.username,
        email: action.email,
        msg: "",
      };
      return obj;

    case LOGOUT_USER:
      return initialState;

    case RECEIVE_ERROR:
      return {
        ...state,
        msg: action.msg,
      };

    case RESET_ERROR:
      return {
        ...state,
        msg: "",
      };

    default:
      return state;
  }
}

export default reducer;
