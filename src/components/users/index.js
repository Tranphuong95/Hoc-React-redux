import React from 'react'
import FormUser from './FormUser'
import TableUser from './TableUser'

const UsersComponent = () => {
  return (
    <div>
        <h3>Quản lý users</h3>
        <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
            <div style={{width: "70%"}}><TableUser/></div>
            <div style={{width: "30%"}}><FormUser/></div>
        </div>
    </div>
  )
}
export default UsersComponent