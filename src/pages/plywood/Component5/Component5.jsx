import React from 'react'
import './Component5.css'
import plywoodbottom from '../assets/drawing.png'

const Component5 = () => {  
    return (
        <div className='plywood-Component5-div'>
            <p className='plywood-Component5-heading'>Highlight Moment</p>
            <div className='plywood-Component5-main'>
                <img className='plywood-Component5-img' src={plywoodbottom} />
                <div className='plywood-Component5-div2'>
                    <div className='plywood-Component5-div2-1'>
                        <p className='plywood-Component5-text'>Moment Name</p>
        
                        <p className='plywood-Component5-div2-1-2'>
                                    Lorem ipsum dolor sit amet consectetur. A mi urna ornare eu auctor tincidunt malesuada ut porta. Lorem ipsum dolor sit amet consectetur. A mi urna ornare eu auctor tincidunt malesuada ut porta.                    
                        </p>
                    </div>
                    <div className='plywood-Component5-div2-2'>
                        <div className='plywood-Component5-div2-2-1'>2012</div>
                        <div className='plywood-Component5-div2-2-2'>Kolkata, India</div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Component5