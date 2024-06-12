import React from 'react'
import './Component2.css'
import line from '../assets/line.png'
const Component2 = () => {
  return (
    <div className='cijen-Component2-div'>
        <div className='cijen-Component2-content'>
        <p className='cijen-Component2-heading'>Testimonial</p>
        <div className='cijen-Component-text-content'>
        <p className='cijen-Component2-text'>“Holy Grail of the Internet ”</p>
        {/* <p className='cijen-Component2-text'>The quality of their collection is exemplary. They are honest and knowledgeable professionals with a passion for antiques. Each interaction has been wonderful.</p> */}
        </div>
        
        </div>
        <div className='cijen-Component2-bottom'>
        <p className='cijen-Component2-name'>PERSON NAME</p>
          <img src={line} className='cijen-Component2-line'/>
        </div>
    </div>
  )
}

export default Component2