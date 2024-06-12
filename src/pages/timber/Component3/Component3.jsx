import React from 'react'
import  './Component3.css'
import leftlogo from '../assets/leftlog.png'
import rightlogo from '../assets/rightlog.png'
const Component3 = () => {
  return (   
    <div className=' timber-Component3-div'>
        <p className=' timber-Component3-heading'>How We Started?</p>
        <div className=' timber-Component3-div2'>
          <p className='timber-Component3-div2-text'>
          During World War II, the army needed a lot of timber but it was in short supply. My father kept our door and kitchen open to all army personnel. He said this was the least we could do; Generals, Captains, and Jawaan’s alike were risking their lives.          </p>
          <p className='timber-Component3-div2-text'>
          A group of fifteen came for Diwali-dinner in 1945. After a hearty dinner of over 150 puri’s and accompaniments, they got talking.They shared both heart-warming as well as gut-wrenching stories.           </p>
          <p className='timber-Component3-div2-text'>
          They asked if we could organise a large supply of woolens for them. “Consider it done” my father said in his deep voice. They joked “Can you organise large supplies of timber also.          </p>
          <p className='timber-Component3-div2-text'>
          After an hour of discussions, the entrepreneur in my father realised this was a good opportunity; it was a win-win, and he had willing customers. Six months later, in the midst of the war, Bawri Timber Industries was borne.          </p>
        </div>
        <div className=' timber-Component3-img-container'>
            <img className=' timber-Component3-left' src={leftlogo}/>
            <img className=' timber-Component3-right' src={rightlogo}/>
        </div>
    </div>
  )
}

export default Component3