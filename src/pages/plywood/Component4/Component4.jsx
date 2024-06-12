import React from 'react'
import './Component4.css'
import plywoodlogo from '../assets/plywoodlogo.svg'
const Component4 = () => {
  return (
    <div className='plywood-Component4-div'>
        <p className='plywood-Component4-heading'>Nagaland Plywoods</p>
      <div className='plywood-Component4-main'>
        <img src={plywoodlogo} className='plywood-Component4-img'/>
        <div className='plywood-Component4-content'>
            <p className='plywood-Component4-content-1'>
                  Before setting up Nagaland Plywood, we realized manufacturers were using only two types of timber (makai and halong) to make plywood. We pioneered using underexplored varieties of timber. Plywood was made in 3, 5, or 7 layers.            </p>
            <p className='plywood-Component4-content-2'>
                  Manufacturers used the same quality of timber for the inner and outer layers, and made all the layers equal in thickness. We innovated using superior timber only for the outer layers and also pioneered making the inner layers of timber twice as thick as the outer layers.            </p>
        </div>
      </div>
    </div>
  )
}

export default Component4       