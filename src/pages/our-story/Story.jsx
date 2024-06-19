import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { motion, useTransform, useScroll } from 'framer-motion';
import { storyData } from './assets/storyData';
import StorySlide from '../../components/Story-page/StorySlide';
import './Story.css';

const StoryPage = () => {
  const { partId } = useParams();
  const part = storyData[partId];
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);
  const targetRef = useRef(null);
  const [height, setHeight] = useState(window.innerHeight);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Calculate the width to scroll exactly to the last slide
  const x = useTransform(scrollYProgress, [0, 1], ["0%", `-${100 * (part.stories.length - 1)}vw`]);

  useEffect(() => {
    const handleResize = () => {
      setHeight(window.innerHeight);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

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
    <div className="story-page" style={{ height: `${height}px` }}>
      <section ref={targetRef} className="relative" style={{ height: `${height * part.stories.length}px` }}>
        <div className="sticky top-0 flex h-screen items-center overflow-hidden" style={{ height: `${height}px` }}>
          <motion.div style={{ x, height: `${height}px` }} className="flex">
            {part.stories.map((story, index) => (
              <div id={`story-${index}`} key={index} className="story-slide" style={{ height: `${height}px` }}>
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
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default StoryPage;
