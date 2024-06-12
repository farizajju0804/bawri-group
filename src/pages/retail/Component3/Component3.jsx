import React from 'react'
import  './Component3.css'
import bottomleft from '../assets/bottomleft.png'
import bottomright from '../assets/bottomright.png'
import topleft from '../assets/topleft.png'
import topright from '../assets/topright.png'
const Component3 = () => {
  return (   
    <div className=' retail-Component3-div'>
    {/* <div className='retail-Component3-main'> */}
    <div className='retail-Component3-top'>
    <img className='retail-Component3-img' src={topleft}/>
    <p className=' retail-Component3-heading'>How We Started?</p>
    <img className='retail-Component3-img' src={topright}/>
    </div>
        <div className=' retail-Component3-div2'>
          <p className='retail-Component3-div2-text'>
          After growing Vinay Cements for over 15 years, we realized there was another dire shortage of cement in North-East India in the early 2000s. Infrastructural development was at an all-time high and cement prices were soaring because of the deficit in supply. 
          </p>
          <p className='retail-Component3-div2-text'>
          Paradoxically the region still had a wealth of untapped raw materials. ​It was a rare opportunity to turn economic struggles into triumph and it sparked the inception of retail Cements​.          
          </p>
          <p className='retail-Component3-div2-text'>
          The company is a manifestation of the founders ​visionary ​leadership, ​strategic ingenuity, and audacious risk-taking​. This was ​fortified by the​ir ​deep understanding of supply chain dynamics, a ​rich ​two-decade legacy in the cement industry, and over forty years of industrial acumen.         
          </p>
          <p className='retail-Component3-div2-text'>
          ​ ​​As a beacon of innovation ​retail ​reshaped industry benchmarks with an EBITDA that eclipses the industry average by 2.5 times. ​​​The company is a testament to the​ ​​founders' ​unyielding perseverance​ and hard work. 
          </p>
        </div>
        {/* </div> */}
        <div className=' retail-Component3-img-container'>
        <img className='retail-Component3-img' src={bottomleft}/>
        <img className='retail-Component3-img' src={bottomright}/>
        </div>
    </div>
  )
}

export default Component3