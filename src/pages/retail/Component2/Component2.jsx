import React from 'react'
import './Component2.css'
import line from '../assets/line.png'
const Component2 = () => {
  return (
    <div className='retail-Component2-div'>
        <div className='retail-Component2-content'>
        <p className='retail-Component2-heading'>Testimonial</p>
        <div className='retail-Component-text-content'>
        <p className='retail-Component2-text'>“Lorem ipsum dolor sit amet consectetur. Enim lectus ornare sit volutpat cras sit.”</p>
        {/* <p className='retail-Component2-text'>The quality of their collection is exemplary. They are honest and knowledgeable professionals with a passion for antiques. Each interaction has been wonderful.</p> */}
        </div>
        
        </div>
        <div className='retail-Component2-bottom'>
        <p className='retail-Component2-name'>Rajesh Bhugra</p>
          <img src={line} className='retail-Component2-line'/>
        </div>
    </div>
  )
}

export default Component2