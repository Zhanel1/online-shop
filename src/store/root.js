import { combineEpics } from "redux-observable";
import { combineReducers } from "redux";
import { authReducer } from "./auth_reducer/reducer";
import { loginEpic } from "./auth_reducer/epics";

export const rootEpic = combineEpics(loginEpic);
export const rootReducer = combineReducers({
  authReducer,
});
