import React from 'react'
import '../Component6/Component6.css'
import nagaland from '../assets/nagaland.jpg'
const Component6 = () => {
  return (
    <div className='resin-Component6-div'>
        <div className='resin-Component6-heading'>
            <img src={nagaland} className='resin-Component6-heading-img'/>
            <p className='resin-Component6-heading-content'>oleo resin </p>
        </div>
        <div className='resin-Component6-time'>
          <p className='resin-since'>
              Since
          </p>
          <p className='resin-year'>
              1998
          </p>
        </div>
    </div>
  )
}

export default Component6