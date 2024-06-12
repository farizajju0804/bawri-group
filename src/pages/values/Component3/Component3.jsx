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
                <p className='values-Component3-left-2'>
                We believe that a diverse and inclusive workplace is essential for innovation and growth. We respect and value differences in people, ideas, and perspectives, and create an environment where everyone feels valued, heard, and supported.                </p>
            </div>
            <img className='values-Component3-content-right' src={main}/>
        </div>
    </div>
  )
}

export default Component3