import * as TYPE from "./../contants";
import { v4 as uuidv4 } from 'uuid';
export const addUser=(data)=>(dispatch)=>{
    dispatch({
        type: TYPE.ADD_USER
    })
    return Promise.resolve()
    .then(res=>{
        dispatch({
            type: TYPE.ADD_USER_SUCCESS,
            payload: {...data, id: uuidv4()}
        })
    })
    .catch((err)=>{
        dispatch({
            type: TYPE.ADD_USER_FAIL
        })
    })
};

export const deleteUser=(data)=>(dispatch)=>{
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