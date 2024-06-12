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
            <p className='values-Component4-left-2'>
            We believe that a diverse and inclusive workplace is essential for innovation and growth. We respect and value differences in people, ideas, and perspectives, and create an environment where everyone feels valued, heard, and supported.                </p>
        </div>
        <img className='values-Component4-content-right' src={main}/>
    </div>
</div>
  )
}

export default Component4