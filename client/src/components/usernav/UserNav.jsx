import React, { useState} from 'react'
import {RiMenu3LIne, RiCloseLin, RiCloseLine, RiMenu3Line} from 'react-icons/ri'
import logo from '../../assets/logo.png'
import './userNav.css'
import { Link } from 'react-router-dom'

const Menu= () => (
    <>
    <Link to='/homepage'><p><a href='#home'>Homepage</a></p></Link>
    <Link to='/activity'><p><a href='#activity'>Activitytracker</a></p></Link>
    <Link to='/articles'><p><a href='#articles'>Article</a></p></Link>
    <Link to='/diet'><p><a href='#diet'>Diet</a></p></Link>
    <Link to='/plans'><p><a href='#plans'>Workout plans</a></p></Link>
    <Link to='/groups'><p><a href='#groups'>Groups</a></p></Link>
    
    
    </>
    
  
  )

const UserNav = () => {
  return (
    <div className='fithusiast__usernav'>
      <div className='fithusiast__usernav-links'>
        <div className='fithusiast__usernav-links_logo'>
        <img src={logo} alt="logo" />
        </div>

      </div>
      <div className='fithusiast__fithusiast__usernav-menu'>
        <Menu />
      </div>
      <div className='fithusiast__usernav-sign'>
        <Link to='/'><button type='button'>Logout</button></Link>
      </div>
      
    
    </div>
  )
}

export default UserNav