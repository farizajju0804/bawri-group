import React from 'react'
import '../Component6/Component6.css'
import nagaland from '../assets/nagaland.jpg'
const Component6 = () => {
  return (
    <div className='plywood-Component6-div'>
        <div className='plywood-Component6-heading'>
            <img src={nagaland} className='plywood-Component6-heading-img'/>
            <p className='plywood-Component6-heading-content'>Nagaland plywoods </p>
        </div>
        <div className='plywood-Component6-time'>
          <p className='plywood-since'>
              Since
          </p>
          <p className='plywood-year'>
              2002
          </p>
        </div>
    </div>
  )
}

export default Component6