import {
  CREATE_USER_START,
  LOAD_USERS_ERROR,
  LOAD_USERS_START,
  LOAD_USERS_SUCCESS,
} from "./actionTypes";
import {
  loadUsersError,
  loadUsersSuccess,
  loadUserStart,
  createUsersError,
  createUsersSuccess,
  createUsersStart,
} from "./actions";
import { loadUsersApi, createUsersApi } from "./api";
import {
  put,
  call,
  all,
  delay,
  fork,
  take,
  takeEvery,
  takeLatest,
} from "redux-saga/effects";
export function* onLoadUsers() {
  yield takeEvery(LOAD_USERS_START, onLoadUserStartAsynch);
}
export function* onCreateUsers() {
  yield takeEvery(CREATE_USER_START, onCreateUserStartAsynch);
}
export function* onLoadUserStartAsynch() {
  try {
    const response = yield call(loadUsersApi);

    if (response.status === 200) {
      console.log("res saga", response);
      delay(500);
      yield put(loadUsersSuccess(response.data));
    }
  } catch (error) {
    yield put(loadUsersError(error.message));
  }
}
export function* onCreateUserStartAsynch({ payload }) {
  try {
    const response = yield call(createUsersApi, payload);
    console.log("fhsgffhjgs", response);
    if (response.status === 201) {
      console.log("res saga", response);

      yield put(createUsersSuccess(response.data));
    }
  } catch (error) {
    yield put(createUsersError(error.message));
  }
}
const userSaga = [fork(onLoadUsers), fork(onCreateUsers)];
function* rootSaga() {
  yield all([...userSaga]);
}
export default rootSaga;
