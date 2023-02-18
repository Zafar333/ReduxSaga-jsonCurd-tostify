import React from "react";
import {
  LOAD_USERS_START,
  LOAD_USERS_SUCCESS,
  LOAD_USERS_ERROR,
} from "./actionTypes";

export const loadUsersStart = () => ({
  type: LOAD_USERS_START,
});

export const loadUsersSuccess = (users) => ({
  type: LOAD_USERS_SUCCESS,
  payload: users,
});

export const loadUsersError = (error) => ({
  type: LOAD_USERS_ERROR,
  payload: error,
});
