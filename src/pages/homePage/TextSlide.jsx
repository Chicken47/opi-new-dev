
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const TextSlide = () => {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.fromTo(
      ".slider-div",
      { x: -1500 },
      {
        x: 0,
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
    <div className="h-full slider-div w-[4500px] pt-40" ref={triggerRef}>
      <span
        className="text-[45px] font-extralight text-white h-full ml-4"
        ref={sectionRef}
      >
        <span className={`text-[80px] text-black font-extrabold uppercase`}>Practical Solutions Practical Solutions Practical Solutions Practical Solutions</span>
      </span>
    </div>
  );
};

export default TextSlide;