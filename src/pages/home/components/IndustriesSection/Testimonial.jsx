import React, { useState } from 'react';
import { motion } from 'framer-motion';
import quote from '../../assets/quote.png';

const testimonials = [
  {
    title: "Exceptional support from the team",
    text: [
      "The point of using Lorem Ipsum is that it has a more-or-less normal. Vestibulum lectus ex, molestie id erat at, consectetur.",
      "Etiam finibus nibh enim, et tempus sem imperdiet eget. Ut blandit, nulla quis tincidunt dignissim, ipsum diam efficitur est, et iaculis."
    ],
    author: "Léa Herrera",
    position: "Google",
    image: "https://images.pexels.com/photos/5325840/pexels-photo-5325840.jpeg?q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=940&w=640"
  },
  {
    title: "Amazing experience",
    text: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque aliquam odio nec tristique.",
      "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."
    ],
    author: "John Doe",
    position: "Facebook",
    image: "https://images.pexels.com/photos/3789899/pexels-photo-3789899.jpeg?q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=940&w=640"
  },
  {
    title: "Highly recommend",
    text: [
      "Proin eget tortor risus. Nulla porttitor accumsan tincidunt. Cras ultricies ligula sed magna dictum porta.",
      "Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Donec sollicitudin molestie malesuada."
    ],
    author: "Jane Smith",
    position: "Microsoft",
    image: "https://images.pexels.com/photos/3153201/pexels-photo-3153201.jpeg?q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=940&w=640"
  }
];

const Testimonial = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const Skywalks = {
    fontFamily: 'Skywalks',
    color: "#262626",
    fontWeight: 'normal'
  };

  const Lato = {
    fontFamily: 'Lato',
    color: "#262626"
  };

  const handlePrev = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const handleNext = () => {
    if (currentSlide < testimonials.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  return (
    <section className="relative py-16 lg:py-14 2xl:py-30">
      <img src={quote} className='w-14 absolute top-[12%] left-[6%]' alt="" srcset="" />
      <div className="container px-4 mx-auto">
        <div className="max-w-5xl mx-auto">
          <div className="w-full px-4 mb-6 text-center">
            <h1 style={Skywalks} className="text-5xl text-[#262626]">Testimonials</h1>
          </div>
          <div className="flex flex-wrap items-center -mx-4 mb-8 lg:flex-row-reverse flex-col-reverse rounded-2xl p-8">
            <div className="w-full lg:w-1/2 px-4 lg:mb-0">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="flex flex-wrap"
              >
                <div style={Lato} className="w-full">
                  <h3 className="mb-8 text-4xl lg:text-5xl font-bold font-heading relative inline-block">
                    <span className="relative z-10" style={Skywalks}>
                      {testimonials[currentSlide].title}
                    </span>
                    {/* <span className="absolute inset-0  bg-yellow-300 rounded-lg transform -skew-x-3 z-0"></span> */}
                  </h3>
                  {testimonials[currentSlide].text.map((paragraph, index) => (
                    <p key={index} className="mb-8 text-lg">{paragraph}</p>
                  ))}
                </div>
                <div className="w-full">
                  <h4 className="mb-1 text-3xl font-bold">{testimonials[currentSlide].author}</h4>
                  <p>{testimonials[currentSlide].position}</p>
                </div>
              </motion.div>
            </div>
            <div className="w-full lg:w-1/2 px-4">
              <img
                className="h-64 md:h-96 lg:h-144 mb-10 lg:mb-0 mx-auto rounded-full object-cover object-top"
                src={testimonials[currentSlide].image}
                alt={testimonials[currentSlide].author}
              />
            </div>
          </div>
          <div className="text-center">
            <button
              className={`inline-flex mr-2 items-center justify-center w-10 h-10 ${currentSlide === 0 ? 'bg-gray-400' : 'bg-[#3b44f6]'} rounded-full`}
              onClick={handlePrev}
              disabled={currentSlide === 0}
            >
              <svg width="7" height="14" viewBox="0 0 7 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.84708 12.115C7.05097 12.3207 7.05097 12.6512 6.84708 12.8554C6.64319 13.0596 6.31377 13.0603 6.10987 12.8554L0.152917 6.87493C-0.0509739 6.67074 -0.0509738 6.34026 0.152917 6.13456L6.10988 0.154119C6.31377 -0.0500693 6.64319 -0.0500693 6.84708 0.154119C7.05097 0.359063 7.05097 0.690301 6.84708 0.894489L1.4143 6.50512L6.84708 12.115Z" fill="white"></path>
              </svg>
            </button>
            <button
              className={`inline-flex items-center justify-center w-10 h-10 ${currentSlide === testimonials.length - 1 ? 'bg-gray-400' : 'bg-[#3b44f6]'} rounded-full`}
              onClick={handleNext}
              disabled={currentSlide === testimonials.length - 1}
            >
              <svg width="7" height="13" viewBox="0 0 7 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.15292 0.901511C-0.0509709 0.696057 -0.0509709 0.365972 0.15292 0.16203C0.356811 -0.0419136 0.686232 -0.0426689 0.890123 0.16203L6.84708 6.13528C7.05097 6.33923 7.05097 6.66931 6.84708 6.87476L0.890121 12.848C0.686231 13.052 0.35681 13.052 0.152919 12.848C-0.050972 12.6433 -0.0509719 12.3125 0.152919 12.1085L5.5857 6.50465L0.15292 0.901511Z" fill="white"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
