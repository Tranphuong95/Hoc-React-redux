import React, { useEffect, useState } from 'react'
import { connect, useDispatch, useSelector } from 'react-redux';
import { addUser, updateUser} from '../../actions/users';

const FormUser = (props) => {
  const [userInfor, setUserInfor]=useState({username: "", phone: ""});
  const {user, success}=useSelector(state=>state.userReducers);
  console.log("success", success)
  useEffect(()=>{
    if(success){
      setUserInfor(user)
    }
  }, [success])
  const dispatch=useDispatch();
  const handleChange=(e)=>{
    // const {target: {name, value}}=e;
    const {name, value}=e.target;
    setUserInfor({...userInfor, [name]: value})
  }
  const handleSubmit=(e)=>{
    // dispatch(addUser(userInfor))
    if(props.isEdit){
      dispatch(updateUser(userInfor))
    }else{

      dispatch(addUser(userInfor))
    }
  }
  return (
    <div>
      <h3>{props.isEdit?"Cập nhật":"Thêm users"}</h3>
      <form >
        <label>Tên</label><br/>
        <input name="username" value={userInfor.username} onChange={handleChange}/><br/>
        <label>Điện thoại</label><br/>
        <input name="phone" value={userInfor.phone} onChange={handleChange}/><br/>
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