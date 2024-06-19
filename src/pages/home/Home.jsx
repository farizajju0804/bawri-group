import React from 'react'
import Component7 from './Component7/Component7'
import IndustriesSection from './components/IndustriesSection/IndustriesSection'
import img from './assets/component7img.jpeg'
import img1 from './assets/component7img1.png'
import { motion } from "framer-motion";


import './Home.css'
import AuroraBackground from './ui/auroraYears'
import Globe from './components/IndustriesSection/GlobeSection'
const Home = () => {
  return (
    <div className='home'>
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
       
        <div className="py-2 year-stat">
          The Bawri Group
        </div>
         <div className="text-center year-caption">
          Established 1872
        </div>
        {/* <button className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2">
          Debug now
        </button> */}
      </motion.div>
    </AuroraBackground>
    <Globe/>
        <IndustriesSection/>
        <Component7
        caption="Direct and Indirect Employment"
        stat="50,000+ People"
        img={img}
        />
        <Component7
        stat="4 Generations"
        img={img1}
        />

    </div>
  )
}

export default Home