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
      <div className="flex flex-col md:flex-row justify-between items-center py-20 max-w-[1366px] w-full">
        <div className="flex flex-col justify-center items-start md:w-1/2 max-w-[600px] md:pl-20 px-10 md:px-0">
          <span className={`text-[18px] font-jose w-full`}>
            We are a dynamic consulting firm committed to driving positive
            change through innovative solutions and strategic partnerships.
            <br />
            <br />
            With our unique blend of expertise and passion, we empower
            organizations and governments to create meaningful impact and
            navigate complex challenges.
          </span>
          <div className="px-8 py-2 mt-10 font-bold text-white uppercase hidden md:flex justify-center transition-all bg-ipink border-2 border-ipink rounded cursor-pointer hover:font-bold hover:border-2 hover:rounded-lg">
            Check out more
          </div>
        </div>
        <div className="md:w-1/2 flex items-center justify-center mt-10 md:mt-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1507668077129-56e32842fceb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
            className="object-cover w-4/5 object-center overflow-hidden h-full aaaabout-about-image"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutIntro;
