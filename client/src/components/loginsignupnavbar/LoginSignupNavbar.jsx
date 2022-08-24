import React, { useState} from 'react'
import {RiMenu3LIne, RiCloseLin, RiCloseLine, RiMenu3Line} from 'react-icons/ri'
import logo from '../../assets/logo.png'
import './loginsignupnavbar.css'
import { Link } from 'react-router-dom'


const LoginSignupNavbar = () => {
  return (
    <div className='fithusiast__navbar'>
      <div className='fithusiast__navbar-links'>
        <div className='fithusiast__navbar-links_logo'>
        <img src={logo} alt="logo" />
        </div>

      </div>
    
    </div>
  )
}

export default LoginSignupNavbar