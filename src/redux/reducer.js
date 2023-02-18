import React from "react";
import {
  LOAD_USERS_START,
  LOAD_USERS_SUCCESS,
  LOAD_USERS_ERROR,
} from "./actionTypes";
const initialState = {
  users: [],
  loading: false,
  error: null,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_USERS_START:
      return { ...state, loading: true };
    case LOAD_USERS_SUCCESS:
      return { ...state, loading: false, users: action.payload };
    case LOAD_USERS_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default usersReducer;
