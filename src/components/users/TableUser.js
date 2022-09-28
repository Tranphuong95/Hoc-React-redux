import React from 'react'
import { useSelector } from 'react-redux'
import { deleteUser } from '../../actions/users';

const TableUser = (props) => {
  const {usersData, loading, success}=useSelector(state=>state.userReducers);
  const handleDelete=(id)=>{
    deleteUser(id)
  }
  return (
    <div>
      <h3>TableUser</h3>
      <table>
        <thead>
          <tr>
            <th>Tên</th>
            <th>Ngày sinh</th>
            <th>giới tính</th>
          </tr>
        </thead>
        <tbody>
          {usersData.map((user, index)=>(
            <tr key={index}>
              <td>{user.userName}</td>
              <td>{user.date}</td>
              <td>{user.gen===1?"nam": "nu"}</td>
              <td onClick={()=>handleDelete(user.id)} style={{cursor: "pointer"}}>Xoa</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default TableUser