import { combineReducers } from "redux";
import getCoinsReducer from "./getCoinsReducer";
import authReducer from "./authReducer";

export default combineReducers({
  getCoinsReducer,
  authReducer,
});
