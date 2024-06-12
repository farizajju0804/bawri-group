import React from 'react'
import '../Component6/Component6.css'
import nagaland from '../assets/nagaland.jpg'
const Component6 = () => {
  return (
    <div className='timber-Component6-div'>
        <div className='timber-Component6-heading'>
            <img src={nagaland} className='timber-Component6-heading-img'/>
            <p className='timber-Component6-heading-content'>BAWRI TIMBER </p>
        </div>
        <div className='timber-Component6-time'>
          <p className='timber-since'>
              Since
          </p>
          <p className='timber-year'>
              2002
          </p>
        </div>
    </div>
  )
}

export default Component6