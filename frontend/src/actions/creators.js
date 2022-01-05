import axios from "axios";
import { loginUser, receiveError, resetError } from "./actionUtils";

export const login = (requser) => {
  return async (dispatch) => {
    try {
      dispatch(resetError());
      const response = await axios.post("/api/login", requser);
      console.log(response.data);
      const { token, user } = response.data;
      return dispatch(loginUser(token, user));
    } catch (err) {
      return dispatch(receiveError(err.response.data.msg));
    }
  };
};
