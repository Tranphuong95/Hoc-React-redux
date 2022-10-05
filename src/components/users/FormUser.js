import React, { useState } from 'react'
import { connect, useDispatch } from 'react-redux';
import { addUser} from '../../actions/users';

const FormUser = (props) => {
  const [userInfor, setUserInfor]=useState({username: "", phone: ""});
  const dispatch=useDispatch();
  const handleChange=(e)=>{
    // const {target: {name, value}}=e;
    const {name, value}=e.target;
    setUserInfor({...userInfor, [name]: value})
  }
  const handleSubmit=(e)=>{
    // dispatch(addUser(userInfor))
    dispatch(addUser(userInfor))
  }
  console.log("userInfor", userInfor)
  return (
    <div>
      <h3>Thêm users</h3>
      <form >
        <label>Tên</label><br/>
        <input name="username" value={userInfor.name} onChange={handleChange}/><br/>
        <label>Điện thoại</label><br/>
        <input name="phone" value={userInfor.job} onChange={handleChange}/><br/>
        {/* <label>Giới</label><br/>
        <select name="gen" value={userInfor.gen} onChange={handleChange}>
          <option value={1}>Nam</option>
          <option value={2}>Nữ</option>
        </select> */}
        <button type="button" onClick={handleSubmit}>Lưu</button>
      </form>
    </div>
  )
}

export default FormUser