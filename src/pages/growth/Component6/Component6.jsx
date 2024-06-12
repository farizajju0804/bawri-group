import React from 'react'
import '../Component6/Component6.css'
import nagaland from '../assets/nagaland.jpg'
const Component6 = () => {
  return (
    <div className='growth-Component6-div'>
        <div className='growth-Component6-heading'>
            <img src={nagaland} className='growth-Component6-heading-img'/>
            <p className='growth-Component6-heading-content'>THINK INDIA</p>
        </div>
        <div className='growth-Component6-time'>
          <p className='growth-since'>
              Since
          </p>
          <p className='growth-year'>
              2012
          </p>
        </div>
    </div>
  )
}

export default Component6