import React from 'react'

import './Component5.css'
import ideabottom from '../assets/ideabottom.png'
import nagaland from '../assets/nagaland.jpg'
const Component5 = () => {  
    return (
        <div className='idea-Component5-div'>
            <div className='idea-Component5-heading'>
            <img src={nagaland} className='idea-Component5-heading-img'/>
            <p className='idea-Component5-heading-content'>Highlight Moment</p>
        </div>
            <div className='idea-Component5-main'>
                <img className='idea-Component5-img' src={ideabottom} />
                {/* <div className='idea-Component5-div2'> */}
                    <div className='idea-Component5-div2-1'>
                        <p className='idea-Component5-text'>Moment Name</p>
                    <div className='idea-Component5-div2-2'>
                        <div className='idea-Component5-div2-2-1'>2012 - Kolkata, India</div>
                        <div className='idea-Component5-div2-2-2'></div>
                    </div>
                        <p className='idea-Component5-div2-1-2'>
                        Lorem ipsum dolor sit amet consectetur. A mi urna ornare eu auctor tincidunt malesuada ut porta. Lorem ipsum dolor sit amet consectetur. A mi urna ornare eu auctor tincidunt malesuada ut porta.                         </p>
                    </div>
                   

                {/* </div> */}
            </div>
        </div>
    )
}

export default Component5