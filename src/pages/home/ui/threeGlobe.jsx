// import React, { useEffect } from "react";
// import { Scene, Fog, PerspectiveCamera, Vector3, TextureLoader, MeshStandardMaterial } from "three";
// import { useThree, Canvas, extend } from "@react-three/fiber";
// import { OrbitControls } from "@react-three/drei";
// import countries from "./globe.json";

// extend({ ThreeGlobe });

// const RING_PROPAGATION_SPEED = 3;
// const aspect = 1.2;
// const cameraZ = 300;

// export const WebGLRendererConfig = () => {
//   const { gl, size } = useThree();

//   useEffect(() => {
//     gl.setPixelRatio(window.devicePixelRatio);
//     gl.setSize(size.width, size.height);
//     gl.setClearColor(0xffaaff, 0);
//   }, [gl, size]);

//   return null;
// };

// export const World = (props) => {
//   const { globeConfig } = props;
//   const scene = new Scene();
//   scene.fog = new Fog(0xffffff, 400, 2000);
//   return (
//     <Canvas scene={scene} camera={new PerspectiveCamera(50, aspect, 180, 1800)}>
//       <WebGLRendererConfig />
//       <ambientLight color={globeConfig.ambientLight} intensity={0.6} />
//       <directionalLight
//         color={globeConfig.directionalLeftLight}
//         position={new Vector3(-400, 100, 400)}
//       />
//       <directionalLight
//         color={globeConfig.directionalTopLight}
//         position={new Vector3(-200, 500, 200)}
//       />
//       <pointLight
//         color={globeConfig.pointLight}
//         position={new Vector3(-200, 500, 200)}
//         intensity={0.8}
//       />
//       <Globe {...props} />
//       <OrbitControls
//         enablePan={false}
//         enableZoom={false}
//         minDistance={cameraZ}
//         maxDistance={cameraZ}
//         autoRotateSpeed={1}
//         autoRotate={true}
//         minPolarAngle={Math.PI / 3.5}
//         maxPolarAngle={Math.PI - Math.PI / 3}
//       />
//     </Canvas>
//   );
// };
