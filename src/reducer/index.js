import { combineReducers } from "redux";
import UserReducers from './user.reducer';

const rootReducers = combineReducers({
    userReducers: UserReducers,
})
export default rootReducers