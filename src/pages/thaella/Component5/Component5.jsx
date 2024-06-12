import React from 'react'
import './Component5.css'
import thaellabottom from '../assets/thaellabottom.png'

const Component5 = () => {  
    return (
        <div className='thaella-Component5-div'>
            <p className='thaella-Component5-heading'>Highlight Moment</p>
            <div className='thaella-Component5-main'>
                <img className='thaella-Component5-img' src={thaellabottom} />
                <div className='thaella-Component5-div2'>
                    <div className='thaella-Component5-div2-1'>
                        <p className='thaella-Component5-text'>Moment Name</p>
        
                        <p className='thaella-Component5-div2-1-2'>
                        Lorem ipsum dolor sit amet consectetur. A mi urna ornare eu auctor tincidunt malesuada ut porta. Lorem ipsum dolor sit amet consectetur. A mi urna ornare eu auctor tincidunt malesuada ut porta.                     </p>
                        </div>
                    <div className='thaella-Component5-div2-2'>
                        <div className='thaella-Component5-div2-2-1'>2012</div>
                        <div className='thaella-Component5-div2-2-2'>Kolkata, India</div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Component5