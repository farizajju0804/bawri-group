import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { storyData } from './assets/storyData';
import StorySlide from '../../components/Story-page/StorySlide';
import HorizontalScroll from 'react-scroll-horizontal';
import './Story.css'; // Ensure this file contains necessary styles

const StoryPage = () => {
  const { partId } = useParams();
  const part = storyData[partId];

  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);

  const handleDotClick = (index) => {
    setCurrentStoryIndex(index);
    const element = document.getElementById(`story-${index}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScroll = () => {
    const elements = part.stories.map((_, index) => document.getElementById(`story-${index}`));
    const currentIndex = elements.findIndex((element) => {
      const rect = element.getBoundingClientRect();
      return rect.left >= 0 && rect.left <= window.innerWidth;
    });
    if (currentIndex !== -1 && currentIndex !== currentStoryIndex) {
      setCurrentStoryIndex(currentIndex);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [currentStoryIndex]);

  if (!part) {
    return <div>Part not found</div>;
  }

  const years = part.stories.map(story => story.year);

  return (
    <div className="story-page" style={{ height: '100%', width: '100%', overflow: 'hidden' }}>
      <HorizontalScroll reverseScroll={true}  >
        {part.stories.map((story, index) => (
          <div id={`story-${index}`} key={index} className="story-slide">
            <StorySlide
              year={story.year}
              name={story.name}
              image={story.image}
              content={story.content}
              bgImage={part.bgImage}
              totalStories={part.stories.length}
              onDotClick={handleDotClick}
              storyIndex={index}
              years={years}
            />
          </div>
        ))}
      </HorizontalScroll>
    </div>
  );
};

export default StoryPage;
