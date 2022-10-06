import { call, put, takeLatest } from "redux-saga/effects";
import {
  addUserFail,
  addUserSuccess,
  getUserFail,
  getUserSuccess,
  updateUserFail,
  updateUserSuccess,
} from "./../actions/users";
import * as Type from "../contants";
/**
 * Vào trang  https://fakestoreapi.com/docs để xem các api
 */
//Sau khi nhận đươc action ADD_USER sẽ tiến hành gọi hàm addUserSaga
function* addUserSaga(action) {
  try {
    //POST user data
    const results = yield call(async () => {
      return await fetch("https://fakestoreapi.com/users", {
        method: "POST",
        body: JSON.stringify(action.payload),
      })
        .then((res) => res.json())
        .then((res) => res);
    });
    //POST user data success-->get data user
    if (results.id) {
      const datas = yield call(async () => {
        return await fetch(`https://fakestoreapi.com/users/${results.id}`, {
          method: "GET",
        })
          .then((res) => res.json())
          .then((res) => res);
      });
      console.log("datas", datas);
      //get data success-->put data to reducer-->add to store
      if (datas?.id) {
        yield put(addUserSuccess(datas));
      }else{
        yield put(addUserFail);
      }
    } else {
      yield put(addUserFail);
    }
  } catch (error) {
    console.log(error);
    yield put(addUserFail);
  }
}
function* getUserSaga(action) {
  try {
    const results = yield call(async () => {
      return await fetch(`https://fakestoreapi.com/users/${action.payload}`, {
        method: "GET",
      })
        .then((res) => res.json())
        .then((res) => res);
    });
    console.log("result", results);
    if (results?.id) {
      yield put(getUserSuccess(results));
    } else {
      yield put(getUserFail);
    }
  } catch (error) {
    console.log(error);
    yield put(getUserFail);
  }
}
function* updateUserSaga(action) {
  try {
    const results = yield call(async () => {
      return await fetch(`https://fakestoreapi.com/users/${action.payload.id}`, {
        method: "PUT",
        body: JSON.stringify(action.payload),
      })
        .then((res) => res.json())
        .then((res) => res);
    });
    if (results?.id) {
      const datas = yield call(async () => {
        return await fetch(`https://fakestoreapi.com/users/${results.id}`, {
          method: "GET",
        })
          .then((res) => res.json())
          .then((res) => res);
      });
      yield put(updateUserSuccess(datas));
    } else {
      yield put(updateUserFail);
    }
  } catch (error) {
    console.log(error);
    yield put(addUserFail);
  }
}
//get user
function* UsersSaga() {
  yield takeLatest(Type.ADD_USER, addUserSaga);
  yield takeLatest(Type.GET_USER, getUserSaga);
  yield takeLatest(Type.UPDATE_USER, updateUserSaga);
}

export default UsersSaga;
