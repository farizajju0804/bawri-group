// import React, { useEffect, useRef, useState } from "react";
// import { Color, TextureLoader } from "three";
// import ThreeGlobe from "three-globe";
// import { extend } from "@react-three/fiber";
// import countries from "./globe.json";

// extend({ ThreeGlobe });

// const RING_PROPAGATION_SPEED = 3;

// const hexToRgb = (hex) => {
//   var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
//   hex = hex.replace(shorthandRegex, function (m, r, g, b) {
//     return r + r + g + g + b + b;
//   });

//   var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
//   return result
//     ? {
//         r: parseInt(result[1], 16),
//         g: parseInt(result[2], 16),
//         b: parseInt(result[3], 16),
//       }
//     : null;
// };

// const genRandomNumbers = (min, max, count) => {
//   const arr = [];
//   while (arr.length < count) {
//     const r = Math.floor(Math.random() * (max - min)) + min;
//     if (arr.indexOf(r) === -1) arr.push(r);
//   }

//   return arr;
// };

// export const Globe = ({ globeConfig, data }) => {
//   const [globeData, setGlobeData] = useState(null);
//   const globeRef = useRef(null);

//   const defaultProps = {
//     pointSize: 1,
//     showAtmosphere: true,
//     atmosphereColor: "#ffffff",
//     atmosphereAltitude: 0.1,
//     polygonColor: "rgba(255,255,255,0.7)",
//     globeColor: "#1d072e",
//     emissive: "#000000",
//     emissiveIntensity: 0.1,
//     shininess: 0.9,
//     arcTime: 2000,
//     arcLength: 0.9,
//     rings: 1,
//     maxRings: 3,
//     ...globeConfig,
//   };

//   useEffect(() => {
//     if (globeRef.current) {
//       _buildData();
//       _buildMaterial();
//     }
//   }, [globeRef.current]);

//   const _buildMaterial = () => {
//     if (!globeRef.current) return;

//     const loader = new TextureLoader();
//     loader.load("/path/to/your/image.jpg", (texture) => {
//       const globeMaterial = new MeshStandardMaterial({
//         map: texture,
//         emissive: new Color(globeConfig.emissive),
//         emissiveIntensity: globeConfig.emissiveIntensity || 0.1,
//         shininess: globeConfig.shininess || 0.9,
//       });
//       globeRef.current.globeMaterial(globeMaterial);
//     });
//   };

//   const _buildData = () => {
//     const arcs = data;
//     let points = [];
//     for (let i = 0; i < arcs.length; i++) {
//       const arc = arcs[i];
//       const rgb = hexToRgb(arc.color);
//       points.push({
//         size: defaultProps.pointSize,
//         order: arc.order,
//         color: (t) => `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${1 - t})`,
//         lat: arc.startLat,
//         lng: arc.startLng,
//       });
//       points.push({
//         size: defaultProps.pointSize,
//         order: arc.order,
//         color: (t) => `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${1 - t})`,
//         lat: arc.endLat,
//         lng: arc.endLng,
//       });
//     }

//     // remove duplicates for same lat and lng
//     const filteredPoints = points.filter(
//       (v, i, a) =>
//         a.findIndex((v2) =>
//           ["lat", "lng"].every(
//             (k) => v2[k] === v[k]
//           )
//         ) === i
//     );

//     setGlobeData(filteredPoints);
//   };

//   useEffect(() => {
//     if (globeRef.current && globeData) {
//       globeRef.current
//         .hexPolygonsData(countries.features)
//         .hexPolygonResolution(3)
//         .hexPolygonMargin(0.7)
//         .showAtmosphere(defaultProps.showAtmosphere)
//         .atmosphereColor(defaultProps.atmosphereColor)
//         .atmosphereAltitude(defaultProps.atmosphereAltitude)
//         .hexPolygonColor(() => defaultProps.polygonColor);
//       startAnimation();
//     }
//   }, [globeData]);

//   const startAnimation = () => {
//     if (!globeRef.current || !globeData) return;

//     globeRef.current
//       .arcsData(data)
//       .arcStartLat((d) => d.startLat)
//       .arcStartLng((d) => d.startLng)
//       .arcEndLat((d) => d.endLat)
//       .arcEndLng((d) => d.endLng)
//       .arcColor((e) => e.color)
//       .arcAltitude((e) => e.arcAlt)
//       .arcStroke(() => [0.32, 0.28, 0.3][Math.round(Math.random() * 2)])
//       .arcDashLength(defaultProps.arcLength)
//       .arcDashInitialGap((e) => e.order)
//       .arcDashGap(15)
//       .arcDashAnimateTime(defaultProps.arcTime);

//     globeRef.current
//       .pointsData(data)
//       .pointColor((e) => e.color)
//       .pointsMerge(true)
//       .pointAltitude(0.0)
//       .pointRadius(2);

//     globeRef.current
//       .ringsData([])
//       .ringColor((e) => (t) => e.color(t))
//       .ringMaxRadius(defaultProps.maxRings)
//       .ringPropagationSpeed(RING_PROPAGATION_SPEED)
//       .ringRepeatPeriod(
//         (defaultProps.arcTime * defaultProps.arcLength) / defaultProps.rings
//       );
//   };

//   useEffect(() => {
//     if (!globeRef.current || !globeData) return;

//     const interval = setInterval(() => {
//       if (!globeRef.current || !globeData) return;
//       let numbersOfRings = genRandomNumbers(
//         0,
//         data.length,
//         Math.floor((data.length * 4) / 5)
//       );

//       globeRef.current.ringsData(
//         globeData.filter((d, i) => numbersOfRings.includes(i))
//       );
//     }, 2000);

//     return () => {
//       clearInterval(interval);
//     };
//   }, [globeRef.current, globeData]);

//   return (
//     <>
//       <threeGlobe ref={globeRef} />
//     </>
//   );
// };
