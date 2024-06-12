import React from 'react'
import  './Component3.css'
import leftlogo from '../assets/leftlogo.png'
import rightlogo from '../assets/rightlogo.png'
import middlelogo from '../assets/middlelogo.png'
const Component3 = () => {
  return (   
    <div className=' antiques-Component3-div'>
        <p className=' antiques-Component3-heading'>How We Started?</p>
        <div className=' antiques-Component3-div2'>
          <p className='antiques-Component3-div2-text'>
                It was an​ ordinary day​ that turned out to be extraordinary. A serendipitous find​ at a book fair -​ a ​pristine ​leather-bound antique atlas priced at a mere dollar​ ​​sparked an unforeseen bidding war among potential buyers.
            </p>
          <p className='antiques-Component3-div2-text'>
                It resulted in a 300-fold return. ​This ​was beyond the realm of imagination​. It ​​was a pivotal moment that unveiled the potential of the antique​s​ industry. Saroj Antiques was born shortly thereafter.          
          </p>
        </div>
        <div className=' antiques-Component3-img-container'>
            <img className=' antiques-Component3-left' src={leftlogo}/>
            <img className='antiques-Component3-middle' src = {middlelogo}/>
            <img className=' antiques-Component3-right' src={rightlogo}/>
        </div>
    </div>
  )
}

export default Component3