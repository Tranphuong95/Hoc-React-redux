import * as TYPE from "./../contants";
import { v4 as uuidv4 } from 'uuid';
// export const addUser=(data)=>async(dispatch)=>{
//     dispatch({
//         type: TYPE.ADD_USER
//     })
//     return Promise.resolve()
//     .then(res=>{
//         dispatch({
//             type: TYPE.ADD_USER_SUCCESS,
//             payload: {...data, id: uuidv4()}
//         })
//     })
//     .catch((err)=>{
//         dispatch({
//             type: TYPE.ADD_USER_FAIL
//         })
//     })
// };
export const addUser=(body)=>{
    return ({
        type: TYPE.ADD_USER,
        payload: body
    })
}
export const addUserSuccess=(data)=>{
    return({
        type: TYPE.ADD_USER_SUCCESS, // Đùng với redux saga
        payload: {...data}
    })
};
export const addUserFail=()=>{
    return({
        type: TYPE.ADD_USER_FAIL, // Đùng với redux saga
    })
};

export const deleteUser=(data)=>async(dispatch)=>{
    dispatch({
        type: TYPE.DELETE_USER
    })
    return Promise.resolve()
    .then(res=>{
        dispatch({
            type: TYPE.DELETE_USER_SUCCESS,
            payload: data
        })
    })
    .catch((err)=>{
        dispatch({
            type: TYPE.DELETE_USER_FAIL
        })
    })
}
//Lấy dữ liệu đổ vào form khi click vào nút sửa
export  const getUser=(id)=>{
    return({
        type: TYPE.GET_USER,
        payload: id
    })
};
export  const getUserSuccess=(data)=>{
    return ({
        type: TYPE.GET_USER_SUCCESS,
        payload: data
    })
};
export  const getUserFail=(id)=>{
    return({
        type: TYPE.GET_USER_FAIL
    })
};

export  const updateUser=(body)=>{
    return({
        type: TYPE.UPDATE_USER,
        payload: body
    })
};
export  const updateUserSuccess=(data)=>{
    return ({
        type: TYPE.UPDATE_USER_SUCCESS,
        payload: {...data}
    })
};
export  const updateUserFail=()=>{
    return({
        type: TYPE.UPDATE_USER_FAIL
    })
};