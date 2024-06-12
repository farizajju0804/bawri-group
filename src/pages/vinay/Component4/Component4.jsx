import React from 'react'
import './Component4.css'
import vinaylogo from '../assets/vinaylogo.svg'
const Component4 = () => {
  return (
    <div className='vinay-Component4-div'>
        <p className='vinay-Component4-heading'>Vinay Cements</p>
      <div className='vinay-Component4-main'>
        <img src={vinaylogo} className='vinay-Component4-img'/>
        <div className='vinay-Component4-content'>
            <p className='vinay-Component4-content-1'>
            Vinay Cements, championed as North-East India's trailblazer harnessed global technology through partnerships with European firms, transforming North-East India's industrial landscape. The company set up its factory in Umrangshu, an underdeveloped region in NC Hills, Assam.                   </p>
            <p className='vinay-Component4-content-2'>
            Despite infrastructural challenges, including broken roads, lack of telecommunication, and erratic power supply, the founders remained undeterred. They didn’t wait for the government to fix things. They undertook road repairs, maintained the power lines, and patiently waited six years for phone connectivity. They fostered local employment and empowerment, and established a pro bono school in an educationally barren region. Vinay Cements' journey was replete with perseverance, and an unwavering commitment to societal upliftment, providing an inspiring and engaging blueprint for corporate success.                  </p>
        </div>
      </div>
    </div>
  )
}

export default Component4       