import { LOGIN, LOGOUT, REGISTER } from "../types";

const initialState = {
  user: null,
  isLoading: false,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        user: action.payload,
      };
    case REGISTER:
      return {
        ...state,
        isLoading: false,
      };
    case LOGOUT:
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
};
