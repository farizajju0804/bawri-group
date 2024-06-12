import React from 'react'
import './Component4.css'
import calcomlogo from '../assets/calcomlogo.svg'
const Component4 = () => {
  return (
    <div className='calcom-Component4-div'>
        <p className='calcom-Component4-heading'>Calcom Cements</p>
      <div className='calcom-Component4-main'>
        <img src={calcomlogo} className='calcom-Component4-img'/>
        <div className='calcom-Component4-content'>
            <p className='calcom-Component4-content-1'>
            Calcom Cements was the largest private sector company in North-East India when it was established. It was the first North-Eastern private-sector company with leading international investors.            </p>
            <p className='calcom-Component4-content-2'>
            It catalysed unprecedented economic development and prosperity in the region by providing direct and indirect employment to over 25,000 people and through its social welfare initiatives. It has the capacity to scale to 10 million tonnes of cement per annum.            </p>
        </div>
      </div>
    </div>
  )
}

export default Component4       