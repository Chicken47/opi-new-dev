import { Power3, gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useEffect, useRef } from "react";

const AboutIntro = () => {
  const ease = Power3.easeOut();
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    let ctx = gsap.context(() => {
      gsap.fromTo(
        ".aaaabout-about-image",
        {
          yPercent: 20,
          scale: 1,
        },
        {
          yPercent: -20,
          scale: 2,
          ease: ease,
          scrollTrigger: {
            trigger: ".aaaabout-about-image",
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
    <div className="w-full flex justify-center">
      <div className="flex justify-between items-center py-20 max-w-[1366px] w-full">
        <div className="flex flex-col justify-center items-start w-1/2 max-w-[600px] pl-20 pr-60">
          <span className={`text-[18px] font-jose w-full`}>
            We are a dynamic consulting firm committed to driving positive
            change through innovative solutions and strategic partnerships.
            <br />
            <br />
            With our unique blend of expertise and passion, we empower
            organizations and governments to create meaningful impact and
            navigate complex challenges.
          </span>
          <div className="px-8 py-2 mt-10 font-bold text-white uppercase transition-all bg-ipink border-2 border-ipink rounded cursor-pointer hover:font-bold hover:border-2 hover:rounded-lg">
            Check out more
          </div>
        </div>
        <div className="w-1/2 flex items-center justify-center overflow-hidden">
          <img
            src="/images/png/about-focus-three.png"
            className="object-cover w-4/5 object-center overflow-hidden h-full aaaabout-about-image"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutIntro;
