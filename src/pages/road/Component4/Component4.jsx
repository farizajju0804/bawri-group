import React from 'react'
import '../Component4/Component4.css'
import left from '../assets/left3.png'
import middle from '../assets/roadbg.png'
import right from '../assets/right3.png'
import { Link } from 'react-router-dom'
const Component4 = () => {
  return (
    <div className='road-Component4-div child'>
    <Link to="/thaella" className='link'>

    <img className='road-Component4-left' src={left}/>
    </Link>
    <img className='road-Component4-middle' src={middle}/>
    <Link to="/retail">
    <img className='road-Component4-right' src={right}/>
    </Link>
    </div>
  )
}

export default Component4