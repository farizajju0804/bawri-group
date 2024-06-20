import React from 'react';

const ImageCardMarquee = ({ cards }) => {
  const Skywalks = {
    fontFamily: 'Skywalks',
    color: "#262626",
    fontWeight: 'normal'
  };
  const Lato = {
    fontFamily: 'Lato',
    color: "#262626",
  };

  return (
    <div className="w-full bg-[#FEE8D0] text-[#262626] flex flex-col items-center py-10">
      <h1 style={Skywalks} className="text-3xl lg:text-5xl font-bold mb-8 z-10">15+ Industries</h1>
      <div className="relative w-full h-full flex-1 p-4 overflow-hidden">
        <div className="marquee">
          <div className="marquee-inner flex space-x-8">
            {cards.map((card, index) => (
              <div
                key={index}
                className="inline-block bg-white px-2 pt-2 rounded-xl shadow-lg transform transition-transform duration-300"
                style={{ width: '200px', height: '220px' }}
              >
                <img
                  src={card.imageSrc}
                  alt={card.title}
                  className="w-full h-2/3  rounded-lg"
                />
                <div className="px-2 py-4">
                  <p style={Lato} className="text-[#262626] text-base font-semibold">{card.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageCardMarquee;
