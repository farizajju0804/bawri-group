import React from 'react'
import '../Component7/Component7.css'
import left from '../assets/left6.png'
import middle from '../assets/roadbg.png'
import right from '../assets/right6.png'
import { Link } from 'react-router-dom'
const Component7 = () => {
  return (
    <div className='road-Component7-div child'>
    <Link to="/thaella" className='link'>

    <img className='road-Component7-left' src={left}/>
    </Link>
    <img className='road-Component7-middle' src={middle}/>
    <Link to="/antiques">
    <img className='road-Component7-right' src={right}/>
    </Link>
    </div>
  )
}

export default Component7