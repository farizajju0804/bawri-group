import React from 'react'
import '../Component6/Component6.css'
import left from '../assets/left5.png'
import middle from '../assets/roadbg.png'
import right from '../assets/right5.png'
import { Link } from 'react-router-dom'
const Component6 = () => {
  return (
    <div className='road-Component6-div child'>
    <Link to="/resin" className='link'>

    <img className='road-Component6-left' src={left}/>
    </Link>
    <img className='road-Component6-middle' src={middle}/>
    <Link to="/quantta">
    <img className='road-Component6-right' src={right}/>
    </Link>
    </div>
  )
}

export default Component6