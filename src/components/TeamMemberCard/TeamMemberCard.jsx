import React from 'react';
import './TeamMemberCard.css'; // Ensure the CSS file is created and styled

const TeamMemberCard = ({ member, onLearnMore }) => {
  return (
    <div className="team-member-card" onClick={onLearnMore}>
      <div className="left-section">
        <img src={member.blackImage} alt={`${member.name}`} className="profile-pic" />
        <div className="name-role">
          <h2 className="member-name">{member.name}</h2>
          <h3 className="member-role">{member.role}</h3>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberCard;
