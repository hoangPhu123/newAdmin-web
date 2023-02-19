import React from 'react'
import { NavLink } from 'react-router-dom'
import UserNav from './UserNav';


export default function Header() {
  return (
    <div className='flex px-20 py-5 shadow rounded container items-center justify-between'>
        <NavLink to={"/"}>
            <span className='text-3xl font-medium text-red-600'>CyberFlix</span>
        </NavLink>
        <UserNav/>
    </div>
  )
}
