import React from 'react'
import '../Component2/Component2.css'
import left from '../assets/left.png'
import middle from '../assets/roadbg.png'
import right from '../assets/right.png'
import { Link } from 'react-router-dom'
const Component2 = () => {
  return (
    <div className='road-Component2-div child'>
    <Link to="/vinay" className='link'>

    <img className='road-Component2-left' src={left}/>
    </Link>
    <img className='road-Component2-middle' src={middle}/>
    <Link to="/plywood">
    <img className='road-Component2-right' src={right}/>
    </Link>
    </div>
  )
}

export default Component2