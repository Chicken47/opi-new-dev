import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const TextSlide = () => {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(
        ".slider-div",
        { x: -1500 },
        {
          x: 0,
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
    <div className="slider-div w-[4500px] h-[60px] mb-2" ref={triggerRef}>
      <span
        className="text-[45px] font-extralight text-white h-full ml-4"
        ref={sectionRef}
      >
        <span
          className={` text-[35px] md:text-[80px] text-black font-extrabold uppercase`}
        >
          Bridging Sectors Bridging Sectors Bridging Sectors Bridging Sectors
          Bridging Sectors
        </span>
      </span>
    </div>
  );
};

export default TextSlide;
