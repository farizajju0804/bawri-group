import React from 'react'

import Hero from "./components/hero/Hero";
import Mail from "./components/mail/Mail";
import Office from "./components/office/Office";
import Social from "./components/social/Social";

import './Contact.css';
const Contact = () => {
  return (
    <div>
      <Hero />
      <Mail />
      <Office />
      {/* <Social /> */}
      
    </div>
  )
}

export default Contact