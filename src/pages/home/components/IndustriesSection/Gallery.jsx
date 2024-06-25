import React, { useState, useMemo } from 'react';
import { Gallery, GalleryScene, GalleryItem } from "react-gallery-3d";
import { AiOutlineClose } from 'react-icons/ai';
import { useTexture } from '@react-three/drei';
import { MeshStandardMaterial } from 'three';

const Skywalks = {
  fontFamily: 'Skywalks',
  fontWeight: 'normal'
};

const Gallery3d = () => {
  const isMobile = window.innerWidth < 767;
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedText, setSelectedText] = useState('');

  const handleImageClick = (src, text, event) => {
    event.stopPropagation();
    console.log('clickedImage', src);
    if (!selectedImage) {
      setSelectedImage(src);
      setSelectedText(text);
    }
  };

  const closeModal = () => {
    setSelectedImage(null);
    setSelectedText('');
  };

  const GalleryContent = () => {
    const textures = useTexture([
      "https://res.cloudinary.com/drlyyxqh9/image/upload/v1718970614/Bawri%20Group/Landing%20Page/glimpses/IMG-20230526-WA0020_ld31dw.jpg",
      "https://res.cloudinary.com/drlyyxqh9/image/upload/v1718970616/Bawri%20Group/Landing%20Page/glimpses/IMG-20230526-WA0021_gclrdy.jpg",
      "https://res.cloudinary.com/drlyyxqh9/image/upload/v1718970609/Bawri%20Group/Landing%20Page/glimpses/IMG-20230526-WA0010_gbeoll.jpg",
      "https://res.cloudinary.com/drlyyxqh9/image/upload/v1718970612/Bawri%20Group/Landing%20Page/glimpses/IMG-20230526-WA0014_p6vsbh.jpg",
      "https://res.cloudinary.com/drlyyxqh9/image/upload/v1718970610/Bawri%20Group/Landing%20Page/glimpses/IMG-20230526-WA0011_cy4ou4.jpg",
      "https://res.cloudinary.com/drlyyxqh9/image/upload/v1718970613/Bawri%20Group/Landing%20Page/glimpses/IMG-20230526-WA0019_sea5jl.jpg",
      "https://res.cloudinary.com/drlyyxqh9/image/upload/v1718970610/Bawri%20Group/Landing%20Page/glimpses/IMG-20230521-WA0006_m3ax90.jpg"
    ]);

    const texts = [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Vivamus lacinia odio vitae vestibulum vestibulum.",
      "Cras ultricies ligula sed magna dictum porta.",
      "Praesent sapien massa, convallis a pellentesque nec.",
      "Nulla porttitor accumsan tincidunt. Curabitur non nulla.",
      "Vestibulum ac diam sit amet quam vehicula elementum.",
      "Donec rutrum congue leo eget malesuada. Curabitur aliquet quam."
    ];

    const customMaterial = useMemo(() => {
      return new MeshStandardMaterial({
        transparent: true,
        opacity: 1,
      });
    }, []);

    return (
      <Gallery>
        {textures.map((texture, index) => (
          <GalleryItem
            key={index}
            material={customMaterial.clone()}
            onClick={(e) => handleImageClick(texture.image.src, texts[index], e)}
          >
            <meshStandardMaterial attach="material" map={texture} />
          </GalleryItem>
        ))}
      </Gallery>
    );
  };

  return (
    <main
      className='flex items-center justify-center flex-col w-full bg-[#262626] p-4'
      style={{
        height: isMobile ? '70vh' : '120vh'
      }}
    >
      <h1 style={Skywalks} className='text-white text-5xl pt-8 text-center'>
        Glimpses To Remember
      </h1>
      
      <GalleryScene 
        style={{
          width: '100%',
          height: '100%'
        }}
        backgroundColor="#262626"
        orbitControls={{
          enableDamping: true,
          enableZoom: false,
          dampingFactor: 0.01,
          autoRotate: true,
          autoRotateSpeed: 1,
        }}
        disableGround={true}
        disableFog={true}

        camera={{
          fov: isMobile ? 60 : 45,
          position: [0, 10, 150],
        }}
      >
        <GalleryContent />
      </GalleryScene>

      {selectedImage && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-[550] transition-opacity duration-300" onClick={closeModal}>
          <div className="relative flex flex-col bg-white rounded-lg overflow-hidden shadow-lg max-w-3xl mx-4" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 text-xl text-gray-700 hover:text-gray-900 transition-colors duration-200"
              style={{ 
                background: 'white',
                borderRadius: '50%',
                padding: '4px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
              }}
            >
              <AiOutlineClose />
            </button>
            <img src={selectedImage} alt="Selected" className="object-cover w-full h-[90%] max-h-[80vh]" />
            <div className="p-4">
              <p className="text-gray-700 text-base">{selectedText}</p>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

export default Gallery3d;
