import React from 'react'
import './Hero.css'
import {Link} from 'react-router-dom'

function Hero() {
  return (
    <div className='hero'>
        <div className='hero-contain'>
            <h1 className='hero-heading'>New Properties</h1>
            <p className='hero-para'>EXCLUSIVELY BT VINIYAS</p>
            <br/>
            <Link to='/all'><button className='hero-btn'>Explore</button></Link>

        </div>
    </div>
  )
}

export default Hero