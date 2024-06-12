import React from 'react'
import '../Component7/Component7.css'
import Component7img from '../assets/component7img.jpeg'
const Component7 = () => {
  return (
        
    <div className='home-Component7-div'>
        <div className='home-Component7-heading'>
            <p className='home-Component7-text1'>Direct and Indirect Employment</p>
            <p className='home-Component7-text2'>50,000+ People</p>
        </div>
        <img className='home-Component7-img' src={Component7img}/>
    </div>
  )
}

export default Component7