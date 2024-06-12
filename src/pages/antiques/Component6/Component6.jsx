import React from 'react'
import '../Component6/Component6.css'
import nagaland from '../assets/nagaland.jpg'
const Component6 = () => {
  return (
    <div className='antiques-Component6-div'>
        <div className='antiques-Component6-heading'>
            <img src={nagaland} className='antiques-Component6-heading-img'/>
            <p className='antiques-Component6-heading-content'>SAROJ ANTIQUES </p>
        </div>
        <div className='antiques-Component6-time'>
          <p className='antiques-since'>
              Since
          </p>
          <p className='antiques-year'>
              2002
          </p>
        </div>
    </div>
  )
}

export default Component6