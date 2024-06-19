import React, { useState } from 'react';
import TeamMemberCard from '../../components/TeamMemberCard/TeamMemberCard';
import teamData from '../../data/teamData';
import './TeamPage.css';

const TeamPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  const handleLearnMoreClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="team-page">
      <div className={`carousel ${isModalOpen ? 'modal-active' : ''}`}>
        <TeamMemberCard 
          member={teamData[currentIndex]} 
          onLearnMore={handleLearnMoreClick} 
          isModal={isModalOpen} 
          onClose={handleCloseModal}
        />
        {!isModalOpen && (
          <div className="dots">
            {teamData.map((_, index) => (
              <span
                key={index}
                className={`dot ${index === currentIndex ? 'active' : ''}`}
                onClick={() => handleDotClick(index)}
              ></span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TeamPage;
