import React from 'react'
import '../Component6/Component6.css'
import nagaland from '../assets/nagaland.jpg'
const Component6 = () => {
  return (
    <div className='vinay-Component6-div'>
        <div className='vinay-Component6-heading'>
            <img src={nagaland} className='vinay-Component6-heading-img'/>
            <p className='vinay-Component6-heading-content'>VINAY Cements </p>
        </div>
        <div className='vinay-Component6-time'>
          <p className='vinay-since'>
              Since
          </p>
          <p className='vinay-year'>
              2002
          </p>
        </div>
    </div>
  )
}

export default Component6