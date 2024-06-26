import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './road.css';

gsap.registerPlugin(ScrollTrigger);

const sections = [
  { id: 1, link: "/profit/vinay", image: "left.png", title: "Vinay Cements" },
  { id: 13, link: "/profit/calcom", image: "left7.png", title: "Calcom Cements" },
  { id: 2, link: "/profit/thaella", image: "left2.png", title: "Thaella" },
  { id: 3, link: "/profit/mansions", image: "left3.png", title: "Bawri Mansions" },
  { id: 4, link: "/profit/diduce", image: "left4.png", title: "Diduce" },
  { id: 5, link: "/profit/oleo-resin", image: "left5.png", title: "Oleo Resin" },
  { id: 6, link: "/profit/ikaaya", image: "left6.png", title: "Ikaaya" },
  { id: 7, link: "/profit/nagaland-plywoods", image: "right.png", title: "Plywood" },
  { id: 8, link: "/profit/timber", image: "right2.png", title: "Bawri Timber" },
  { id: 9, link: "/profit/luxury", image: "right3.png", title: "PrideNPrecious" },
  { id: 10, link: "/profit/cijen", image: "right4.png", title: "Cijen" },
  { id: 11, link: "/profit/quantta", image: "right5.png", title: "Quantta" },
  { id: 12, link: "/profit/antiques", image: "right6.png", title: "Saroj Antiques" },


];

const Road = () => {
  useEffect(() => {
    sections.forEach((section, index) => {
      gsap.fromTo(
        `#board-${section.id}`,
        { y: -0, opacity: 1 },
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
              <p className='fp-category-title poppins-regular'>{section.title}</p>
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