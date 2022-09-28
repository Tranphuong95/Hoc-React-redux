import * as Type from "./../contants";
const initialState = {
  usersData: [],
  loading: false,
  success: false,
};
const UserReducers = (state = initialState, action) => {
  console.log("actiopn", action);
  switch (action.type) {
    case Type.ADD_USER:
    case Type.DELETE_USER:
      return { ...state, loading: true };
    case Type.ADD_USER_SUCCESS:
      const { usersData } = state;
      usersData.push(action.payload);
      return {
        ...state,
        loading: false,
        success: true,
        usersData,
      };
    case Type.ADD_USER_FAIL:
    case Type.DELETE_USER_FAIL:
      return { ...state, loading: true };
    case Type.DELETE_USER_SUCCESS:
      const newData=state.usersData.filter((f) => f.id !== action.payload)
      console.log("newDataa", newData)
      return {
        ...state,
        loading: false,
        success: true,
        usersData: newData,
      };
    default:
      return state;
  }
};
export default UserReducers;
