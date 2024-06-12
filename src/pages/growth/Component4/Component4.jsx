import React from 'react'
import './Component4.css'
import growthlogo from '../assets/growthlogo.jpeg'
const Component4 = () => {
  return (
    <div className='growth-Component4-div'>
      <img src={growthlogo} className='growth-Component4-img'/>
        <p className='growth-Component4-heading'>About</p>
      <div className='growth-Component4-main'>
        <div className='growth-Component4-content'>
            <p className='growth-Component4-content-1'>
              Lorem ipsum dolor sit amet consectetur. Neque eros vitae mattis orci cursus. Consequat massa sed eu maecenas. Sagittis lectus quis adipiscing faucibus maecenas. Sed vulputate placerat a nunc cursus.            </p>
            <p className='growth-Component4-content-2'>
                Ullamcorper risus gravida in orci. Eget et bibendum at consequat vel et elit vitae id. Malesuada tincidunt auctor a amet in ultricies sit id. Aliquet tortor pellentesque convallis faucibus feugiat dictum augue. Morbi sed diam viverra.             </p>
        </div>
      </div>
    </div>
  )
}

export default Component4       