import { all } from "redux-saga/effects";
import UsersSaga from "./saga/usersSaga";
function* rootSaga() {
  yield all([
    UsersSaga(),
  ]);
}

export default rootSaga;