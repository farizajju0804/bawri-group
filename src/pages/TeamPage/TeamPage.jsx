import React, { useState } from 'react';
import TeamMemberCard from '../../components/TeamMemberCard/TeamMemberCard';
import ModalCardSection from '../../components/TeamMemberCard/ModalCardSection';
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
        <p className="team-description poppins-regular">
        At Bawri Group, our strength lies in our people. From pioneering leaders to dedicated team members, each individual contributes to our shared vision of excellence, innovation, and growth. Our team embodies a rich tapestry of diverse talents, united by a commitment to pushing boundaries and achieving remarkable milestones.
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
        <ModalCardSection 
          member={selectedMember} 
          onClose={handleCloseModal} 
        />
      )}
    </div>
  );
};

export default TeamPage;
