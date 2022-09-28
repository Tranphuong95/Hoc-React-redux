import React, { useState } from 'react'
import { connect, useDispatch } from 'react-redux';
import { addUser } from '../../actions/users';

const FormUser = (props) => {
  const [userInfor, setUserInfor]=useState({userName: "", date: "", gen: 1});
  const dispatch=useDispatch();
  const handleChange=(e)=>{
    // const {target: {name, value}}=e;
    const {name, value}=e.target;
    setUserInfor({...userInfor, [name]: value})
  }
  const handleSubmit=(e)=>{
    dispatch(props.addUser(userInfor))
  }
  console.log("userInfor", userInfor)
  return (
    <div>
      <h3>Thêm users</h3>
      <form >
        <label>Tên</label><br/>
        <input name="userName" value={userInfor.userName} onChange={handleChange}/><br/>
        <label>ngày sinh</label><br/>
        <input name="date" value={userInfor.date} onChange={handleChange}/><br/>
        <label>Giới</label><br/>
        <select name="gen" value={userInfor.gen} onChange={handleChange}>
          <option value={1}>Nam</option>
          <option value={2}>Nữ</option>
        </select>
        <button type="button" onClick={handleSubmit}>Lưu</button>
      </form>
    </div>
  )
}
const mapStateToProps = (state) => {
  console.log(state)
  return {
      users: state.userReducers.usersData,
      loading:  state.userReducers.loading
  }
}
const mapDispatchToProps = {
 addUser
}

export default connect(mapStateToProps, mapDispatchToProps)(FormUser)