import * as Type from "./../contants";
const initialState = {
  usersData: [],
  user: {},
  loading: false,
  success: false,
};
const UserReducers = (state = initialState, action) => {
  console.log("actiopn", action);
  switch (action.type) {
    case Type.ADD_USER:
    case Type.GET_USER:
    case Type.UPDATE_USER:
    case Type.DELETE_USER:
      return { ...state, loading: true, success: false };
    case Type.ADD_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        usersData: state.usersData?.concat(action.payload),
      };
    case Type.GET_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        user: action.payload,
      };
    case Type.UPDATE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        usersData: state.usersData.map((elm) => {
          if (elm.id === action.payload.id) {
            return {...action.payload, note: "update thành công"};
          }
          return elm;
        }),
      };
    case Type.ADD_USER_FAIL:
    case Type.GET_USER_FAIL:
    case Type.UPDATE_USER_FAIL:
    case Type.DELETE_USER_FAIL:
      return { ...state, loading: true, success: false };
    case Type.DELETE_USER_SUCCESS:
      const newData = state.usersData.filter((f) => f.id !== action.payload);
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
