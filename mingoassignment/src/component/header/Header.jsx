import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../../public/logoImg/logo.png'
import group from '../../../public/logoImg/Group.png'
import profile from '../../../public/logoImg/profile.png'
import './header.css'


function Header() {
  const[toggleHeaderProfile, setToggleHeaderProfile]=useState(false)
const toggleProfileIcon=()=>{
setToggleHeaderProfile((prev)=>!prev)
}

  return (
    <div className='header'>
        <Link to='/'><img src={logo} alt="logo" /></Link>
        <div className='header-right'>
          <div className='goback'>
          <p>Monday, Jan 12th, 10:30 AM</p>
        <Link to='/'>go back to Home Page <img src="" alt="" /></Link>
          </div>
      
        <div className='profileicon' onClick={toggleProfileIcon}><img src={profile} alt="" />
        {
          toggleHeaderProfile && <div className='profileclick'>
            <Link to='/signin'>sign in</Link>
            <Link to='home'>sign out</Link>
          </div>
        }
        </div>
        </div>
    </div>
  )
}
export default Header