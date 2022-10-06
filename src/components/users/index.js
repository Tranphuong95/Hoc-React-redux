import React, { useState } from 'react'
import FormUser from './FormUser'
import TableUser from './TableUser'

const UsersComponent = () => {
  const [isEdit, setIsEdit]=useState(false);
  return (
    <div>
        <h3>Quản lý users</h3>
        <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
            <div style={{width: "70%"}}><TableUser setIsEdit={setIsEdit}/></div>
            <div style={{width: "30%"}}><FormUser isEdit={isEdit}/></div>
        </div>
    </div>
  )
}
export default UsersComponent