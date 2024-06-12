import React from 'react'
import '../Component6/Component6.css'
import nagaland from '../assets/nagaland.jpg'
const Component6 = () => {
  return (
    <div className='diduce-Component6-div'>
        <div className='diduce-Component6-heading'>
            <img src={nagaland} className='diduce-Component6-heading-img'/>
            <p className='diduce-Component6-heading-content'>diduce </p>
        </div>
        <div className='diduce-Component6-time'>
          <p className='diduce-since'>
              Since
          </p>
          <p className='diduce-year'>
              2002
          </p>
        </div>
    </div>
  )
}

export default Component6