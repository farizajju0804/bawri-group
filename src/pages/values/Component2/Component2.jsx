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
                <p className='values-Component2-left-2 poppins-regular'>
                We embrace and celebrate the unique perspectives and backgrounds of our team and clients, fostering an inclusive environment where everyone feels valued and respected. By promoting diversity, we enhance our creativity and problem-solving abilities, ensuring a richer and more innovative approach to our work.
                </p>
            </div>
            <img className='values-Component2-content-right' src={main}/>
        </div>
    </div>
  )
}

export default Component2