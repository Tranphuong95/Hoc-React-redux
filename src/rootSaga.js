import { all } from "redux-saga/effects";
import UsersSaga from "./actions/usersSaga";
function* rootSaga() {
  yield all([
    UsersSaga(),
  ]);
}

export default rootSaga;