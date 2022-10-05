import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteUser } from '../../actions/users';

const TableUser = (props) => {
  const dispatch=useDispatch();
  const {usersData, loading, success}=useSelector(state=>state.userReducers);
  const handleDelete=(id)=>{
    dispatch(deleteUser(id))
  }
  return (
    <div>
      <h3>TableUser</h3>
      <table>
        <thead>
          <tr>
            <th>FirstName</th>
            <th>Last Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {usersData.map((user, index)=>(
            <tr key={index}>
              <td>{user.first_name}</td>
              <td>{user.last_name}</td>
              <td>{user.email}</td>
              <td onClick={()=>handleDelete(user.id)} style={{cursor: "pointer"}}>Xoa</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default TableUser