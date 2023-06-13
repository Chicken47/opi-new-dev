import { Power3, gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useEffect, useRef } from "react";

const ShortText = () => {
  const ease = Power3.easeOut();
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    let ctx = gsap.context(() => {
      gsap.fromTo(
        ".services-about-image",
        {
          yPercent: 20,
          scale: 1,
        },
        {
          yPercent: -20,
          scale: 2,
          ease: ease,
          scrollTrigger: {
            trigger: ".services-about-image",
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
      <div className="flex flex-col md:flex-row justify-between items-center py-20 max-w-[1366px] w-full px-10 md:px-0">
        <div className="flex flex-col justify-center items-start md:w-1/2 md:pl-20 md:pr-60">
          <span className={`text-[18px] font-jose w-full`}>
            We are a dynamic consulting firm committed to driving positive
            change through innovative solutions and strategic partnerships.
            <br />
            <br />
            With our unique blend of expertise and passion, we empower
            organizations and governments to create meaningful impact and
            navigate complex challenges.
          </span>
          <div className="px-8 py-2 mt-10 hidden md:flex justify-center font-bold text-white uppercase transition-all bg-ipink border-2 border-ipink rounded cursor-pointer hover:font-bold hover:border-2 hover:rounded-lg">
            Check out more
          </div>
        </div>
        <div className="md:w-1/2 flex items-center mt-8 md:mt-0 justify-center overflow-hidden">
          <img
            src="/images/png/about-focus-three.png"
            className="object-cover md:w-4/5 object-center overflow-hidden h-full services-about-image"
          />
        </div>
      </div>
    </div>
  );
};

export default ShortText;
