import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export const TextSlideRightLeft = () => {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(
        ".slider-div-one",
        { x: 700 },
        {
          x: -1500,
          scrollTrigger: {
            trigger: triggerRef.current,
            start: "top bottom",
            end: "top top",
            scrub: 1,
          },
        }
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <div
      className="h-[60px] slider-div-one w-[5000px] mb-20 mt-2"
      ref={triggerRef}
    >
      <span
        className="text-[45px] font-extralight text-white h-full ml-4"
        ref={sectionRef}
      >
        <span className={`text-[80px] text-black font-extrabold uppercase`}>
          Radical Ideas Radical Ideas Radical Ideas Radical Ideas Radical Ideas
          Radical Ideas
        </span>
      </span>
    </div>
  );
};
