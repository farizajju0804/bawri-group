import React from 'react'
import { Gallery, GalleryScene, ImageItem, SolidColorItem } from "react-gallery-3d";

const Gallery3d = () => {
  return (
    <main
      style={{
        height: "100vh",
        width: "100vw",
      }}
    >
      <GalleryScene orbitControls={{
    enableDamping: true,
    enableZoom: false,
    dampingFactor: 0.01,
    autoRotate: true,
    autoRotateSpeed: 1,
  }}>
        <Gallery>
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