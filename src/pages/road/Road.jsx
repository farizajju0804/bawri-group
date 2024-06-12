import React from 'react'
import Component1 from '../road/Component1/Component1'
import Component2 from '../road/Component2/Component2'
import Component3 from '../road/Component3/Component3'
import './road.css'
import Component4 from '../road/Component4/Component4'
import Component5 from '../road/Component5/Component5'
import Component6 from '../road/Component6/Component6'
import Component7 from '../road/Component7/Component7'
const Road = () => {
  return (
    <div style={{backgroundColor:"#FDDB60"}} className='road-main'>
        <Component1/>
        <Component2 />
        <Component3 />
        <Component4/>
        <Component5/>
        <Component6/>
        <Component7/>
    </div>
  )
}

export default Road