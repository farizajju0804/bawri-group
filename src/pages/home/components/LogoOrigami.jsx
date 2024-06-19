import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import './IndustriesSection/style.css'
export const DivOrigami = () => {
  return (
    <section className="origami flex h-100 w-full flex-col items-center justify-center gap-4 p-8">
        <h1>25+ Industries</h1>
      <LogoRolodex
        items={[
          <LogoItem key={1} className="bg-orange-300 text-neutral-900">
            {/* <SiAmazon />
             */}
             <img className="h-full" src="https://res.cloudinary.com/drlyyxqh9/image/upload/v1718783265/Bawri%20Group/For-profit/Plywood/img1_xpddxr.jpg" alt="" srcset="" />
          </LogoItem>,
          <LogoItem key={2} className="bg-green-300 text-neutral-900">
            {/* <SiGoogle />
             */}
             <img className="h-full" src="https://res.cloudinary.com/drlyyxqh9/image/upload/v1718782808/Bawri%20Group/For-profit/Analytics/quanttabg_oqpyuj.jpg" alt="" />
          </LogoItem>,
          <LogoItem key={3} className="bg-blue-300 text-neutral-900">
            {/* <SiMeta /> */}
            <img className="h-full" src="https://res.cloudinary.com/drlyyxqh9/image/upload/v1718782751/Bawri%20Group/For-profit/Cements/vinaybg_fcqvae.jpg" alt=""/>
          </LogoItem>,
          <LogoItem key={4} className="bg-white text-black">
            {/* <SiGithub /> */}
            <img className="h-full" src="https://res.cloudinary.com/drlyyxqh9/image/upload/v1718782887/Bawri%20Group/For-profit/Fashion%20Design/thaellabg_uys21m.png" alt=""  />
          </LogoItem>,
          <LogoItem key={5} className="bg-purple-300 text-neutral-900">
            {/* <SiTwitch /> */}
            <img className="h-full" src="https://res.cloudinary.com/drlyyxqh9/image/upload/v1718294480/Bawri%20Group/Non%20Profit/Education/educationbg-666b0c43de640_bo7gvj.webp" alt=""/>
          </LogoItem>,
        ]}
      />
    </section>
  );
};

const DELAY_IN_MS = 2500;
const TRANSITION_DURATION_IN_SECS = 1.5;

const LogoRolodex = ({ items }) => {
  const intervalRef = useRef(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setIndex((pv) => pv + 1);
    }, DELAY_IN_MS);

    return () => {
      clearInterval(intervalRef.current || undefined);
    };
  }, []);

  return (
    <div
      style={{
        transform: "rotateY(-20deg)",
        transformStyle: "preserve-3d",
      }}
      className="relative z-0 h-44 w-60 shrink-0 rounded-xl border border-neutral-700 bg-neutral-800"
    >
      <AnimatePresence mode="sync">
        <motion.div
          style={{
            y: "-50%",
            x: "-50%",
            clipPath: "polygon(0 0, 100% 0, 100% 50%, 0 50%)",
            zIndex: -index,
            backfaceVisibility: "hidden",
          }}
          key={index}
          transition={{
            duration: TRANSITION_DURATION_IN_SECS,
            ease: "easeInOut",
          }}
          initial={{ rotateX: "0deg" }}
          animate={{ rotateX: "0deg" }}
          exit={{ rotateX: "-180deg" }}
          className="absolute left-1/2 top-1/2"
        >
          {items[index % items.length]}
        </motion.div>
        <motion.div
          style={{
            y: "-50%",
            x: "-50%",
            clipPath: "polygon(0 50%, 100% 50%, 100% 100%, 0 100%)",
            zIndex: index,
            backfaceVisibility: "hidden",
          }}
          key={(index + 1) * 2}
          initial={{ rotateX: "180deg" }}
          animate={{ rotateX: "0deg" }}
          exit={{ rotateX: "0deg" }}
          transition={{
            duration: TRANSITION_DURATION_IN_SECS,
            ease: "easeInOut",
          }}
          className="absolute left-1/2 top-1/2"
        >
          {items[index % items.length]}
        </motion.div>
      </AnimatePresence>

      <hr
        style={{
          transform: "translateZ(1px)",
        }}
        className="absolute left-0 right-0 top-1/2 z-[999999999] -translate-y-1/2 border-t-2 border-neutral-800"
      />
    </div>
  );
};

const LogoItem = ({ children, className }) => {
  return (
    <div
      className={twMerge(
        "grid h-full w-52 place-content-center rounded-lg bg-neutral-700 text-6xl text-neutral-50",
        className
      )}
    >
      {children}
    </div>
  );
};