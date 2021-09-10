import { accessToken } from "../../utils/constants";
import { LOGGED_IN, LOGIN_ERROR } from "../actionTypes";

export default function authReducer(
  state = localStorage.getItem(accessToken) !== null,
  action = {}
) {
  switch (action.type) {
    case LOGGED_IN:
      return action.payload;
    case LOGIN_ERROR:
      return { ...action.error };
    default:
      return state;
  }
}
