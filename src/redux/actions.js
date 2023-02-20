import React from "react";
import {
  LOAD_USERS_START,
  LOAD_USERS_SUCCESS,
  LOAD_USERS_ERROR,
  CREATE_USER_ERROR,
  CREATE_USER_SUCCESS,
  CREATE_USER_START,
  DELETE_USER_STATRT,
  DELETE_USER_SUCCESS,
  DELETE_USER_ERROR,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_START,
  UPDATE_USER_ERROR,
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

export const deleteUsersStart = (userid) => ({
  type: DELETE_USER_STATRT,
  payload: userid,
});
export const deleteUsersSuccess = (userid) => ({
  type: DELETE_USER_SUCCESS,
  payload: userid,
});
export const deleteUsersError = (error) => ({
  type: DELETE_USER_ERROR,
  payload: error,
});

export const updateUsersStart = (userinfo) => ({
  type: UPDATE_USER_START,
  payload: userinfo,
});
export const updateUsersSuccess = (userinfo) => ({
  type: UPDATE_USER_SUCCESS,
});
export const updateUsersError = (userinfo) => ({
  type: UPDATE_USER_ERROR,
  payload: userinfo,
});
