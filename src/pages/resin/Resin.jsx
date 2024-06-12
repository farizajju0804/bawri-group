import React from 'react'
import Component1 from './Component1/Component1'
import Component2 from '../resin/Component2/Component2'
import Component3 from '../resin/Component3/Component3'
import Component4 from '../resin/Component4/Component4'
import Component5 from '../resin/Component5/Component5'
import Component6 from '../resin/Component6/Component6'
const resin = () => {
  return (
    <div>
        <Component1/>
        <Component6/>
        <Component2/>
        <Component3/>
        <Component4/>
        <Component5/>
    </div>
  )
}

export default resin