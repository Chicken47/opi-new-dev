import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export const TextSlideRightLeft = () => {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.fromTo(
      ".slider-div-one",
      { x: 700 },
      {
        x: -750,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top bottom",
          end: "top top",
          scrub: 0.1,
        },
      }
    );
  }, []);

  return (
    <div className="h-full slider-div-one w-[5000px] pb-40" ref={triggerRef}>
      <span
        className="text-[45px] font-extralight text-white h-full ml-4"
        ref={sectionRef}
      >
        <span
          className={`text-[80px] text-black font-extrabold uppercase`}
        >
          Radical Ideas Radical Ideas Radical Ideas Radical Ideas Radical Ideas Radical Ideas
        </span>
      </span>
      <div></div>
    </div>
  );
};