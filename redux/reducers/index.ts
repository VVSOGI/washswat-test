import { combineReducers } from "redux";
import { request } from "./request";

const Reducers = combineReducers({
  requestState: request,
});

export default Reducers;
