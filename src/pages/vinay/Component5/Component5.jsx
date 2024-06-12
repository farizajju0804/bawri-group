import React from 'react'
import './Component5.css'
import vinaybottom from '../assets/vinaybottom.jpeg'

const Component5 = () => {  
    return (
        <div className='vinay-Component5-div'>
            <p className='vinay-Component5-heading'>Highlight Moment</p>
            <div className='vinay-Component5-main'>
                <img className='vinay-Component5-img' src={vinaybottom} />
                <div className='vinay-Component5-div2'>
                    <div className='vinay-Component5-div2-1'>
                        <p className='vinay-Component5-text'>Empowering 1000’s of Children</p>
        
                        <p className='vinay-Component5-div2-1-2'>
                        ​The highlight of Vinay Cements’ journey was providing pro-bono education to thousands of under-priviledged children who would not be literate otherwise.                         </p>
                    </div>
                    <div className='vinay-Component5-div2-2'>
                        <div className='vinay-Component5-div2-2-1'>2004</div>
                        <div className='vinay-Component5-div2-2-2'>Umrangshu, Assam</div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Component5