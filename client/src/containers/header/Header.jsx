import React from 'react'
import './header.css'
import runningman from '../../assets/runningman.jpg'

const Header = () => {
  return (
    <div className='fithusiast__header section__padding' id='home'>
        <div className='fithusiast__header-content'>
          <h1 className='gradient__text'>Track Your Fitness Journey with Fithusiast</h1>


          <p><strong>Fithusiast</strong> helps you track your fitness progress and cuts off hours of calculation, research time and reading nutrition labels of foods that properly matches your fitness goals </p>
        </div>

        <div className='fithusiast__header-image'>
          <img src={runningman} alt='Male Runner' />
        </div>
    </div>
  )
}

export default Header