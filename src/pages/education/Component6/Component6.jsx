import React from 'react'
import '../Component6/Component6.css'
import nagaland from '../assets/nagaland.jpg'
const Component6 = () => {
  return (
    <div className='Education-Component6-div'>
        <div className='Education-Component6-heading'>
            <img src={nagaland} className='Education-Component6-heading-img'/>
            <p className='Education-Component6-heading-content'>JAMUNA DEVI<br/>SARASWATI VIDYA MANDIR</p>
        </div>
        <div className='Education-Component6-time'>
          <p className='Education-since'>
              Since
          </p>
          <p className='Education-year'>
              2012
          </p>
        </div>
    </div>
  )
}

export default Component6