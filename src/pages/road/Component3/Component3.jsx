import React from 'react'
import '../Component3/Component3.css'
import left from '../assets/left2.png'
import middle from '../assets/roadbg.png'
import right from '../assets/right2.png'
import { Link } from 'react-router-dom'
const Component3 = () => {
  return (
    <div className='road-Component3-div child'>
    <Link to="/thaella" className='link'>

    <img className='road-Component3-left' src={left}/>
    </Link>
    <img className='road-Component3-middle' src={middle}/>
    <Link to="/plywood">
    <img className='road-Component3-right' src={right}/>
    </Link>
    </div>
  )
}

export default Component3