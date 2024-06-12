import React from 'react'
import '../Component6/Component6.css'
import nagaland from '../assets/nagaland.jpg'
const Component6 = () => {
  return (
    <div className='quantta-Component6-div'>
        <div className='quantta-Component6-heading'>
            <img src={nagaland} className='quantta-Component6-heading-img'/>
            <p className='quantta-Component6-heading-content'>quantta </p>
        </div>
        <div className='quantta-Component6-time'>
          <p className='quantta-since'>
              Since
          </p>
          <p className='quantta-year'>
              2012
          </p>
        </div>
    </div>
  )
}

export default Component6