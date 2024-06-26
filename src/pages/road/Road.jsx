import React, { useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './road.css';

gsap.registerPlugin(ScrollTrigger);

const Road = () => {
  const [sections, setSections] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/companies.json');
        const data = await response.json();
        const sortedData = data.forProfit.sort((a, b) => parseInt(a.year) - parseInt(b.year));
        setSections(sortedData);
      } catch (error) {
        console.error('Error fetching the data', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    sections.forEach((section) => {
      gsap.fromTo(
        `#board-${section.id}`,
        { y: 0, opacity: 1 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: `#section-${section.id}`,
            start: "top center",
            end: "bottom center",
            scrub: true,
            markers: false, // Enable markers for debugging
          },
        }
      );
    });
  }, [sections]);

  return (
    <div className="road-main">
      <div className="road-header">
        <p className="road-header-text1">For-Profit</p>
        <p className="road-header-text2">Serving India Since</p>
        <p className="road-header-text3">1870</p>
      </div>
      <div className="road-container">
        <img src={require("./assets/roadbg.png")} alt="Road" className="road-image" />
        {sections.map((section, index) => (
          <div key={section.id} id={`section-${section.id}`} className={`road-section ${index % 2 === 0 ? 'left' : 'right'}`}>
            <div id={`board-${section.id}`} className="road-board">
              <a href={`/profit/${section.id}`}>
                <p className='fp-category-title poppins-regular'>{section.companyName}</p>
                <img src={section.boardImg} alt={section.companyName} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Road;
