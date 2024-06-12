import { useState } from "react";
import "./Office.css";
import kolkata from "../../assets/kolkata.png";
import mumbai from "../../assets/mumbai.png";
import sanfranscisco from "../../assets/sanfranscisco.png";

const Office = () => {
  const optionsData = [
    {
      id: 0,
      name: "Option 1",
      imageUrl: kolkata,
      title: "Kolkata, India",
      addressLine1: "3A 7th Floor, Ecospace,",
      addressLine2: "New Town, Kolkata - 700156",
    },
    {
      id: 1,
      name: "Option 2",
      imageUrl: mumbai,
      title: "Mumbai, India",
      addressLine1: "3A 7th Floor, Ecospace,",
      addressLine2: "New Town, Kolkata - 700156",
    },
    {
      id: 2,
      name: "Option 3",
      imageUrl: sanfranscisco,
      title: "Sanfransisco, USA",
      addressLine1: "3A 7th Floor, Ecospace,",
      addressLine2: "New Town, Kolkata - 700156",
    },
  ];

  const [selectedOption, setSelectedOption] = useState(0);

  const handleOptionClick = (id) => {
    setSelectedOption(id);
  };

  return (
    <div>
      <div className="title-container">
        <p className="title">Our Offices</p>
      </div>

      <div className="option-container">
        <div className="image-container">
          <img
            src={optionsData[selectedOption].imageUrl}
            alt="Selected Option"
            className="selected-image"
          />
        </div>
        <div className="options">
          {optionsData.map((option) => (
            <div
              key={option.id}
              className={`option ${
                selectedOption === option.id ? "selected" : ""
              }`}
              onClick={() => handleOptionClick(option.id)}
            >
              <div className="address-info">
                <p className="city-name">{option.title}</p>
                <div className="address-lines-container">
                  <p className="city-address">{option.addressLine1}</p>
                  <p className="city-address">{option.addressLine2}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Office;
