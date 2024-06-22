import React, { useState, useRef } from 'react';
const Testimonial = () => {
    const [activeSlide, setActiveSlide] = useState(0);
    const slide1Ref = useRef(null);
    const slide2Ref = useRef(null);
    const slide3Ref = useRef(null);
    const Skywalks = {
        fontFamily: 'Skywalks',
        fontWeight: 'normal'
      };
      const Lato = {
        fontFamily: 'Lato',
        fontWeight: 'normal'
      };
    const slides = [
        {
            image: "https://picsum.photos/200/300",
            quote: "Quannta team is absolutely fabulous to work with!",
            text: "Sit at facilisis pulvinar enim ut vulputate. Semper odio cras iaculis tristique adipiscing congue sodales. Id sapien imperdiet tortor id aliquam ac et. Amet pulvinar gravida urna tincidunt at erat sapien a sit. Facilisi tellus habitant vestibulum magna vitae quam erat rutrum ipsum.",
            name: "Beby Nirmala",
        },
        {
            image: "https://picsum.photos/200/300",
            quote: "Wonderful collaboration and great experience!",
            text: "Sit at facilisis pulvinar enim ut vulputate. Semper odio cras iaculis tristique adipiscing congue sodales. Id sapien imperdiet tortor id aliquam ac et. Amet pulvinar gravida urna tincidunt at erat sapien a sit. Facilisi tellus habitant vestibulum magna vitae quam erat rutrum ipsum.",
            name: "Rakabuming Suhu",
        },
        {
            image: "https://picsum.photos/200/300",
            quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            text: "Sit at facilisis pulvinar enim ut vulputate. Semper odio cras iaculis tristique adipiscing congue sodales. Id sapien imperdiet tortor id aliquam ac et. Amet pulvinar gravida urna tincidunt at erat sapien a sit. Facilisi tellus habitant vestibulum magna vitae quam erat rutrum ipsum.",
            name: "Rakabuming Suhu",
        },
    ];

    const slideRefs = [slide1Ref, slide2Ref, slide3Ref];

    return (
        <section className="relative p-4 lg:p-10 mb-4 bg-gray-50 overflow-hidden">
            <div className="relative container px-4 mx-auto">
                <div className="w-full mx-auto">
                    <div className="flex flex-wrap -mx-4 items-center mb-8">
                        <div className="w-full lg:w-2/3 px-4 mb-5 lg:mb-0">
                            <h1 className="text-5xl xs:text-6xl text-gray-900 mb-4">
                                <span style={Skywalks}>What our users </span>
                                <span className="font-serif font-bold italic">said</span>
                            </h1>
                            <p className="text-gray-500 text-base lg:text-xl">Risus viverra justo sagittis vestibulum metus.</p>
                        </div>
                        <div className="w-full lg:w-1/3 px-4">
                            <div className="flex items-center justify-start lg:justify-end">
                                <button onClick={() => setActiveSlide(activeSlide > 0 ? activeSlide - 1 : 0)} className="inline-flex mr-3 w-14 h-14 items-center justify-center rounded-full border border-gray-400 hover:border-[#3b44f6] text-gray-600 hover:text-[#3b44f6] transition duration-200">
                                    <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.08 6.62C0.127594 6.49725 0.19896 6.38511 0.29 6.29L5.29 1.29C5.38324 1.19676 5.49393 1.1228 5.61575 1.07234C5.73757 1.02188 5.86814 0.995911 6 0.995911C6.2663 0.995911 6.5217 1.1017 6.71 1.29C6.80324 1.38324 6.8772 1.49393 6.92766 1.61575C6.97812 1.73758 7.00409 1.86814 7.00409 2C7.00409 2.2663 6.8983 2.5217 6.71 2.71L3.41 6H11C11.2652 6 11.5196 6.10536 11.7071 6.2929C11.8946 6.48043 12 6.73479 12 7C12 7.26522 11.8946 7.51957 11.7071 7.70711C11.5196 7.89465 11.2652 8 11 8H3.41L6.71 11.29C6.80373 11.383 6.87812 11.4936 6.92889 11.6154C6.97966 11.7373 7.0058 11.868 7.0058 12C7.0058 12.132 6.97966 12.2627 6.92889 12.3846C6.87812 12.5064 6.80373 12.617 6.71 12.71C6.61704 12.8037 6.50644 12.8781 6.38458 12.9289C6.26272 12.9797 6.13201 13.0058 6 13.0058C5.86799 13.0058 5.73728 12.9797 5.61542 12.9289C5.49356 12.8781 5.38296 12.8037 5.29 12.71L0.29 7.71C0.19896 7.6149 0.127594 7.50275 0.08 7.38C-0.0200176 7.13654 -0.0200176 6.86346 0.08 6.62Z" fill="currentColor"></path>
                                    </svg>
                                </button>
                                <button onClick={() => setActiveSlide(activeSlide < slides.length - 1 ? activeSlide + 1 : slides.length - 1)} className="inline-flex w-14 h-14 items-center justify-center rounded-full bg-[#3b44f6] hover:bg-blue-200 text-white transition duration-200">
                                    <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.92 6.62C11.8724 6.49725 11.801 6.38511 11.71 6.29L6.71 1.29C6.61676 1.19676 6.50607 1.1228 6.38425 1.07234C6.26243 1.02188 6.13186 0.995911 6 0.995911C5.7337 0.995911 5.4783 1.1017 5.29 1.29C5.19676 1.38324 5.1228 1.49393 5.07234 1.61575C5.02188 1.73758 4.99591 1.86814 4.99591 2C4.99591 2.2663 5.1017 2.5217 5.29 2.71L8.59 6H1C0.734784 6 0.48043 6.10536 0.292893 6.2929C0.105357 6.48043 0 6.73479 0 7C0 7.26522 0.105357 7.51957 0.292893 7.70711C0.48043 7.89465 0.734784 8 1 8H8.59L5.29 11.29C5.19627 11.383 5.12188 11.4936 5.07111 11.6154C5.02034 11.7373 4.9942 11.868 4.9942 12C4.9942 12.132 5.02034 12.2627 5.07111 12.3846C5.12188 12.5064 5.19627 12.617 5.29 12.71C5.38296 12.8037 5.49356 12.8781 5.61542 12.9289C5.73728 12.9797 5.86799 13.0058 6 13.0058C6.13201 13.0058 6.26272 12.9797 6.38458 12.9289C6.50644 12.8781 6.61704 12.8037 6.71 12.71L11.71 7.71C11.801 7.6149 11.8724 7.50275 11.92 7.38C12.02 7.13654 12.02 6.86346 11.92 6.62Z" fill="currentColor"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="mb-6 lg:mb-10 w-full flex gap-[10%] transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${activeSlide * 110}%)` }}>
                        {slides.map((slide, index) => (
                            <div key={index} ref={slideRefs[index]} className="w-full flex-shrink-0">
                                <div className="px-2 lg:p-4 py-6 bg-[#fddb60] rounded-3xl">
                                    <div className="flex flex-wrap ">
                                        <div className="w-full md:w-2/5 px-4 mb-6 lg:mb-0">
                                            <img className="h-[200px] lg:h-[400px] block w-full  object-cover rounded-3xl" src={slide.image} alt="" />
                                        </div>
                                        <div className="w-full md:w-3/5 px-4 flex flex-col items-center justify-center">
                                            <div>
                                                <h4 style={Skywalks} className="text-3xl lg:text-4xl font-semibold text-[#262626] mb-6">{slide.quote}</h4>
                                                <p style={Lato} className="text-[#262626] mb-5">{slide.text}</p>
                                                <span className="font-semibold font-serif text-2xl lg:text-3xl italic text-[#3b44cf] ">{slide.name}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex items-center justify-center">
                        {slides.map((_, index) => (
                            <div key={index} onClick={() => { setActiveSlide(index); }} className={`${activeSlide === index ? 'bg-[#3b44cf]' : 'bg-gray-400 hover:bg-blue-200'} inline-block mr-1 w-7 h-1 cursor-pointer`}></div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonial;