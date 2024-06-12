import React from 'react'
import './Component2.css'
import main from './assets/main.png'
const Component2 = () => {
  return (
    <div className='values-Component2-div'>
        <div className='values-Component2-content'>
            <div className='values-Component2-content-left'>
                <p className='values-Component2-left-1'>
                    1. Respect & Diversity
                </p>
                <p className='values-Component2-left-2'>
                    We believe that a diverse and inclusive workplace is essential for innovation and growth. We respect and value differences in people, ideas, and perspectives, and create an environment where everyone feels valued, heard, and supported. 
                </p>
            </div>
            <img className='values-Component2-content-right' src={main}/>
        </div>
    </div>
  )
}

export default Component2