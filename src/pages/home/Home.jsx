import React from 'react'
import Component7 from './Component7/Component7'
import IndustriesSection from './components/IndustriesSection/IndustriesSection'
import img from './assets/component7img.jpeg'
import img1 from './assets/component7img1.png'
import { motion } from "framer-motion";


import './Home.css'
import AuroraBackground from './ui/auroraYears'
import Globe from './components/IndustriesSection/GlobeSection'
import Gallery3d from './components/IndustriesSection/Gallery'
import FallingLogos from './components/IndustriesSection/FallingLogos'
import Founder from './components/IndustriesSection/Founder'
import VideoSection from './components/IndustriesSection/Video'
import ImageCardMarquee from './components/IndustriesSection/ImageCardMarquee'
import Testimonial from './components/IndustriesSection/Testimonial'
import TextAnimation from './components/IndustriesSection/TextAnimation'
import HeroSection from './components/IndustriesSection/HeroSection'
import HeroVideo from './components/IndustriesSection/HeroVideo'

const Home = () => {
  const cardsLeft = [
    {
      imageSrc: "https://res.cloudinary.com/drlyyxqh9/image/upload/v1718963675/Bawri%20Group/Landing%20Page/15%20Industries%20Section/6640_vdtswx.jpg",
      title: "Education",
      
    },
    {
      imageSrc: "https://res.cloudinary.com/drlyyxqh9/image/upload/v1718962921/Bawri%20Group/Landing%20Page/15%20Industries%20Section/eye_hospital_z9lo3d.webp",
      title: "Healthcare",
     
    },
    {
      imageSrc: "https://res.cloudinary.com/drlyyxqh9/image/upload/v1718962918/Bawri%20Group/Landing%20Page/15%20Industries%20Section/cement_goyfka.webp",
      title: "Construction",
      
    },
    {
      imageSrc: "https://res.cloudinary.com/drlyyxqh9/image/upload/v1718962917/Bawri%20Group/Landing%20Page/15%20Industries%20Section/plywood_zfi5i0.webp",
      title: "Plywood",
     
    },
    {
      imageSrc: "https://res.cloudinary.com/drlyyxqh9/image/upload/v1718962921/Bawri%20Group/Landing%20Page/15%20Industries%20Section/antiques_b0dczk.webp",
      title: "Antiques",
     
    },
    {
      imageSrc: "https://res.cloudinary.com/drlyyxqh9/image/upload/v1718962920/Bawri%20Group/Landing%20Page/15%20Industries%20Section/retial_uqizwj.webp",
      title: "Retail",
     
    },
    {
      imageSrc: "https://res.cloudinary.com/drlyyxqh9/image/upload/v1718962918/Bawri%20Group/Landing%20Page/15%20Industries%20Section/fashion_p5jmwl.webp",
      title: "Fashion Design",
     
    },
    {
      imageSrc: "https://res.cloudinary.com/drlyyxqh9/image/upload/v1718963336/Bawri%20Group/Landing%20Page/15%20Industries%20Section/search_jrkznt.webp",
      title: "Saas",
     
    },
    {
      imageSrc: "https://res.cloudinary.com/drlyyxqh9/image/upload/v1718963897/Bawri%20Group/Landing%20Page/15%20Industries%20Section/analytics_hzep9m.jpg",
      title: "Analytics",
     
    },
    // {
    //   imageSrc: "",
    //   title: "Analytics",
     
    // },
  ];
  
  
  return (
    <div className='home'>
       <HeroSection/>
    
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
       <TextAnimation/>
        {/* <div className="py-2 year-stat">
          The Bawri Group
        </div> */}
        <div className="py-2 year-desc text-[#3b44f6]">
        A Legacy of Fortitude, Resilience, and Triumph
        </div>
         <div className="text-center year-caption">
          Established 1872
        </div>
        {/* <button className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2">
          Debug now
        </button> */}
      </motion.div>
    </AuroraBackground>
    <HeroVideo/>
    <VideoSection/>
    <Founder/>
    {/* <Globe/> */}
        {/* <IndustriesSection/>
         */}
         <ImageCardMarquee cards={cardsLeft}  />
        <Component7
        caption="Direct and Indirect Employment"
        stat="50,000+ People"
        img={img}
        />
        <FallingLogos/>
        <Component7
        stat="Impacting 4 Generations"
        img={img1}
        />
        <Testimonial/>
        <Gallery3d/>
        

    </div>
  )
}

export default Home