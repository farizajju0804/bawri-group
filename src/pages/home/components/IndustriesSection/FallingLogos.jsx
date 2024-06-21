import React, { useEffect, useRef } from 'react';

const FallingLogos = () => {
  const containerRef = useRef(null);
  const observerRef = useRef(null);
  const hasDropped = useRef(false);

  useEffect(() => {
    const logos = [
      'https://res.cloudinary.com/drlyyxqh9/image/upload/v1718807949/Bawri%20Group/company-logos/left2_k9o9wo.png',
      'https://res.cloudinary.com/drlyyxqh9/image/upload/v1718807949/Bawri%20Group/company-logos/right2_kezpk3.png',
      'https://res.cloudinary.com/drlyyxqh9/image/upload/v1718807949/Bawri%20Group/company-logos/left1_knayej.png',
      'https://res.cloudinary.com/drlyyxqh9/image/upload/v1718807790/Bawri%20Group/company-logos/right1_sthu5b.png'
    ];

    const isMobile = window.innerWidth < 768;

    const createLogoElement = (src, index) => {
      const img = document.createElement('img');
      img.src = src;
      img.style.width = '140px';
      img.style.height = '70px';
      img.style.position = 'absolute';
      img.style.top = '-200px';
      img.style.left = isMobile ? '50%' : `${(index * 25) + 10}%`;
      img.style.transform = isMobile ? 'translateX(-50%)' : 'none';
      img.style.transition = 'top 2s ease, transform 0.5s ease';
      return img;
    };

    const dropLogos = () => {
      logos.forEach((logo, index) => {
        const logoElement = createLogoElement(logo, index);
        containerRef.current.appendChild(logoElement);

        setTimeout(() => {
          const topPosition = isMobile ? `${index * 130 + 30}px` : '10vh';
          logoElement.style.top = topPosition;
        }, 100);

        setTimeout(() => {
          logoElement.style.transform += ' translateY(-10px)';
        }, 2100);

        setTimeout(() => {
          logoElement.style.transform += ' translateY(0)';
        }, 2600);
      });
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !hasDropped.current) {
          dropLogos();
          hasDropped.current = true;
        }
      });
    });

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div style={{ width: '100%', overflow: 'hidden' , padding: '20px'}}>
      <div style={{ position: 'relative', height: '20vh', overflow: 'hidden',marginBottom: '30px' }}>
        <h1 style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          fontSize: '48px',
          fontWeight: 'normal',
          fontFamily: 'Skywalks',
          color: '#262626',
          textAlign: 'center',
          zIndex: 10,
          padding: '20px',
          
        }}>
          25+ Companies
        </h1>
      </div>
      <div ref={observerRef} style={{ position: 'relative', width: '100%', height: `${window.innerWidth < 768 ? '70vh' : '40vh'}`, overflow: 'hidden' }}>
        <div ref={containerRef} style={{ position: 'relative', width: '100%', height: '100%' }} />
      </div>
    </div>
  );
};

export default FallingLogos;
