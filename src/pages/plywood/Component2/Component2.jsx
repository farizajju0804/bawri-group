import React from 'react'
import './Component2.css'
import line from '../assets/line.png'
const Component2 = () => {
  return (
    <div className='plywood-Component2-div'>
        <div className='plywood-Component2-content'>
        <p className='plywood-Component2-heading'>Testimonial</p>
        <div className='plywood-Component-text-content'>
        <p className='plywood-Component2-text'>"I am an avid antique enthusiast. Saroj plywood' fine eye for identifying and finding a range of global plywood, customer service, and reverence for history really stand out.</p>
        <p className='plywood-Component2-text'>The quality of their collection is exemplary. They are honest and knowledgeable professionals with a passion for plywood.
          Each interaction has been wonderful."</p>
        </div>
        </div>
        <div className='plywood-Component2-bottom'>
          <img src={line} className='plywood-Component2-line'/>
          <p className='plywood-Component2-name'>Rajesh Bhugra</p>
        </div>
    </div>
  )
}

export default Component2