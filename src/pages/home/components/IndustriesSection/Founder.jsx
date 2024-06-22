import React from 'react';
import quoteleft from '../../assets/quote-left.png';
import quoteright from '../../assets/quote-right.png';

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

  return (
    <div className='w-full bg-white py-4 flex flex-col'>
      <div className='w-full py-2 lg:py-4'>
        <h1 style={Skywalks} className='text-3xl md:text-5xl w-full text-center tracking-wide'>
          Our Founder
        </h1>
      </div>
      <div className='flex flex-col lg:flex-row w-full p-6 items-center justify-center gap-4 '>
        <div className='px-8 w-full md:w-[70%] lg:w-[40%] flex items-center justify-center'>
          <img src="https://www.entrepreneurcafe.org/uploads/2/5/4/7/25478136/12_5_orig.jpg" alt="" />
        </div>
        <div className='relative px-10 py-8 w-full lg:w-[60%] lg:mb-10 flex flex-col items-center bg-[#fddb60] md:rounded-full rounded-[30%]' style={{ clipPath: 'url(#minimal-blob)' }}>
          {/* <svg width="0" height="0">
            <clipPath id="minimal-blob" clipPathUnits="objectBoundingBox">
            <path d="M0.1,0.1 C0.2,0, 0.8,0, 0.9,0.1 C1,0.2, 1,0.8, 0.9,0.9 C0.8,1, 0.2,1, 0.1,0.9 C0,0.8, 0,0.2, 0.1,0.1 Z" />
            </clipPath>
          </svg> */}
          <img className='hidden lg:block absolute lg:top-2 lg:left-2 w-6' src={quoteleft} alt="" />
          <img className='hidden lg:block absolute lg:bottom-2 lg:right-2 w-6' src={quoteright} alt="" />
          <p style={Lato} className='p-2 mt-4 text-base'>
            Lorem ipsum dolor sit amet consectetur. Facilisi elit nam id nulla phasellus ac elementum ullamcorper posuere. Amet sollicitudin phasellus arcu ante justo mauris id. Massa eget viverra varius tellus neque. Id ut elementum pellentesque vel in. In sodales facilisis vitae magnis sed convallis. Elit quis in phasellus cum nec. A est in sapien ullamcorper purus facilisi. Adipiscing amet platea tempor nibh.
          </p>
          <div className='w-fit p-2 lg:text-xl bg-white mt-4'>
            <p style={Skywalks}>Mr. Binod Kumar Bawri</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Founder;
