import React from 'react'
import './Component5.css'
import calcombottom from '../assets/calcombottom.jpeg'

const Component5 = () => {  
    return (
        <div className='calcom-Component5-div'>
            <p className='calcom-Component5-heading'>Highlight Moment</p>
            <div className='calcom-Component5-main'>
                <img className='calcom-Component5-img' src={calcombottom} />
                <div className='calcom-Component5-div2'>
                    <div className='calcom-Component5-div2-1'>
                        <p className='calcom-Component5-text'>Life-Changing Contributions</p>
                        <div className='calcom-Component5-div2-2'>
                        <div className='calcom-Component5-div2-2-1'>2006</div>
                        <div className='calcom-Component5-div2-2-2'>Assam, India</div>
                    </div>
                    </div>
                        <p className='calcom-Component5-div2-1-2'>
                        Making life-changing economic and social contributions to over 25,000 people and their families. Empowering and enabling them to break free from the shackles of multi-generational poverty.                         </p>
                 
                    

                </div>
            </div>
        </div>
    )
}

export default Component5