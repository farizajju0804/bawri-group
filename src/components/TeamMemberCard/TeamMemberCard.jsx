// src/components/TeamMemberCard.js

import React from 'react';
import { IoClose } from 'react-icons/io5';
import './TeamMemberCard.css'; // Ensure the CSS file is created and styled

const TeamMemberCard = ({ member, onLearnMore, isModal, onClose }) => {
  return (
    <div className={`team-member-card ${isModal ? 'modal-card' : ''}`}>
      <div className={`left-section ${isModal ? 'left-modal' : ''}`}>
        <img src={isModal ? member.yellowImage : member.blackImage} alt={`${member.name}`} className="profile-pic" />
        <div className="name-role">
          <h2 className={`member-name ${isModal ? 'modal-name' : ''}`}>{member.name}</h2>
          {!isModal && (
          <h3 className="member-role">{member.role}</h3>
          )
          }
          {/* <h3 className={`member-role ${isModal ? 'modal-role' : 'hide-role'}`}>{member.role}</h3> */}
        </div>
      </div>
      {!isModal && (
        <div className="right-section">
          <p className="nickname">"{member.nickname}"</p>
          <button className="learn-more-btn" onClick={onLearnMore}>Learn More</button>
        </div>
      )}
      {isModal && (
        <div className="modal-content">
          <div className="top-header-model">
          <button className="close-overlay-btn" onClick={onClose}><IoClose size={24} fill='black' /></button>
          <h3 className='other-roles'>{member.otherRoles}</h3>
          </div>
          <p>{member.bio}</p>
        </div>
      )}
    </div>
  );
};

export default TeamMemberCard;
