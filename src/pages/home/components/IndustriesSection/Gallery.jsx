import React from 'react'
import { Gallery, GalleryScene, ImageItem, SolidColorItem } from "react-gallery-3d";

const Gallery3d = () => {
  const Skywalks = {
    fontFamily: 'Skywalks',
    color: "#262626",
    fontWeight: 'normal'
  };
  const isMobile = window.innerWidth < 767
  return (
    <main
    className='flex items-center justify-center flex-col w-full  bg-[#fee8d0] p-4'
      style={{
        height: isMobile ? '70vh' : '100vh'
      }
      }
    >
      <h1 style={Skywalks} className='text-5xl py-8'>
        Glimpses
      </h1>
      
      <GalleryScene 
      style={{
        width : '100%',
        height : '80%'
      }}
      backgroundColor="#FEE8D0"
      orbitControls={{
    enableDamping: true,
    enableZoom: false,
    dampingFactor: 0.01,
    autoRotate: true,
    autoRotateSpeed: 1,
  }}
  disableGround={true}
  camera={
    {
    fov: isMobile ? 60 : 45,
    position: [0, 10, 150],
    }
  }
  
  >
        <Gallery >
          <ImageItem src="https://picsum.photos/1280/720" />
          <ImageItem src="https://res.cloudinary.com/drlyyxqh9/image/upload/v1718287327/Bawri%20Group/Plywood/highlight-moment-plywoord_q8sqzl.webp" />
          <ImageItem src="https://res.cloudinary.com/drlyyxqh9/image/upload/v1718287515/Bawri%20Group/Plywood/wooden-666afc1c0043b_ehckiz.webp" />
          <ImageItem src="https://res.cloudinary.com/drlyyxqh9/image/upload/v1718287603/Bawri%20Group/Plywood/intro-plywood_wxzfdr.webp" />
          <ImageItem src="https://res.cloudinary.com/drlyyxqh9/image/upload/v1718294480/Bawri%20Group/Non%20Profit/Education/educationbg-666b0c43de640_bo7gvj.webp" />
        </Gallery>
      </GalleryScene>
    </main>

  )
}

export default Gallery3d