import React from 'react';
import { motion } from 'framer-motion';
import quoteleft from '../../assets/quote-left.png';
import quoteright from '../../assets/quote-right.png';
import founder from '../../assets/founder.png'
const Founder = () => {
  const Skywalks = {
    fontFamily: 'Skywalks',
    color: "#262626",
    fontWeight: 'normal'
  };

  const Lato = {
    fontFamily: 'Lato',
    color: "#262626",
    fontWeight: 'normal'
  };

  const imageVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7 } }
  };

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.7 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.7, delay: 0.2 } }
  };

  return (
    <div className='w-full bg-white pt-8 lg:py-8 flex flex-col'>
      <div className='w-full pt-2 lg:py-4'>
        <h1 style={Skywalks} className='text-5xl w-full text-center tracking-wide'>
          Our Founder
        </h1>
      </div>
      <div className='flex flex-col w-full pt-6 lg:pb-6 items-center justify-center'>
        <motion.div
          className='w-full md:w-[70%] lg:w-[30%] flex items-center justify-center'
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={imageVariants}
        >
          <img src={founder} alt="Founder" />
        </motion.div>
        <motion.div
          className='relative px-10 py-8 pb-12 w-full lg:w-[80%] flex flex-col items-center bg-[#fddb60]'
          style={{ clipPath: 'url(#minimal-blob)' }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {/* <svg width="0" height="0">
            <clipPath id="minimal-blob" clipPathUnits="objectBoundingBox">
            <path d="M0.1,0.1 C0.2,0, 0.8,0, 0.9,0.1 C1,0.2, 1,0.8, 0.9,0.9 C0.8,1, 0.2,1, 0.1,0.9 C0,0.8, 0,0.2, 0.1,0.1 Z" />
            </clipPath>
          </svg> */}
          <img className='hidden lg:block absolute lg:top-2 lg:left-2 w-6' src={quoteleft} alt="Quote Left" />
          <img className='hidden lg:block absolute lg:bottom-2 lg:right-2 w-6' src={quoteright} alt="Quote Right" />
          <p style={Lato} className='px-2 mt-4 text-base'>
            Lorem ipsum dolor sit amet consectetur. Facilisi elit nam id nulla phasellus ac elementum ullamcorper posuere. Amet sollicitudin phasellus arcu ante justo mauris id. Massa eget viverra varius tellus neque. Id ut elementum pellentesque vel in. In sodales facilisis vitae magnis sed convallis. Elit quis in phasellus cum nec. A est in sapien ullamcorper purus facilisi. Adipiscing amet platea tempor nibh.
          </p>
          <p style={Lato} className='px-2 mt-4 text-base'>
            Id ut elementum pellentesque vel in. In sodales facilisis vitae magnis sed convallis. Elit quis in phasellus cum nec. A est in sapien ullamcorper purus facilisi. Adipiscing amet platea tempor nibh.
          </p>
          <div className='w-fit p-2 text-xl bg-white mt-8'>
            <p style={Skywalks}>Mr. Binod Kumar Bawri</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Founder;
