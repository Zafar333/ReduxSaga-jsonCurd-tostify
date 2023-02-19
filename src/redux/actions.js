import React from "react";
import {
  LOAD_USERS_START,
  LOAD_USERS_SUCCESS,
  LOAD_USERS_ERROR,
  CREATE_USER_ERROR,
  CREATE_USER_SUCCESS,
  CREATE_USER_START,
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

export const createUsersStart = (user) => ({
  type: CREATE_USER_START,
  payload: user,
});
export const createUsersSuccess = () => ({
  type: CREATE_USER_SUCCESS,
});
export const createUsersError = (error) => ({
  type: CREATE_USER_ERROR,
  payload: error,
});
