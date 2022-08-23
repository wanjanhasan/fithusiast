import React, { useState} from 'react'
import {RiMenu3LIne, RiCloseLin, RiCloseLine, RiMenu3Line} from 'react-icons/ri'
import logo from '../../assets/logo.png'
import './workoutplans.css'
import { Link } from 'react-router-dom'



const Workoutplans = () => {
  return (
    <div>
      <div className='plans'>
        <h2 className='plans__title'>Muscle Building</h2>
        <div className='plan_desc'>
          <span className='plan_desc-text'>Let's make some gains!</span>
          <Link to='/plans/musclebuild'><button>Build muscle</button></Link> 
        </div>
        <h2 className='plans__title'>Lose Weight</h2>
        <div className='plan_desc'>
          <span className='plan_desc-text'>Let's burn some calories!</span>
          <Link to='/plans/weightloss'><button>Lose Weight</button></Link>
        </div>
        <h2 className='plans__title'>Beginner</h2>
        <div className='plan_desc'>
          <span className='plan_desc-text'>Let's start the fitness journey!</span>
          <Link to='/plans/beginner'><button>Beginner</button></Link>
        </div>
        <h2 className='plans__title'>Advanced</h2>
        <div className='plan_desc'>
          <span className='plan_desc-text'>Let's keep going!</span>
          <Link to='/plans/advanced'><button>Advanced</button></Link>
        </div>
      </div>
    </div>
  )
}

export default Workoutplans