import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Breadcrumb.css';

const Breadcrumb = ({ type, categoryName, companyName,path }) => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };
 
  return (
    <div className="breadcrumb">
      <span onClick={() => handleNavigation(`/${path}`)} className="breadcrumb-home">
        {type.charAt(0).toUpperCase() + type.slice(1)}
      </span>
      <span className="breadcrumb-separator">/</span>
      <span className="breadcrumb-item">
        {companyName || categoryName}
      </span>
    </div>
  );
};

export default Breadcrumb;
