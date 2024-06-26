import React from 'react'
import '../Component7/Component7.css'
const Component7 = ({caption,stat,img}) => {
  return (
        
    <div className='home-Component7-div'>
        <div className='home-Component7-heading poppins-regular'>
          {
            caption && (
            <p className='home-Component7-text1'>{caption}</p>
              
            )
          }
            <p className='home-Component7-text2'>{stat}</p>
        </div>
        <img className='home-Component7-img' src={img}/>
    </div>
  )
}

export default Component7