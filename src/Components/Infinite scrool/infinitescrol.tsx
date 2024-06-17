"use client";

import { cn } from "../../utils/cn";
import React, { useEffect, useRef, useState } from "react";

// Ensure the logos are correctly imported
import logo1 from '../../asset/BrandsLogo/brand1.svg';
import logo2 from '../../asset/BrandsLogo/brand2.svg';
import logo3 from '../../asset/BrandsLogo/brand3.svg';
import logo4 from '../../asset/BrandsLogo/brand4.svg';
import logo5 from '../../asset/BrandsLogo/brand5.svg';

export const items = [
  logo1,
  logo2,
  logo3,
  logo4,
  logo5,
  // Add more logos as needed
];

export const InfiniteMovingCards = ({
  items = [],
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}) => {
  const containerRef = useRef(null);
  const scrollerRef = useRef(null);

  useEffect(() => {
    addAnimation();
  }, []);

  const addAnimation = () => {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
    }
  };

  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty("--animation-direction", "forwards");
      } else {
        containerRef.current.style.setProperty("--animation-direction", "reverse");
      }
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden mask-image:linear-gradient(to right,transparent,white_20%,white_80%,transparent)",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
          items.length > 0 && "animate-scroll",
          pauseOnHover && "hover:animation-play-state:paused"
        )}
      >
        {items.map((logo, idx) => (
          <li
            className="w-[350px] max-w-full relative  flex-shrink-0 border-slate-700 px-8 py-2 md:w-[450px]"
            key={idx}
          >
            <div className="flex justify-center items-center h-full">
              <img src={logo} alt={`Logo ${idx}`} className="h-36 w-40" />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
