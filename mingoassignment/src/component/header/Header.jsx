import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../../public/logoImg/logo.png'
import group from '../../../public/logoImg/Group.png'
import profile from '../../../public/logoImg/profile.png'
import menu from '../../../public/logoImg/menu.png'
import profileAfterLogin from '../../../public/logoImg/profileAfterLogin.png'
import './header.css'
import { useAuth } from '../../contexts/AuthContext'


function Header() {
  const[toggleHeaderProfile, setToggleHeaderProfile]=useState(false)
  const [userImage, setUserImage]  =  useState(profile);
    const toggleProfileIcon=()=>{
        setToggleHeaderProfile((prev)=>!prev)
    }

    const { isUserLoggedIn , enableLogout } = useAuth();

  useEffect(()=>{
    if(isUserLoggedIn){
      setUserImage(prev=> profileAfterLogin);
    }
    if(!isUserLoggedIn){
      setUserImage(prev=> profile);
    }
  }, [isUserLoggedIn])


  return (
    <div className='header'>
        <Link to='/'><img src={logo} alt="logo" /></Link>
        {
          isUserLoggedIn &&
          <button><img src={menu} alt="" /></button>
        }
        <div className='header-right'>
          <div className='goback'>
          <p>Monday, Jan 12th, 10:30 AM</p>
        <Link to='/'>go back to Home Page <img src="" alt="" /></Link>
          </div>
      
        <div className='profileicon' onClick={toggleProfileIcon}><img src={userImage} alt="" />
        {
          toggleHeaderProfile && <div className='profileclick'>
           { !isUserLoggedIn && <Link  to='/signin'>sign in</Link>}
           {isUserLoggedIn && <Link to='profile'>Profile</Link>}
           {isUserLoggedIn && <Link to='faq'>FAQ</Link>}
           {isUserLoggedIn && <Link to='Dashboard' >User Dashboard</Link>}
           { isUserLoggedIn && <Link to='signout' onClick={enableLogout}>Log out</Link>}
          </div>
        }
        </div>
        </div>
    </div>
  )
}
export default Header