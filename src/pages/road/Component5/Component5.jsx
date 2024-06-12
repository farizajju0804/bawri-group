import React from 'react'
import '../Component5/Component5.css'
import left from '../assets/left4.png'
import middle from '../assets/roadbg.png'
import right from '../assets/right4.png'
import { Link } from 'react-router-dom'
const Component5 = () => {
  return (
    <div className='road-Component5-div child'>
    <Link to="/diduce" className='link'>

    <img className='road-Component5-left' src={left}/>
    </Link>
    <img className='road-Component5-middle' src={middle}/>
    <Link to="/cijen">
    <img className='road-Component5-right' src={right}/>
    </Link>
    </div>
  )
}

export default Component5