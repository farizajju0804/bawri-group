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
      
    
    {/* <AuroraBackground>
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
        <div className="py-2 year-desc text-[#3b44f6]">
        A Legacy of Fortitude, Resilience, and Triumph
        </div>
         <div className="text-center year-caption">
          Established 1872
        </div>
      
      </motion.div>
    </AuroraBackground> */}
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
        img="https://res.cloudinary.com/drlyyxqh9/image/upload/v1719244944/Bawri%20Group/Landing%20Page/DALL_E_2024-06-24_21.31.57_-_A_minimal_subtle_and_abstract_collage_image_depicting_people_in_direct_and_indirect_employment._On_one_side_illustrate_direct_employment_with_a_gro_bhuozf.webp"
        />
        <FallingLogos/>
        <Component7
        stat="Impacting 4 Generations"
        img="https://res.cloudinary.com/drlyyxqh9/image/upload/v1719244764/Bawri%20Group/Landing%20Page/DALL_E_2024-06-24_21.25.10_-_A_horizontal_image_in_a_16_9_ratio_representing_four_generations_of_people_with_a_whiter_subtle_background._On_the_far_left_an_elderly_person_using_kxh5sh.webp"
        />
        <Testimonial/>
        <Gallery3d/>
        

    </div>
  )
}

export default Home