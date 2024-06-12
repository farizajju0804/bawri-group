import React from 'react'
import '../Component6/Component6.css'
import nagaland from '../assets/nagaland.jpg'
const Component6 = () => {
  return (
    <div className='think-Component6-div'>
        <div className='think-Component6-heading'>
            <img src={nagaland} className='think-Component6-heading-img'/>
            <p className='think-Component6-heading-content'>THINK INDIA</p>
        </div>
        <div className='think-Component6-time'>
          <p className='think-since'>
              Since
          </p>
          <p className='think-year'>
              2012
          </p>
        </div>
    </div>
  )
}

export default Component6