import React from 'react'
import left from  "./assets/left.svg"
import right from './assets/right.svg'
import './Option.css'
const Option = () => {
  return (
    <div className='option-div'>
        <p className='option-heading'>Our Companies</p>
        <div className='option-main'>
            <div className='option-main-div'>
                <img className='option-img' src={left}/>
                <p className='option-main-content'>For-Profit</p>
            </div>
            <div className='option-main-div'>
                <img className='option-img' src={right}/>
                <p className='option-main-content'>Non-Profit</p>
            </div>
        </div>
    </div>
  )
}

export default Option