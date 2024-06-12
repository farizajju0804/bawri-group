import React from 'react'
import '../Component6/Component6.css'
import nagaland from '../assets/nagaland.jpg'
const Component6 = () => {
  return (
    <div className='idea-Component6-div'>
        <div className='idea-Component6-heading'>
            <img src={nagaland} className='idea-Component6-heading-img'/>
            <p className='idea-Component6-heading-content'>IDEOPEDIA</p>
        </div>
        <div className='idea-Component6-time'>
          <p className='idea-since'>
              Since
          </p>
          <p className='idea-year'>
              2012
          </p>
        </div>
    </div>
  )
}

export default Component6