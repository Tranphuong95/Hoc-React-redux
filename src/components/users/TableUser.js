import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteUser, getUser} from '../../actions/users';

const TableUser = (props) => {
  const dispatch=useDispatch();
  const {usersData=[], loading, success}=useSelector(state=>state.userReducers);
  const handleDelete=(id)=>{
    dispatch(deleteUser(id))
  };
  const handleShowData=(id)=>{
    if(props.setIsEdit){
      props.setIsEdit(true)
    }
    dispatch(getUser(id))
  };
  console.log("usersData", usersData)
  return (
    <div>
      <h3>TableUser</h3>
      <table>
        <thead>
          <tr>
            <th>Tên</th>
            <th>Phone</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(usersData) && usersData.map((user, index)=>(
            <tr key={index}>
              <td>{user.username}</td>
              <td>{user.phone}</td>
              <td>{user.email}</td>
              <td onClick={()=>handleDelete(user.id)} style={{cursor: "pointer"}}>Xoa</td>
              <td onClick={()=>handleShowData(user.id)} style={{cursor: "pointer"}}>Sửa</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default TableUser