import React, { useState } from "react";
import "./Navpage.css";
import Dropdown from "./Dropdown";

const Navpage = ({setIsOpen}) => {
  const [ourCompaniesOptions, setOurCompaniesOptions] = useState([
    {
      name: "Profit",
      link: "profit",
    },
    {
      name: "Non-Profit",
      link: "non-profit",
    },
  ]);

  const [aboutUsOptions, setAboutUsOptions] = useState([
    {
      name: "Mission",
      link: "mission",
    },
    {
      name: "Values",
      link: "values",
    },
    {
      name: "Story",
      link: "story",
    },
    {
      name: "Team",
      link: "team",
    },
  ]);

  const [contactUsOptions, setContactUsOptions] = useState([
    {
      name: "Contact Us",
      link: "contact"
    }
  ]);

  const [image, setImage] = useState(null);

  return (
    <div className="nav-page">
      <div className="inner-container">
        <div className="dropdown-container">
          <Dropdown
            title="Our Companies"
            options={ourCompaniesOptions}
            setImage={setImage}
            setIsPageOpen={setIsOpen}
            showDropdown={true}
          />
          <Dropdown
            title="About Us"
            options={aboutUsOptions}
            setImage={setImage}
            setIsPageOpen={setIsOpen}
            showDropdown={true}
          />
          <Dropdown title="Contact Us" options={contactUsOptions} setImage={setImage} showDropdown={false} setIsPageOpen={setIsOpen} />
        </div>
        <div className="image-container-1">
          {image && image.nav3 && <img className="dropdown-image" src={image.nav3} />}
          {image && image.nav2 && <img className="dropdown-image" src={image.nav2} />}
          {image && image.nav1 && <img className="dropdown-image" src={image.nav1} />}
        </div>
      </div>
    </div>
  );
};
export default Navpage;
