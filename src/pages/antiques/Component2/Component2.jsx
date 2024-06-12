import React from 'react'
import './Component2.css'
import line from '../assets/line.png'
const Component2 = () => {
  return (
    <div className='antiques-Component2-div'>
        <div className='antiques-Component2-content'>
        <p className='antiques-Component2-heading'>Testimonial</p>
        <div className='antiques-Component-text-content'>
        <p className='antiques-Component2-text'>"I am an avid antique enthusiast. Saroj Antiques' fine eye for identifying and finding a range of global antiques, customer service, and reverence for history really stand out.</p>
        <p className='antiques-Component2-text'>The quality of their collection is exemplary. They are honest and knowledgeable professionals with a passion for antiques.
          Each interaction has been wonderful."</p>
        </div>
        </div>
        <div className='antiques-Component2-bottom'>
          <img src={line} className='antiques-Component2-line'/>
          <p className='antiques-Component2-name'>Rajesh Bhugra</p>
        </div>
    </div>
  )
}

export default Component2