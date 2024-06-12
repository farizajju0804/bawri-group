import React from 'react'
import left1 from '../assets/left1.png'
import left2 from '../assets/left2.png'
import right1 from '../assets/right1.png'
import right2 from '../assets/right2.png'
import '../Component6/Component6.css'
const Component6 = () => {
  return (
    <div className='home-Component6-div'>
        <p className='home-Component6-heading'>
            25+ Companies
        </p>
        <div className='home-Component6-main'>
            <div className='home-Component6-content1'>
                <img className='home-Component6-img' src={left1}/>
                <img className='home-Component6-img' src={right1}/>
            </div>
            <div className='home-Component6-content2'>
                <img className='home-Component6-img' src={left2}/>
                <img className='home-Component6-img' src={right2}/>
            </div>
        </div>
    </div>
  )
}

export default Component6