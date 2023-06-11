import { Power3, gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useEffect, useRef } from "react";

const AboutIntro = () => {
  const ease = Power3.easeOut();
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    let ctx = gsap.context(() => {
      gsap.fromTo(
        ".abboout-image",
        {
          yPercent: 20,
          scale: 1,
        },
        {
          yPercent: -20,
          scale: 2,
          ease: ease,
          scrollTrigger: {
            trigger: ".abboout-image",
            scrub: true,
            start: "top bottom",
            end: "bottom top",
          },
        }
      );
    });
    return () => ctx.revert();
  });

  return (
    <div className="flex justify-evenly px-20 pb-32 mt-10">
      <div className="flex flex-col items-start py-40 w-1/2 px-20">
        <span className={`text-[20px] font-jose`}>
          We are a dynamic consulting firm committed to driving positive change
          through innovative solutions and strategic partnerships. With our
          unique blend of expertise and passion, we empower organizations and
          governments to create meaningful impact and navigate complex
          challenges.
        </span>
        <div className="px-8 py-2 mt-10 font-bold text-ipink uppercase transition-all bg-gray-200 border-2 border-ipink rounded cursor-pointer hover:border-gray-300 hover:bg-[#CE2273] hover:text-white hover:font-bold hover:border-2 hover:rounded-lg">
          Check out more
        </div>
      </div>
      <div className="w-1/2 flex items-center justify-center overflow-hidden">
        <img
          src="/images/png/bgimg1.png"
          className="object-cover w-4/5 object-center overflow-hidden h-[300px] abboout-image"
        />
      </div>
    </div>
  );
};

export default AboutIntro;
