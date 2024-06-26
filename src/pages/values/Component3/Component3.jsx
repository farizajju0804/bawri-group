import React from 'react'
import './Component3.css'
import main from './assets/main.png'
const Component3 = () => {
  return (
    <div className='values-Component3-div'>
        <div className='values-Component3-content'>
            <div className='values-Component3-content-left'>
                <p className='values-Component3-left-1'>
                    2. Innovation & Creativity
                </p>
                <p className='values-Component3-left-2 poppins-regular'>
                We drive progress by encouraging creative thinking and innovative solutions. Our commitment to pushing the boundaries of what’s possible enables us to develop cutting-edge products and services that meet the evolving needs of our clients and communities.
                  </p>
            </div>
            <img className='values-Component3-content-right' src={main}/>
        </div>
    </div>
  )
}

export default Component3