import React from 'react'
import  './Component3.css'
import leftlogo from '../assets/left.png'
import rightlogo from '../assets/right.png'
const Component3 = () => {
  return (   
    <div className=' vinay-Component3-div'>
        <p className=' vinay-Component3-heading'>How We Started?</p>
        <div className=' vinay-Component3-div2'>
          <p className='vinay-Component3-div2-text'>
          In the early 1980s we were in the process of building our house. Six months later, the builder told us he had to halt construction because there was a shortage of cement. We scoped the market but demand far outstripped supply and we had to stop construction for over three months.             
          </p>
          <p className='vinay-Component3-div2-text'>
          People say one of my strengths is ‘root-cause analysis’ and going beyond the obvious. I spent those three months understanding the reasons for the asymmetry between demand and supply; learning how cement is manufactured; and understanding the technology, processes, and logistics. 
          </p>
          <p className='vinay-Component3-div2-text'>
            I discovered Assam was a prime spot to manufacture cement. After six months of research, brainstorming, and due diligence, opportunity beckoned. The rest is history, Vinay Cements was born the following year.          
          </p>
        </div>
        <div className=' vinay-Component3-img-container'>
            <img className=' vinay-Component3-left' src={leftlogo}/>
            <img className=' vinay-Component3-right' src={rightlogo}/>
        </div>
    </div>
  )
}

export default Component3