import React from 'react'
import './Component4.css'
import cijenlogo from '../assets/cijenlogo.svg'
const Component4 = () => {
  return (
    <div className='cijen-Component4-div'>
        <p className='cijen-Component4-heading'>About</p>
      <div className='cijen-Component4-main'>
        <img src={cijenlogo} className='cijen-Component4-img'/>
        <div className='cijen-Component4-content'>
            <p className='cijen-Component4-content-1'>
              Lorem ipsum dolor sit amet consectetur. Neque eros vitae mattis orci cursus. Consequat massa sed eu maecenas. Sagittis lectus quis adipiscing faucibus maecenas. Sed vulputate placerat a nunc cursus.            </p>
            <p className='cijen-Component4-content-2'>
                Ullamcorper risus gravida in orci. Eget et bibendum at consequat vel et elit vitae id. Malesuada tincidunt auctor a amet in ultricies sit id. Aliquet tortor pellentesque convallis faucibus feugiat dictum augue. Morbi sed diam viverra.             </p>
        </div>
      </div>
    </div>
  )
}

export default Component4       