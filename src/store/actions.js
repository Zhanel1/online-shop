import { REGISTER, LOGIN } from "./types";

export const setRegisterReponse = (payload) => ({
  type: REGISTER,
  payload: payload,
});
export const setLoginResponse = (payload) => ({
  type: LOGIN,
  payload: payload,
});
