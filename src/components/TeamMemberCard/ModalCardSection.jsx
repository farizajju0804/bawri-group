import React from 'react';
import { IoClose } from 'react-icons/io5';
import './ModalCardSection.css'; // Ensure the CSS file is created and styled

const ModalCardSection = ({ member, onClose }) => {
  return (
    <div className="modal-card-section">
      <div className="modal-card-content">
        <button className="close-overlay-btn" onClick={onClose}>
          <IoClose size={24} fill='black' />
        </button>
        <div className="left-section-1">
          <img src={member.yellowImage} alt={`${member.name}`} className="profile-pic" />
          <div className="name-role">
            <h2 className="modal-name">{member.name}</h2>
          </div>
        </div>
        <div className="modal-text-content">
          <h3 className='other-roles'>{member.otherRoles}</h3>
          <p>{member.bio}</p>
        </div>
      </div>
    </div>
  );
};

export default ModalCardSection;
