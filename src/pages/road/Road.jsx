import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './road.css';

gsap.registerPlugin(ScrollTrigger);

const sections = [
  { id: 1, link: "/vinay", image: "left.png", title: "Vinay" },
  { id: 2, link: "/thaella", image: "left2.png", title: "Thaella" },
  { id: 3, link: "/plywood", image: "left3.png", title: "Plywood" },
  { id: 4, link: "/retail", image: "left4.png", title: "Retail" },
  { id: 5, link: "/cijen", image: "left5.png", title: "Cijen" },
  { id: 6, link: "/antiques", image: "left6.png", title: "Antiques" },
  { id: 7, link: "/antiques", image: "right.png", title: "Antiques" },
  { id: 8, link: "/antiques", image: "right2.png", title: "Antiques" },
  { id: 9, link: "/antiques", image: "right3.png", title: "Antiques" },
  { id: 10, link: "/antiques", image: "right4.png", title: "Antiques" },
  { id: 11, link: "/antiques", image: "right5.png", title: "Antiques" },
  { id: 12, link: "/antiques", image: "right6.png", title: "Antiques" },


];

const Road = () => {
  useEffect(() => {
    sections.forEach((section, index) => {
      gsap.fromTo(
        `#board-${section.id}`,
        { y: -100, opacity: 0 },
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
  }, []);

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
              <a href={section.link}>
              <p className='fp-category-title'>{section.title}</p>
                <img src={require(`./assets/${section.image}`)} alt={section.title} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Road;
