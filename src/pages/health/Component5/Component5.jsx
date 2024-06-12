import React from 'react'

import './Component5.css'
import healthbottom from '../assets/healthbottom.png'

const Component5 = () => {  
    return (
        <div className='health-Component5-div'>
            <p className='health-Component5-heading'>Highlight Moment</p>
            <div className='health-Component5-main'>
                <img className='health-Component5-img' src={healthbottom} />
                {/* <div className='health-Component5-div2'> */}
                    <div className='health-Component5-div2-1'>
                        <p className='health-Component5-text'>Moment Name</p>
                    <div className='health-Component5-div2-2'>
                        <div className='health-Component5-div2-2-1'>2012 - Kolkata, India</div>
                        <div className='health-Component5-div2-2-2'></div>
                    </div>
                        <p className='health-Component5-div2-1-2'>
                        Lorem ipsum dolor sit amet consectetur. A mi urna ornare eu auctor tincidunt malesuada ut porta. Lorem ipsum dolor sit amet consectetur. A mi urna ornare eu auctor tincidunt malesuada ut porta.                         </p>
                    </div>
                   

                {/* </div> */}
            </div>
        </div>
    )
}

export default Component5