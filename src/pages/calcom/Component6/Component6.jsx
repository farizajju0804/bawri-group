import React from 'react'
import '../Component6/Component6.css'
import nagaland from '../assets/nagaland.jpg'
const Component6 = () => {
  return (
    <div className='calcom-Component6-div'>
        <div className='calcom-Component6-heading'>
            <img src={nagaland} className='calcom-Component6-heading-img'/>
            <p className='calcom-Component6-heading-content'>calcom Cements </p>
        </div>
        <div className='calcom-Component6-time'>
          <p className='calcom-since'>
              Since
          </p>
          <p className='calcom-year'>
              2002
          </p>
        </div>
    </div>
  )
}

export default Component6