import React, { useState } from 'react';
import TeamMemberCard from '../../components/TeamMemberCard/TeamMemberCard';
import teamData from '../../data/teamData';
import './TeamPage.css';

const TeamPage = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  const handleLearnMoreClick = (member) => {
    setSelectedMember(member);
  };

  const handleCloseModal = () => {
    setSelectedMember(null);
  };

  return (
    <div className="team-page">
      <div className="intro-section">
        <h1 className="team-title">Our Team</h1>
        <p className="team-description">
          Welcome to our team page! Meet the amazing people who make everything possible.
        </p>
      </div>
      <div className="team-grid">
        {teamData.map((member, index) => (
          <TeamMemberCard 
            key={index} 
            member={member} 
            onLearnMore={() => handleLearnMoreClick(member)} 
            isModal={false}
          />
        ))}
      </div>
      {selectedMember && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content-wrapper" onClick={(e) => e.stopPropagation()}>
            <TeamMemberCard 
              member={selectedMember} 
              isModal={true} 
              onClose={handleCloseModal} 
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default TeamPage;
