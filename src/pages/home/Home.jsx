import React from 'react'
import Component6 from '../home/Component6/Component6'
import Component7 from './Component7/Component7'
import IndustriesSection from './components/IndustriesSection/IndustriesSection'
// import {LogoItem} from './components/LogoOrigami'
import './Home.css'
const Home = () => {
  return (
    <div className='home'>
        <IndustriesSection/>
        <Component7/>

    </div>
  )
}

export default Home