import React from 'react'
import { useSelector } from 'react-redux'
import { userReducer } from '../../redux/reducers/userReducer';
import { render } from '@testing-library/react';
import { NavLink } from 'react-router-dom';
import { userLocalService } from '../../service/localService';

export default function UserNav() {
  const user = useSelector((state) => {
    return state.userSlice.user
  });

  const handleLogout = () => { 
    userLocalService.remove();
    window.location.reload()
  }

  const renderContent = () => { 
    if(user) {
      return (<>
          <span>{user?.hoTen}</span>
          <button onClick={handleLogout} className=' border-2 rounded border-black px-4 py-1'>Đăng xuất</button>
        </>)
     
    } else {
      return (
        <>
          <NavLink to={"/login"}>
            <button className='rounded border-black px-5 py-2'>Đăng nhập</button>
          </NavLink>
          <button className='rounded border-black px-5 py-2'>Đăng kí</button>
        </>
      )
    }
  }
  return (
    <div className='space-x-3'>{renderContent()}</div>
  ) 
}
