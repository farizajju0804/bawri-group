import React from 'react'
import './Component5.css'
import antiquesbottom from '../assets/antiquesbottom.png'

const Component5 = () => {  
    return (
        <div className='antiques-Component5-div'>
            <p className='antiques-Component5-heading'>Highlight Moment</p>
            <div className='antiques-Component5-main'>
                <img className='antiques-Component5-img' src={antiquesbottom} />
                <div className='antiques-Component5-div2'>
                    <div className='antiques-Component5-div2-1'>
                        <div className='antiques-Component5-div2-1-1'>
                            
                            <p className='antiques-Component5-text'>Delighting Clients</p>
                        </div>
                        <p className='antiques-Component5-div2-1-2'>
                            Saroj Antiques found a first-edition copy of ‘Great Expectations’ for a collector who had been scouring for the book for years. The collector said it was among the happiest moments in their life.                         </p>
                    </div>
                    <div className='antiques-Component5-div2-2'>
                        <div className='antiques-Component5-div2-2-1'>2004</div>
                        <div className='antiques-Component5-div2-2-2'>Tokyo, Japan</div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Component5