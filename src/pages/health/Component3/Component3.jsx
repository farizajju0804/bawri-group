import React from 'react'
import './Component3.css'
import bottomleft from '../assets/bottomleft.png'
import bottomright from '../assets/bottomright.png'
import topleft from '../assets/topleft.png'
import topright from '../assets/topright.png'
const Component3 = () => {
  return (
    <div className=' health-Component3-div'>
      {/* <div className='health-Component3-main'> */}
      <div className='health-Component3-top'>
        <img className='health-Component3-img' src={topleft} />
        <p className=' health-Component3-heading'>How We Started?</p>
        <img className='health-Component3-img' src={topright} />
      </div>
      <div className=' health-Component3-div2'>
        <p className='health-Component3-div2-text'>
        Lorem ipsum dolor sit amet consectetur. Urna diam ut felis fermentum convallis etiam eget risus pharetra. Dictumst viverra feugiat euismod scelerisque. Eget facilisi massa tincidunt turpis accumsan in risus ultrices iaculis.        </p>
        <p className='health-Component3-div2-text'>
        Cursus amet elit auctor netus accumsan massa ligula enim. Ornare consectetur lorem lacus vestibulum a sed vulputate. Augue venenatis tempus tincidunt tortor gravida odio suscipit nec in. Tortor elit enim id eu malesuada venenatis ac.        </p>
        <p className='health-Component3-div2-text'>
        Vel praesent ultrices quam habitasse placerat fames dictumst blandit. Elementum id aliquet id quam pellentesque suspendisse quisque in.        </p>
        <p className='health-Component3-div2-text'>
        Neque pharetra viverra diam est id eget faucibus mi tincidunt. Fermentum neque donec adipiscing commodo mi sem. Nisi massa sagittis integer lacus. Consectetur blandit egestas fames orci. Semper morbi cras blandit.        </p>
      </div>
      {/* </div> */}
      <div className=' health-Component3-img-container'>
        <img className='health-Component3-img' src={bottomleft} />
        <img className='health-Component3-img' src={bottomright} />
      </div>
    </div>
  )
}

export default Component3