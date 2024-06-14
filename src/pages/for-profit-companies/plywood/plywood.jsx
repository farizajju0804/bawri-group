import React from 'react';
import CompanyImageHeader from '../../../components/company-image-header/company-image-header';
import TitleAndYear from '../../../components/titleAndYear/titleAndYear';
import TestimonialCompany from '../../../components/testimonial-company/testimonialCompany';
import HowWeStarted from '../../../components/how-we-started/howWeStarted';
import bg from "./assets/wooden.jpeg";
import left from "./assets/bed1.png"
import right from "./assets/table1.png"
import aboutImg from './assets/plywoodlogo.svg'
import AboutCompany from '../../../components/About-company/aboutCompany';
import HighlightMomentprofit from '../../../components/highlight-moment-1/highlightMomentprofit';
import highlightImg from './assets/drawing.png'
import './style.css'
const Plywood = () => {
  return (
    <div>
        <CompanyImageHeader 
            categoryName="Plywood" 
            bgImageUrl="https://res.cloudinary.com/drlyyxqh9/image/upload/v1718197781/email%20images/2150797654-66699e03d8ec3_ghri8n.webp" 
        />
        <TitleAndYear 
        companyName="Nagaland Plywoods" 
        year="2002" 
        bgImageUrl="https://res.cloudinary.com/drlyyxqh9/image/upload/v1718197781/email%20images/2150797654-66699e03d8ec3_ghri8n.webp" 
        />

        <TestimonialCompany 
        authorName="Rajesh Bhagra"
        testimonialContent={[
            "I am an avid antique enthusiast. Saroj plywood' fine eye for identifying and finding a range of global plywood, customer service, and reverence for history really stand out.",
            "The quality of their collection is exemplary. They are honest and knowledgeable professionals with a passion for plywood. Each interaction has been wonderful."
        ]}
        />

        <HowWeStarted
          content={[
            "It was an​ ordinary day​ that turned out to be extraordinary. A serendipitous find​ at a book fair -​ a ​pristine ​leather-bound antique atlas priced at a mere dollar​ ​​sparked an unforeseen bidding war among potential buyers.",
            "It resulted in a 300-fold return. ​This ​was beyond the realm of imagination​. It ​​was a pivotal moment that unveiled the potential of the antique​s​ industry. Saroj plywood was born shortly thereafter."
          ]}
          bgImageUrl={bg}
          leftImageUrl={left}
          rightImageUrl={right}
          headingColor={"white"}
        />

        <AboutCompany
        aboutImg={aboutImg}
        companyName="Nagaland Plywoods"
        content={[
            "Before setting up Nagaland Plywood, we realized manufacturers were using only two types of timber (makai and halong) to make plywood. We pioneered using underexplored varieties of timber. Plywood was made in 3, 5, or 7 layers.",
            "Manufacturers used the same quality of timber for the inner and outer layers, and made all the layers equal in thickness. We innovated using superior timber only for the outer layers and also pioneered making the inner layers of timber twice as thick as the outer layers."
        ]}

        />

        <HighlightMomentprofit
         year="2012"
         location="Kolkata, India"
         content={[
            "Lorem ipsum dolor sit amet consectetur. A mi urna ornare eu auctor tincidunt malesuada ut porta. Lorem ipsum dolor sit amet consectetur. A mi urna ornare eu auctor tincidunt malesuada ut porta."
         ]}
        momentName={"Moment Name"}
        highlightImg={highlightImg}
        />
    </div>
  );
};

export default Plywood;
