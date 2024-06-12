import React from 'react'
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Mail from "./components/mail/Mail";
import Office from "./components/office/Office";
import Social from "./components/social/Social";
import Navpage from "./components/navbar/Navpage";
import Footer from "./components/footer/footer";
import './Contact.css';
const Contact = () => {
  return (
    <div>
      <Hero />
      <Mail />
      <Office />
      <Social />
      <Footer />
    </div>
  )
}

export default Contact