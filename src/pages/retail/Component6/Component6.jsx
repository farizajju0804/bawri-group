import React from 'react'
import '../Component6/Component6.css'
import nagaland from '../assets/nagaland.jpg'
const Component6 = () => {
  return (
    <div className='retail-Component6-div'>
        <div className='retail-Component6-heading'>
            <img src={nagaland} className='retail-Component6-heading-img'/>
            <p className='retail-Component6-heading-content'>pridenprecious</p>
        </div>
        <div className='retail-Component6-time'>
          <p className='retail-since'>
              Since
          </p>
          <p className='retail-year'>
              2002
          </p>
        </div>
    </div>
  )
}

export default Component6