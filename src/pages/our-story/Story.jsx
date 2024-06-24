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
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setHeight(window.innerHeight);
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const getWidthCal = (part, isMobile) => {
    if (isMobile) {
      switch (partId) {
        case 'part1':
          return 101.5;
        case 'part2':
          return 100.7;
        default:
          return 100.5;
      }
    } else {
      return 100;
    }
  };

  const widthCal = getWidthCal(part, isMobile);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", `-${widthCal * (part.stories.length - 1)}vw`]);

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
    if (!isMobile) {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, [currentStoryIndex, isMobile]);

  if (!part) {
    return <div>Part not found</div>;
  }

  const years = part.stories.map(story => story.year);

  return (
    <div className="story-page" style={{ background: `url(${part.bgImage}) no-repeat center center / cover` }}>
      {isMobile ? (
        <div className="vertical-story-container">
          {part.stories.map((story, index) => (
            <div id={`story-${index}`} key={index} className="story-slide" >
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
        </div>
      ) : (
        <section ref={targetRef} className="relative" style={{ height: `${100 * (part.stories.length - 1)}vh` }}>
          <div className="sticky top-0 flex h-screen items-center overflow-hidden" style={{ height: '100vh' }}>
            <motion.div style={{ x, height: `100vh` }} className="flex">
              {part.stories.map((story, index) => (
                <div id={`story-${index}`} key={index} className="story-slide" style={{ height: `100vh` }}>
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
      )}
    </div>
  );
};

export default StoryPage;
