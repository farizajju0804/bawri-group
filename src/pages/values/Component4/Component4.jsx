import React from 'react'
import './Component4.css'
import main from '../Component4/assets/main.png'
const Component4 = () => {
  return (
    <div className='values-Component4-div'>
    <div className='values-Component4-content'>
        <div className='values-Component4-content-left'>
            <p className='values-Component4-left-1'>
                3. Integrity & Trust
            </p>
            <p className='values-Component4-left-2 poppins-regular'>
            We uphold the highest standards of honesty and transparency, building strong, trust-based relationships with our stakeholders through consistent ethical practices. Our dedication to integrity ensures that we act with accountability and responsibility in all our endeavors, fostering trust and reliability.
              </p>
        </div>
        <img className='values-Component4-content-right' src={main}/>
    </div>
</div>
  )
}

export default Component4