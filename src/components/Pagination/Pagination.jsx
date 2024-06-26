import React from 'react';
import { useNavigate } from 'react-router-dom';
import {MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import './Pagination.css';

const Pagination = ({ currentCompany, prevCompany, nextCompany, basePath }) => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    window.scrollTo(0, 0);
    navigate(path);
  };

  return (
    <div className="pagination">
      <button
        onClick={() => handleNavigation(prevCompany ? `${basePath}/${prevCompany.id}` : basePath)}
        className="pagination-button-1 flex items-center justify-center gap-2"
      >
        <MdArrowBackIos />
        {prevCompany ? ` ${prevCompany.companyName}, ${prevCompany.year}` : ' Home'}
      </button>
      {/* <div className="current-company">
        {`${currentCompany.companyName} - ${currentCompany.year}`}
      </div> */}
      <button
        onClick={() => handleNavigation(nextCompany ? `${basePath}/${nextCompany.id}` : basePath)}
        className="pagination-button flex items-center justify-center gap-2"
      >
        {nextCompany ? `${nextCompany.companyName}, ${nextCompany.year} ` : 'Home '}
        <MdArrowForwardIos />
      </button>
    </div>
  );
};

export default Pagination;
