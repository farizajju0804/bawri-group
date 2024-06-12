import React from 'react'
import './Component5.css'
import retailbottom from '../assets/retailbottom.jpeg'

const Component5 = () => {  
    return (
        <div className='retail-Component5-div'>
            <p className='retail-Component5-heading'>Highlight Moment</p>
            <div className='retail-Component5-main'>
                <img className='retail-Component5-img' src={retailbottom} />
                <div className='retail-Component5-div2'>
                    <div className='retail-Component5-div2-1'>
                        <p className='retail-Component5-text'>Moment Name</p>
        
                        <p className='retail-Component5-div2-1-2'>
                        Lorem ipsum dolor sit amet consectetur. A mi urna ornare eu auctor tincidunt malesuada ut porta. Lorem ipsum dolor sit amet consectetur. A mi urna ornare eu auctor tincidunt malesuada ut porta.                         </p>
                    </div>
                    <div className='retail-Component5-div2-2'>
                        <div className='retail-Component5-div2-2-1'>2012</div>
                        <div className='retail-Component5-div2-2-2'>Kolkata, India</div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Component5