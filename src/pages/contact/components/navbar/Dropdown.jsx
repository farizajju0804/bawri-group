import React, { useState } from "react";
import "./Dropdown.css";
import arrow from "../../assets/arrow-down.svg";
import { Link } from "react-router-dom"
import nav1 from "../../assets/nav1.png"
import nav2 from "../../assets/nav2.png"
import nav3 from "../../assets/nav3.png"

const Dropdown = ({ title, options, setImage, setIsPageOpen, showDropdown }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  function handleClick() {
    setIsPageOpen(false);
  }

  const handleChangeImage = () => {
    switch (title) {
      case "Our Companies":
        setImage(
          {nav3}
        );
        break;
      case "About Us":
        setImage(
          {nav2}
        );
        break;
      case "Contact Us":
        setImage(
          {nav1}
        );
        break;
    }
  };

  return (
    <div className="dropdown" onMouseOver={handleChangeImage}>
      <div className="dropdown-title-parent" onClick={handleOpen}>
        {showDropdown ? <p className="dropdown-title">{title}</p> : <Link onClick={handleClick} to={options[0].link} style={{textDecoration:'none'}}>
          <p className="dropdown-title">{title}</p>
        </Link>}

        {options.length > 0 && showDropdown && <img src={arrow} className="arrow" />}
      </div>

      {options.length > 0 && showDropdown && isOpen && (
        <ul className="dropdown-content-parent" >
          {options.map((option, index) => (
            <li key={index}>
              <Link onClick={handleClick} to={option.link} className="dropdown-item" >
                {option.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
