import { call, put, takeLatest } from "redux-saga/effects";
import { addUserFail, addUserSuccess } from "./users";
import * as Type from "./../contants";
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
      }).then(res=>res.json()).then(res=>res);
    });
    //POST user data success-->get data user
    if (results.id) {
        const datas=yield call(async () => {
            return await fetch(`https://reqres.in/api/users/${results.id}`, {
              method: "GET",
            }).then(res=>res.json()).then(res=>res);
          });
    //get data success-->put data to reducer-->add to store          
      yield put(addUserSuccess(datas.data));
    } else {
      yield put(addUserFail);
    }
  } catch (error) {
    console.log(error)
    yield put(addUserFail);
  }
}
function* UsersSaga() {
  yield takeLatest(Type.ADD_USER, addUserSaga);
}

export default UsersSaga;
