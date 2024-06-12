import React from 'react'
import './Component5.css'
import diducebottom from '../assets/diducebottom.jpeg'

const Component5 = () => {  
    return (
        <div className='diduce-Component5-div'>
            <p className='diduce-Component5-heading'>Highlight Moment</p>
            <div className='diduce-Component5-main'>
                <img className='diduce-Component5-img' src={diducebottom} />
                <div className='diduce-Component5-div2'>
                    <div className='diduce-Component5-div2-1'>
                        <p className='diduce-Component5-text'>Moment Name</p>
        
                        <p className='diduce-Component5-div2-1-2'>
                        Lorem ipsum dolor sit amet consectetur. A mi urna ornare eu auctor tincidunt malesuada ut porta. Lorem ipsum dolor sit amet consectetur. A mi urna ornare eu auctor tincidunt malesuada ut porta.                         </p>
                    </div>
                    <div className='diduce-Component5-div2-2'>
                        <div className='diduce-Component5-div2-2-1'>2012</div>
                        <div className='diduce-Component5-div2-2-2'>Kolkata, India</div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Component5