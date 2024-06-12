import React from 'react'
import '../Component6/Component6.css'
import nagaland from '../assets/nagaland.jpg'
const Component6 = () => {
  return (
    <div className='cijen-Component6-div'>
        <div className='cijen-Component6-heading'>
            <img src={nagaland} className='cijen-Component6-heading-img'/>
            <p className='cijen-Component6-heading-content'>CIJEN</p>
        </div>
        <div className='cijen-Component6-time'>
          <p className='cijen-since'>
              Since
          </p>
          <p className='cijen-year'>
              1999
          </p>
        </div>
    </div>
  )
}

export default Component6