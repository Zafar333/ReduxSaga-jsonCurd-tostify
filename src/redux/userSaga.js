import {
  CREATE_USER_START,
  DELETE_USER_STATRT,
  LOAD_USERS_ERROR,
  LOAD_USERS_START,
  LOAD_USERS_SUCCESS,
  UPDATE_USER_START,
} from "./actionTypes";
import {
  loadUsersError,
  loadUsersSuccess,
  loadUserStart,
  createUsersError,
  createUsersSuccess,
  createUsersStart,
  deleteUsersSuccess,
  deleteUsersError,
  updateUsersSuccess,
  updateUsersError,
} from "./actions";
import {
  loadUsersApi,
  createUsersApi,
  deleteUsersApi,
  updateUsersApi,
} from "./api";
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
function* onLoadUsers() {
  yield takeEvery(LOAD_USERS_START, onLoadUserStartAsynch);
}
function* onupdateUsers() {
  yield takeEvery(UPDATE_USER_START, onupdateUserStartAsynch);
}

export function* onCreateUsers() {
  yield takeEvery(CREATE_USER_START, onCreateUserStartAsynch);
}
function* onDeleteUsers() {
  const { payload: userid } = yield take(DELETE_USER_STATRT);
  yield call(onDeleteUsersStartAsync, userid);
}
function* onDeleteUsersStartAsync(userid) {
  try {
    const response = yield call(deleteUsersApi, userid);
    if (response.status === 200) {
      yield delay(500);
      console.log("dlete response", userid);
      yield put(deleteUsersSuccess(userid));
    }
  } catch (error) {
    yield put(deleteUsersError(error.message));
  }
}
function* onLoadUserStartAsynch() {
  try {
    const response = yield call(loadUsersApi);

    if (response.status === 200) {
      delay(500);
      yield put(loadUsersSuccess(response.data));
    }
  } catch (error) {
    yield put(loadUsersError(error.message));
  }
}

function* onCreateUserStartAsynch({ payload }) {
  try {
    const response = yield call(createUsersApi, payload);

    if (response.status === 201) {
      console.log("res saga", response);

      yield put(createUsersSuccess(response.data));
    }
  } catch (error) {
    yield put(createUsersError(error.message));
  }
}
function* onupdateUserStartAsynch({ payload: { id, formvalue } }) {
  try {
    const response = yield call(updateUsersApi, id, formvalue);
    if (response.status === 200) {
      yield put(updateUsersSuccess());
    }
  } catch (error) {
    yield put(updateUsersError(error.response.data));
  }
}
const userSaga = [
  fork(onLoadUsers),
  fork(onCreateUsers),
  fork(onDeleteUsers),
  fork(onupdateUsers),
];
function* rootSaga() {
  yield all([...userSaga]);
}
export default rootSaga;
